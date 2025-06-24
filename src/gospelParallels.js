import { mylog } from "./lib/env/env.js";
import { alandSynopsis } from "./alandSections.js";
import { ntBooksDict } from "./ntbooks.js";
import bibleRefUtils from "./lib/utils/bibleRefUtils.js";
import {gospels} from './lib/gospels.js';
/**
 * @import {pericopegroup} from "./alandSections.js"
 */




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
 * @param {string} primaryGospel -- which gospels, if any, to treat as "primary", which affects the sorting order of the results.
 *              This should be assigned to one of the enum values of the "gospels" const above or empty string (none selected). Default is empty string,
 *              which uses the order in which Aland arranged the pericopes.
 *              If set to another option, the results will be sorted according to the order of that gospel's texts.
 * @param {boolean} hideSolos - if true, results will exclude Aland's pericope groups which have only one column (no parallels)         
 * @returns {number[]} an array of integers, each of which corresponds to the pericope numbers assigned by
 *                      Aland's Synopsis Quattuor Evangeliorum, which contain the given NT text.
 */
export function getAlandPericopeNumbers(gospelRef, primaryGospel='', hideNonPrimary=false, hideSolos=false, hideNonPrimarySolos=false){
    //mylog("getAlandPericopeNumbers("+ gospelRef+")");
    const bookObj = bibleRefUtils.getBookChapVerseFromRef(gospelRef);
    
    const bookAbbrev = getBookAbbrev(bookObj.book);
    //mylog("trying to get bookabbrev from " + bookObj.book + ", and got: " + bookAbbrev);

    
    const found = filterSortAlandPericopes(alandSynopsis.pericopes.filter((obj)=>{
       
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
            
      
 
    }).map((p)=>p.pericope),primaryGospel,hideNonPrimary,hideSolos);
  //  mylog("AlandNumbers found: " + found.join(','));
    return found ? found : [];
}


//NB: in place!

/**
 * @description Sorts, in place, an array of Aland pericope numbers according to the arrangement of the selected gospel.
 * For pericopes which lack a text from the given gospel, these are placed (at the end of the list? or in Aland's order?)
 * @param {number[]} alandArray -- array of pericope numbers, using the numbering system of Aland. 
 * @param {string} primaryGospel -- one of the enum values in `gospels` enum in the alandSynopsis.js module.
 * @returns 
 */
export function sortAlandPericopes(alandArray,primaryGospel='' ){
    
    return alandArray.sort((a,b)=>{//move all sections without this gospel to end of array
        const perA=alandSynopsis.lookupPericope(a);
        const perB=alandSynopsis.lookupPericope(b);
        const refA=alandSynopsis.getPericopeGospelRef(perA,primaryGospel);
        const refB=alandSynopsis.getPericopeGospelRef(perB,primaryGospel);
        let retVal = 0;
        if (refA && !refB)
            retVal = -1;
        else if(refB && !refA)
            retVal = 1;
        return retVal;
        

    }).sort((a,b)=>{//now sort by ref!~
       // mylog("sortAlandPericopes.sort("+a+","+b+")", true);
         const retVal= sortByPrimaryFunc(alandSynopsis.lookupPericope(a),
                          alandSynopsis.lookupPericope(b),
                        primaryGospel);
        //if (a==267 ||b==267)
           // mylog("sortAlandPericopes.sort/lookedup("+alandSynopsis.lookupPericope(a).pericope+","+
          //  alandSynopsis.lookupPericope(b).pericope+")-->sort.retVal("+a+","+b+")="+retVal, true);
       return retVal;
    });
                        
}



//not in place!
/**
 * 
 * @param {number[]} alandArray 
 * @param {string} primaryGospel 
 * @param {boolean} hideNonPrimary 
 * @param {boolean} hideSolos 
 * @param {boolean} hideNonPrimarySolos
 * @returns {number[]}
 */
export function filterAlandPericopes(alandArray,primaryGospel='',
    hideNonPrimary=true,hideSolos=false,hideNonPrimarySolos=false){
        
    return alandArray.filter(
        (pNum)=>!hideNonPrimary || alandSynopsis.isPrimaryPericope(pNum,primaryGospel)).filter((pNum=>{
        let retVal = true;
        if ((!hideSolos) && !gospels.isValid(primaryGospel) && hideNonPrimarySolos) {
            //same as hideSolos:
            hideSolos=true
        }
        if( hideSolos || hideNonPrimarySolos) {
            
            const p = alandSynopsis.lookupPericope(pNum);
           // mylog('filterSortPers: checking for solos for pericope ' +pNum);
            if (hideSolos || (
                primaryGospel==gospels.names.MATTHEW && !p.Matt.primary ||
                primaryGospel==gospels.names.MARK && !p.Mark.primary ||
                primaryGospel==gospels.names.LUKE && !p.Luke.primary ||
                primaryGospel==gospels.names.JOHN && !p.John.primary 
            ) ) { //eliminate all single-column sections:
                let numCols = 0;
                for (const ref of [p.Matt.ref, p.Mark.ref, p.Luke.ref, p.John.ref]) {
                    if (ref && ref.length) {
                        numCols++;
                    }
                }
                if (numCols <= 1) {
                    
                    retVal = false;
                }
            }
           // mylog("hideSolos filter for pericope + " + pNum +" --> " + numCols + " cols found.")
        }

            
        
        return retVal;
            
     }));
}


//not in place!
/**
 * 
 * @param {number[]} alandArray 
 * @param {string} primaryGospel 
 * @param {boolean} hideNonPrimary 
 * @param {boolean} hideSolos 
 * @param {boolean} hideNonPrimarySolos
 * @returns {number[]}
 */
export function filterSortAlandPericopes(alandArray,primaryGospel='',
    hideNonPrimary=true,hideSolos=false,hideNonPrimarySolos=false){
        
    return filterAlandPericopes(sortAlandPericopes([...alandArray],primaryGospel),primaryGospel,
    hideNonPrimary,hideSolos,hideNonPrimarySolos);
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
 * @param {string} primaryGospel  - one of the alandSynopsis.gospels enum values.
 * @returns 
 */
export function sortByPrimaryFunc(a,b, primaryGospel=''){
    let retVal = 0;
    //const logMsg = "sortByPrimaryFunc("+[a,b].join(",")+")";
    let logMsg = "sortByPrimaryFunc(";
     //mylog(logMsg);
    let refA=alandSynopsis.getPericopeGospelRef(a,primaryGospel)
    let refB=alandSynopsis.getPericopeGospelRef(b,primaryGospel);
    
    //logMsg += "for "+ (primaryGospel ? primaryGospel : "NONE") +"["+refA+"],["+refB+"])";
    //mylog(logMsg+": about to compare refs...", true);
    let commonPrimaries=[];
    let commonGospels=[];
    if (refA && refB) {
        retVal = bibleRefUtils.sortChapVerseRefs(refA.split(";")[0], refB.split(";")[0]);
       // mylog("comparing A and B!")
    }
    else if((commonPrimaries = alandSynopsis.getCommonPrimaries(a,b)).length){
        
        retVal = bibleRefUtils.sortChapVerseRefs(a[gospels.nameAbbrevDict[commonPrimaries[0]]].ref.split(";")[0], 
        b[gospels.nameAbbrevDict[commonPrimaries[0]]].ref.split(";")[0]);
       // mylog("doing commonPrimaries:"+retVal);
    }
    else if((commonGospels = alandSynopsis.getCommonGospels(a,b)).length){
        retVal = bibleRefUtils.sortChapVerseRefs(a[gospels.nameAbbrevDict[commonGospels[0]]].ref.split(";")[0], 
        b[gospels.nameAbbrevDict[commonGospels[0]]].ref.split(";")[0]);
        //mylog("doing commonGospels:"+retVal);
    }    
    /*else if(refA) {//A but no B. Keep/put A first
        retVal=-1
        mylog("Ref A not b", true);

    }
    else if(refB){//B but no A. put B first
        retVal = 1;
        mylog("Ref B not A", true)
    }*/
    else{//no a and no b: use default ordering
        retVal = parseInt(a.pericope) - parseInt(b.pericope);
       // mylog("neither A nor b", true)
    }
       
  // mylog(logMsg+". retval -- > " + retVal,true);
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
        //mylog("getAlandPericopeRefs("+alandPericopeNum+") found NO RESULTS!")
    }
    
    return refs;

}

/**
 * 
 * @param {string} refString  -- a reference to a NT single verse, e.g., "1 Cor 2:11"
 * @param {number} sortByGospel
 * @returns {number[]} An array of numbers, each of which is a section (1-18) in  Aland's Synopsis where the verse appears, if at all. 
 * If the verse appears in no such section, returns an empty array.
 */
export function getAlandSection(refString,sortByGospel=''){
//"getAlandSection("+refString+")");
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
    //mylog("getBookNameBySyn("+syn+")->id:"+id+", name:" +name)
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

export default {
    gospels, getBookName, getAlandSection, getAlandPericopeRefs, 
    //getBookChapVerseFromRef, 
    getBookID, getBookAbbrev, getAlandPericopeNumbers, ntBooksDict, alandSynopsis, sortByPrimaryFunc,sortAlandPericopes,
}

export const testing = {
   // getBookChapVerseFromRef, createNumArrayFromStringListRange, cleanNumString, splitBookChap,sortChapVerseFunc, refIncludes
}

export const utils = testing