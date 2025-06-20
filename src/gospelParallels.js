import { mylog } from "./lib/env/env.js";
import { alandSynopsis, gospels } from "./alandSections.js";
import { ntBooksDict } from "./ntbooks.js";
import bibleRefUtils from "./lib/utils/bibleRefUtils.js";
//const mylog=log.mylog;



/**
 * 
 * @param {string} refString -- a NT book name of some sort
 * @returns {number|null} - the TF node id of the book, if a matching one is found! 0 otherwise.
 */
export function getBookID(refString) {
    refString = refString.replaceAll(/\s+/g,' ').trim();
    
    const found = Object.keys(ntBooksDict).find((k)=>(ntBooksDict[k].name.toLowerCase() == refString.toLowerCase()) || ntBooksDict[k].syn.map((s)=>s.toLowerCase().replaceAll("_", " ")).includes(refString.toLowerCase().replaceAll("_"," ")));
    if (found)
        return parseInt(found);
    else 
        return 0;
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
export function getAlandPericopeNumbers(gospelRef, primaryGospel=gospels.NONE, hideNonPrimary=false){
    //mylog("getAlandPericopeNumbers("+ gospelRef+")");
    const bookObj = bibleRefUtils.getBookChapVerseFromRef(gospelRef);
    
    const bookAbbrev = getBookAbbrev(bookObj.book);
    //mylog("trying to get bookabbrev from " + bookObj.book + ", and got: " + bookAbbrev);

    
    const found = alandSynopsis.pericopes.filter((obj)=>{
       
        //mylog("...checking alandSynopsis.pericopes[" + k + "][" + bookAbbrev +"].ref")
        //mylog(alandSynopsis.pericopes[k][bookAbbrev]);
        if (obj[bookAbbrev] && obj[bookAbbrev].ref){
            const refsMinusBook = obj[bookAbbrev].ref.split(";")
            //mylog('refsMinusBook = ' + refsMinusBook)
            for (const theSynRef of refsMinusBook){
                if (bibleRefUtils.refIncludes(bookAbbrev+" "+theSynRef,bookAbbrev + " " +bookObj.chap + (bookObj.v ? ":" +bookObj.v : '')))
                    return true;
                else{
              //      mylog("..." + gospelRef +" NOT found in " +bookAbbrev+" "+theSynRef)
              //      return false;
                }
            }
         //   mylog("didn't find match for " + gospelRef)
            return false;
        }
        else {
            //check "other" refs
          //  mylog("checking 'other' for "+ gospelRef);
            let otherArray = obj.other.ref ? obj.other.ref.split(";") : [];
            
            //mylog("other array = ");
            //mylog(otherArray);
            if (otherArray.filter((otherRef)=>bibleRefUtils.refIncludes(otherRef,gospelRef)).length > 0) {
                
            
             //   mylog("found 'other' ref for " +gospelRef + " in " + obj.pericope)
                //mylog(otherArray)
                return true;
            }
                
            else {
               // mylog("Failed to find gospel or 'other' for pericope " + gospelRef) 
                return false;
            }
        }
            
      
 
    })
    .filter((o)=>{
        let retVal = true;
        if( hideNonPrimary &&
            (   (primaryGospel==gospels.MATTHEW && !o.Matt.primary) ||
                (primaryGospel==gospels.MARK && !o.Mark.primary) ||
                (primaryGospel==gospels.LUKE && !o.Luke.primary) ||
                (primaryGospel==gospels.JOHN && !o.John.primary)
            )
        )
            retVal = false;

        return retVal;
            
     })
    .sort((a,b)=>sortByPrimaryFunc(a,b,primaryGospel)).map((o)=>o.pericope);
    mylog("AlandNumbers found: " + found.join(','));
    return found ? found : [];
}

//NB: in place!

/**
 * @description Sorts, in place, an array of Aland pericope numbers according to the arrangement of the selected.
 * For pericopes which lack a text from the given gospel, these are placed at the end of the list
 * @param {number[]} alandArray -- array of pericope numbers, using the numbering system of Aland. 
 * @param {number} primaryGospel -- one of the enum values in `gospels` enum in the alandSynopsis.js module.
 * @returns 
 */
export function sortAlandPericopes(alandArray,primaryGospel=gospels.NONE ){
    return alandArray.sort((a,b)=>
        sortByPrimaryFunc(alandSynopsis.lookupPericope(a),
                          alandSynopsis.lookupPericope(b),
                        primaryGospel));
}

//not in place!
export function filterSortAlandPericopes(alandArray,primaryGospel=gospels.NONE){
    return sortAlandPericopes([...alandArray],primaryGospel).filter((p)=>alandSynopsis.isPrimaryPericope(p,primaryGospel));
}
/**
 * 
 * @param {{pericope: number, title: string, 
     *  Matt: { ref: string,  primary: boolean }, 
     *  Mark: { ref: string , primary: boolean },
     *  Luke: { ref:  string , primary: boolean }, 
     *  John: { ref:string , primary: boolean }, 
     *  other: { ref:string }}} a
 * @param {{pericope: number, title: string, 
     *  Matt: { ref: string,  primary: boolean }, 
     *  Mark: { ref: string , primary: boolean },
     *  Luke: { ref:  string , primary: boolean }, 
     *  John: { ref:string , primary: boolean }, 
     *  other: { ref:string }}} b 
 * @param {number} primary  - one of the alandSynopsis.gospels enum values.
 * @returns 
 */
export function sortByPrimaryFunc(a,b, primaryGospel=gospels.NONE){
     let retVal = 0;
    // const logMsg = "sortByPrimaryFunc("+[a,b].join(",")+")";
    let logMsg = "sortByPrimaryFunc(";
     //mylog(logMsg);
        if (primaryGospel==gospels.MATTHEW){
            if (a.Matt && a.Matt.ref && b.Matt && b.Matt.ref ) {
                retVal = bibleRefUtils.sortChapVerseRefs(a.Matt.ref.split(";")[0], 
                b.Matt.ref.split(";")[0]);
                
            }
            else {
                if (!b.Matt || ! b.Matt.ref){
                    retVal = 0; //a, but no b; leave the same
                }
                else {
                    retVal = 1; // b, but no a. reverse.
                }
            }

             logMsg += ("[Matt " + a.Mark.ref+"], [Matt "+b.Mark.ref+"])");
        }
        else if (primaryGospel==gospels.MARK) {
            if (a.Mark && a.Mark.ref && b.Mark && b.Mark.ref){
                retVal = bibleRefUtils.sortChapVerseRefs(a.Mark.ref.split(";")[0], 
                b.Mark.ref.split(";")[0]);
            }
            else {
                if (!b.Mark || ! b.Mark.ref){
                    retVal = 0; //no b, maybe a; leave the same
                }
                else {
                    retVal = 1; // b, but no a. reverse.
                }
            }
            logMsg += ("[Mk " + a.Mark.ref+"], [Mark "+b.Mark.ref+"])");
           // mylog(logMsg+"-->"+ retVal);
        }
        else if (primaryGospel==gospels.LUKE){
            if (a.Luke && a.Luke.ref && b.Luke && b.Luke.ref){
                retVal = bibleRefUtils.sortChapVerseRefs(a.Luke.ref.split(";")[0], b.Luke.ref.split(";")[0]);
                
                logMsg+="Luke ("+[a.Luke.ref,b.Luke.ref].join(",") + ")";
            }
            else {
                if (!b.Luke || ! b.Luke.ref){
                    retVal = 0; //a, but no b; leave the same
                   // mylog(logMsg+": HERE");
                }
                else {
                    retVal = 1; // b, but no a. reverse.
                    // mylog(logMsg+": THERE")
                }
            }
           //  mylog(logMsg + "w/ Lucan primacy, result = " + retVal);
            logMsg += ("[Luke " + a.Mark.ref+"], [Luke "+b.Mark.ref+"])");
                
        }
        else if (primaryGospel==gospels.JOHN){
            if (a.John && a.John.ref && b.John && b.John.ref) {
                retVal = bibleRefUtils.sortChapVerseRefs(a.John.ref.split(";")[0], b.John.ref.split(";")[0]);
            }
            else {
                if (!b.John || ! b.John.ref){
                    retVal = 0; //a, but no b; leave the same
                }
                else {
                    retVal = 1; // b, but no a. reverse.
                }
            }
             logMsg += ("[John " + a.Mark.ref+"], [John "+b.Mark.ref+"])");
        }
        else{
            retVal = parseInt(a.pericope) - parseInt(b.pericope);
        }
       // mylog(logMsg+" -- > " + retVal);
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
export function getAlandSection(refString,sortByGospel=gospels.NONE){
    mylog("getAlandSection("+refString+")");
    refString = bibleRefUtils.cleanString(refString);
    const found = alandSynopsis.sections.filter(
        (sec)=>sec.refs.split(';').find(
                (secRef)=>secRef ? bibleRefUtils.refIncludes(secRef,refString) : false));
    if (found)
        return found.map((sec)=>sec.section).sort((a,b)=>{
            return sortByPrimaryFunc(a,b,sortByGospel)
    });
    else return [];
}

export function getBookNameBySyn(syn){
    
    const id = getBookID(syn)
    const name = getBookName(id);
    mylog("getBookNameBySyn("+syn+")->id:"+id+", name:" +name)
    return name;
}
//move to alandSynopsis object!

/**
 * 
 * @param {number} node 
 * @returns {string}
 */
export function getBookName(node){
    //console.log("=========================================================");
    //mylog("HERE WE ARE!!========")
   // mylog("=========================================================");
    if (!ntBooksDict[String(node)]){
     //   mylog("did not find " + node + " in ntBooksDict");
    }
    const name =  ntBooksDict[node] ? ntBooksDict[node].name : ''
    //mylog("getBookName("+node+")-->'" + name+"'");
    return name;
}

export {ntBooksDict, alandSynopsis, gospels}

/*export default {
    getBookName, getAlandSection, getAlandPericopeRefs, getBookChapVerseFromRef, getBookID, getBookAbbrev, getAlandPericopeNumbers, ntBooksDict, alandSynopsis
}*/

export const testing = {
   // getBookChapVerseFromRef, createNumArrayFromStringListRange, cleanNumString, splitBookChap,sortChapVerseFunc, refIncludes
}

export const utils = testing