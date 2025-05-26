import { mylog } from "./env/env.js";
import { alandSynopsis } from "./alandSections.js";
import { ntBooksDict } from "./ntbooks.js";
//const mylog=log.mylog;

export const gospels = {
    MATTHEW: 0,
    MARK: 1,
    LUKE: 2,
    JOHN: 3,
    NONE: 4
}

/**
 * 
 * @param {string} refString -- a NT book name of some sort
 * @returns {number|null} - the TF node id of the book, if a matching one is found! null otherwise.
 */
export function getBookID(refString) {
    refString = refString.replaceAll(/\s+/g,' ').trim();
    const found = Object.keys(ntBooksDict).find((k)=>ntBooksDict[k].syn.includes(refString));
    if (found)
        return parseInt(found);
    else 
        return null;
}

/**
 * 
 * @param {string} refString  -- a NT book name
 * @returns {string} the abbreviation of the book we're using, standardize searches and grouping, etc. If none, returns empty string.
 */
export function getBookAbbrev(refString){
    const bookID = getBookID(refString);
    if(bookID)
        return ntBooksDict[bookID].abbrev;
    else
        return '';
}

//mylog("importing gospelPars...");
/**
 * 
 * @param {string} gospelRef -- the reference to a gospel verse (E.g., "Matt 3:17")
 * @param {number} primaryGospel -- which gospels, if any, to treat as "primary", which affects the sorting order of the results.
 *              This  Should be assigned to one of the enum values of the "gospels" const above. Default is "gospels.NONE" (=4),
 *              which uses the order in which Aland arranged the pericopes.
 *              If set to another option, the results will be sorted according to the order of that gospel's texts.
 *          
 * @returns {number[]} an array of integers, each of which corresponds to the pericope numbers assigned by
 *                      Aland's Synopsis Quattuor Evangeliorum, which contain the given NT text.
 */
export function getAlandPericopeNumbers(gospelRef, primaryGospel=gospels.NONE){
    //mylog("getAlandPericopeNumbers("+ gospelRef+")");
    const bookObj = getBookChapVerseFromRef(gospelRef);
    const bookAbbrev = getBookAbbrev(bookObj.book);

    
    const found = alandSynopsis.pericopes.filter((obj)=>{
       
        //mylog("...checking alandSynopsis.pericopes[" + k + "][" + bookAbbrev +"].ref")
        //mylog(alandSynopsis.pericopes[k][bookAbbrev]);
        if (obj[bookAbbrev] && obj[bookAbbrev].ref){
            const refsMinusBook = obj[bookAbbrev].ref.split(";")
            //mylog('refsMinusBook = ' + refsMinusBook)
            for (const theSynRef of refsMinusBook){
                if (refIncludes(bookAbbrev+" "+theSynRef,gospelRef))
                    return true;
                else{
              //      mylog("..." + gospelRef +" NOT found in " +bookAbbrev+" "+theSynRef)
                }
            }
            //mylog("didn't find match for " + gospelRef)
            return false;
        }
        else {
            //check "other" refs
          //  mylog("checking 'other' for "+ gospelRef);
            let otherArray = obj.other.ref ? obj.other.ref.split(";") : [];
            
            //mylog("other array = ");
            //mylog(otherArray);
            if (otherArray.filter((otherRef)=>refIncludes(otherRef,gospelRef)).length > 0) {
                
            
             //   mylog("found 'other' ref for " +gospelRef + " in " + obj.pericope)
                //mylog(otherArray)
                return true;
            }
                
            else {
                //mylog("Failed to find gospel or 'other' for pericope " + gospelRef) 
                return false;
            }
        }
            
      
 
    }).map((o)=>o.pericope);
    return found ? found : [];
}

/**
 * @description - returns true if one NT reference is contained within another, e.g., refIncludes("Matt 1:1,3-10", "Matt 1:4") and  
 *                  refIncludes("Rev", "Rev 2") each return true, because the last parameter is contained in the first;
 *                 but refIncludes("Mark 1", "Mark 2:2"), refIncludes("Luke 1:4", "Luke 1:7"), and  refIncludes("Luke 16", "Mark 16:2")
 *                  each return false, because the later are not contained in the former.
 * @param {string} containingRef -- a reference to a book, chapter, verse, chapter-range or verse-range. 
 * @param {string} includedRef --  a reference to a book, chapter, or verse. NOT a range!(?) todo: allow for includedrange!
 * @returns {boolean} true if the includedRef is contained in the containerRef
 */
function refIncludes(containingRef, includedRef) {
    mylog("refInclues("+[containingRef,includedRef].join(',')+")...");
    let passed = true;
    const logMsgFunc = "refIncludes('" + containingRef + ", '" + includedRef + "')";
    const containingObj = getBookChapVerseFromRef(containingRef.trim().replaceAll(/\s+/g, ' '));
    const includedObj = getBookChapVerseFromRef(includedRef.trim().replaceAll(/\s+/g, ' '));
    if (containingObj.book != includedObj.book) {
        passed = false;
    }
    
    if (containingObj.chap?.includes('-')) { //chap range!
        if(containingObj.v?.includes('-')){
            //oops! bad input: to many ranges
            //mylog(logMsgFunc  + " bad input: both verse and chapter ranges");
        }
        else {
            const allowedChaps = createNumArrayFromStringListRange(containingObj.chap);
            //keep going...
            const includedChap = parseInt(includedObj.chap)
            if (includedChap && !allowedChaps.includes(includedChap)) {  //failed: not in range
                passed = false;
               // mylog(logMsgFunc + "-->false: included is not in container  chapter range");
            }
            else { //we passed! do nothing!

            }
        }   
    }
    else if (containingObj.v?.includes('-')){ //verse range!
        if (containingObj.chap != includedObj.chap) {
            passed = false;
        }
        else {//chapters match, but do verses?
            const allowedVerses=createNumArrayFromStringListRange(containingObj.v);

            const includedV = parseInt(includedObj.v);
            if (includedV && !allowedVerses.includes(includedV)) { //oops: not in range
                passed = false;

            }
            else { //we passed! do nothing!
                
            }
        }
    }
    else { //not a range: let's see what we've got!
        if (containingObj.chap && 
            containingObj.chap != includedObj.chap){ //not within the container chapter
            passed = false;
        }
        else if(containingObj.v && containingObj.v != includedObj.v){ //book and chap match. Do the verses?
            passed = false; 
        }  
    }
    //mylog("refIncludes -> " + passed)
    return passed;
}

function cleanString(str){
    return str.replaceAll(/\s+/g, ' ').trim();
}

function cleanNumString(numString){
    return cleanString(numString);
}
/**
 * 
 * @param {string} numString - a list of integers or integer ranges, separated by commas. Eg., "1,2,4-7", "3", "3-6,4", etc.
 * @returns {number[]} - an array of all the numbers in the given list, e.g., "1,2,4-7" --> [1,2,4,5,6,7], etc.
 */
function createNumArrayFromStringListRange(numString){
    numString=cleanNumString(numString);
    const nums=[];
    const sepGroups = cleanNumString(numString).split(',');
    for (const group of sepGroups){
        const ranges = group.split("-");
        const min = parseInt(ranges[0]);
        const max = ranges.length > 1 ? parseInt(ranges[1]) : null;

        if (ranges.length > 2) //bad input!
            return [];
        else if (ranges.length == 2 && max){
            if (min < max){
                for (let i = min; i <= max; i++) {
                    if (!nums.includes(i))
                        nums.push(i);
                }
            }
            
        }
        else if (ranges.length == 1){ //no range, just a plain number!
            
            if (!nums.includes(min))
                nums.push(min);
        }
        else{
            //bad input?; don't add anything.
        }
    }
    return nums.sort();
}

/**
 * 
 * @param {string} string 
 * @returns {{book:string|null, chap:string|null}}
 */
function splitBookChap(string){
    const matches = cleanString(string).match(/^(([1-3]+ +)?[a-zA-Z]+)( +([0-9a-z-]+))?$/); //reading 'chapters' which might actually be verses, i.e., Jude 3a
    let theBook = null,theChap = theBook;

    if (matches && matches.length >=5){ //got chapter
        theBook = matches[1];
        theChap = matches[4] ? matches[4] : null;
    }
    else if(matches[1]){//just a book
        theBook=matches[1];
      
    }
    else{
        //error
        mylog("splitBookChap could not parse '"+string+"'");
    }

   // mylog("splitBookChap(string)->{b:" + theBook + ", c:"+theChap+"}");
    return {book: theBook, chap: theChap}
}


/**
 * 
 * @param {string} refString  -- NT ref string of a book, chapter,  verse, or a chapter range or verse range.
 *      E.g.:"1 Cor 2:3", "1 Cor 2", "1 Cor 2:3-4", "1 Cor 2-3" but NOT "1 Cor-2 Cor" nor "1 Cor 2-3:4-5" (which doesn't make sense)
 * @returns {{book:string|null, chap:string|null, v:string|null}}
 */

//TODO: finish....incomplete state!
// simplify: just separate book, chap, and vv portions of strings; prob don't need to handle ranges? (use sep function)
function getBookChapVerseFromRef(refString){


    refString=cleanString(refString);
    let book = null,  chap = book, v = book;
    //NB books with only 1 chap: [Phlm, Jude,2 John, 3 John]
    let badInput = false;
    if (refString.split(":").length == 2){//got explicit verses
        let bookChap ='';
        [bookChap,v] = refString.split(":");
        if (v){ //got verses as expected
            const bookChapObj = splitBookChap(bookChap);
            book = bookChapObj.book;
            chap = bookChapObj.chap;
        }
        else{ //what?? bad input: colon with not verses! (e.g., "Eph 2:")
            badInput=true;
            mylog("bad input with colon: '"+refString+"'");
        }
    }
    else { //no verses, just book and chap
        const bookChapObj = splitBookChap(refString);
        book = bookChapObj.book;
        chap = bookChapObj.chap;
        if(!chap){
           // mylog("getBookChapVerseFromRef("+refString+") got no chap!"+chap)
        }

    }
    return {book: book,chap: chap, v: v}
}

/**
 * 
 * @param {string} string  - chapter and verse(s). E.g.,  "1:3" or "2" or even "2-3" (w/o verses)
 * @returns {{chapter:string, verse:string}}
 */
function getChapVerseFromRef(string){
    string = cleanString(string);
    const vSplit = string.split(":");
    const chap = vSplit.length > 0 ? vSplit[0] : null;
    const v = vSplit.length > 0 ? (vSplit[1] ? vSplit[1] : null) : null;
    return {chap: vSplit[0], v: v}

}

/**
 * 
 * @param {string} ref1 -- chapter and verse reference, eg., "1:3" or "2" or even "2-3" (w/o verses)
 * @param {string} ref2 -- (same)
 * @returns -1 if ref1 is earlier than ref2, 1 if opposite; 0 if they're the same or they begin at same point/verse.
 */
function sortChapVerseFunc(ref1, ref2) {
    const logMsgFunc = "sortChapVerseFunc(" +[ref1,ref2].join(',') + ")";
    const chapV1 = getChapVerseFromRef(ref1); 
    const chapV2 = getChapVerseFromRef(ref2);
  //  mylog("...getChapVerseFromRef gives us: ")
  //  mylog(chapV1);
   // mylog(chapV2);
    let retVal = 0;
    
    if (chapV1.chap && chapV2.chap) {//each has a chapter...
        const chapRange1 = createNumArrayFromStringListRange(chapV1.chap);
        const chapRange2 = createNumArrayFromStringListRange(chapV2.chap);
        if (chapRange1.length > 0 && chapRange2.length > 0){
            if (chapRange1[0] == chapRange2[0]){ //same chapter, need to compare verses...
                if (chapV1.v && chapV2.v){ //have verses...
                    const vRange1 = createNumArrayFromStringListRange(chapV1.v);
                    const vRange2 = createNumArrayFromStringListRange(chapV2.v);
                    if (vRange1.length > 0 && vRange2.length > 0){
                        retVal = vRange1[0] - vRange2[0];
                       // mylog(logMsgFunc + ": compared vv [" + [vRange1[0],vRange1[1]].join(',') + "], returning: " + retVal);
                    }
                    else{ //only one with a verse? start with whole chapter. bad input?? keep same order for now.
                       // mylog(logMsgFunc+": got chaps, and vv, but keeping same order of " +[ref1,ref2].join(","));
                    }
                }
                else{ //only 1 with vv. put whole chapter first:
                    if (!chapV1.v) {
                        retVal = -1;
                      //  mylog(logMsgFunc+": only one with vv, returning -1")

                    }
                    else{
                        retVal = 1;//second has chapter, put it first
                      //  mylog(logMsgFunc+": only one with vv, returning 1")
                    }
                }
            }
            else{ //different chaps, lets compare them alone:
                retVal = chapRange1[0] - chapRange2[0]
               // mylog(logMsgFunc+": diff chaps, returning  one with vv, returning "+retVal);
            }
        }
        else{ //have, at most, only one ref with a chapter

            if (!chapV1.chap)
                retVal = -1;
            else
                retVal = 1;
        }

    }
    else{ //at most only one ref has chapters!@
        if (!chapV1.chap)
            retVal = -1;
        else 
            retVal = 1;
    }
   // mylog(logMsgFunc + ": returning " +  retVal)
    return retVal;

}

/**
 * 
 * @param {number} alandPericopeNum 
 * @param {boolean} ignoreOthers - if true (default), we'll exclude any non-gospel NT parallels from return value. If false, other non-gospel NT parallels will be included.
 * @returns {string[]} -- array of strings, each of which is an NT/gospels reference
 */
export function getAlandPericopeRefs(alandPericopeNum, ignoreOthers=true){

    const pericope = alandSynopsis.pericopes.find((obj)=>obj.pericope == alandPericopeNum);
    const refs = [];
    if (pericope) {
        for (const gospelAbbrev of ["Matt","Mark","Luke","John"]) {
            if (pericope[gospelAbbrev].ref){
                pericope[gospelAbbrev].ref.split(";").forEach((theRef)=>{
                    refs.push(gospelAbbrev.trim()+" "+theRef.trim());

                })
            }
        }
        
        if (!ignoreOthers){
            if(pericope.other.ref){
                pericope.other.ref.split(";").forEach((theRef)=>{
                    refs.push(theRef.trim());
                })
            }
        }
    }
    else {
        mylog("getAlandPericopeRefs("+alandPericopeNum+") found NO RESULTS!")
    }
    
    return refs;

}

/**
 * 
 * @param {string} refString  -- a reference to a NT single verse, e.g., "1 Cor 2:11"
 * @returns {number[]} An array of numbers, each of which is a section (1-18) in  Aland's Synopsis where the verse appears, if at all. 
 * If the verse appears in no such section, returns an empty array.
 */
export function getAlandSection(refString){
    mylog("getAlandSection("+refString+")");
    refString = cleanString(refString);
    const found = alandSynopsis.sections.filter(
        (sec)=>sec.refs.split(';').find(
                (secRef)=>secRef ? refIncludes(secRef,refString) : false));
    if (found)
        return found.map((sec)=>sec.section).sort();
    else return [];
}
export const testing = {
    getBookChapVerseFromRef, createNumArrayFromStringListRange, cleanNumString, splitBookChap,sortChapVerseFunc, refIncludes
}

export const utils = testing