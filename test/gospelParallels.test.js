import * as gPar from '../src/gospelParallels.js';
import { mylog } from '../src/lib/env/env.js';
import { expect, test } from 'vitest';
import { alandSynopsis } from "../src/alandSections.js";
import * as MathUtils from "../src/lib/utils/math-utils.js";

function rest(name,func){
    //do nothing;
}
test('dummy', async () => {
	
	expect(true).toBe(true);
	//await expect(page.locator('h1')).toBeVisible();
});

test('getBookID', async () => {
	const books=[
        {ref: "1 Cor", id: 137786},
        {ref: "I Corinthians", id: 137786},
        

    ];

    for (const b of books){
        expect(gPar.getBookID(b.ref)).toEqual(b.id);
    }
    //expect(true).toBe(false);

	//await expect(page.locator('h1')).toBeVisible();
});

test('getBookAbbrev', async () => {
	const books=[
        {ref: "1 Cor", abbrev: "1 Cor"},
        {ref: "II Corinthians", abbrev: "2 Cor"},
        {ref: "Matthew", abbrev: "Matt"},
        {ref: "Mt", abbrev: "Matt"},
        {ref: "Hebr", abbrev: "Heb"},
        

    ];

    for (const b of books){
        expect(gPar.getBookAbbrev(b.ref)).toEqual(b.abbrev);
    }
    //expect(true).toBe(false);

	//await expect(page.locator('h1')).toBeVisible();
});


test('getBookNameBySyn', async () => {
	const books=[
        {ref: "1 Cor", name: "I_Corinthians"},
        {ref: "II Corinthians", name: "II_Corinthians"},
        {ref: "Matthew", name: "Matthew"},
        {ref: "Mt", name: "Matthew"},
        {ref: "mt", name: "Matthew"},
        {ref: "Hebr", name: "Hebrews"},
        {ref: "2 Pet", name: "II_Peter"}
        

    ];

    for (const b of books){
        expect(gPar.getBookNameBySyn(b.ref)).toEqual(b.name);
    }
    //expect(true).toBe(false);

	//await expect(page.locator('h1')).toBeVisible();
});




test('getAlandPericopeNumbers', async () => {
	const alandLookUps =[
        {ref: "Matt 28:17", alands: [359,364]},
        //{ref: "Mt 28:17", alands: [359,364]},
        {ref: "Matt 13:12", alands: [123,125]},
        {ref: "Matt 14:14", alands: [146]},
        {ref: "Mark 6:30", alands: [145]},
        {ref: "1 Pet 4:14", alands: [51,78]},
        {ref: "Acts 1:13b", alands: [49,99,365]},

    ]
	
    for (const lookups of alandLookUps){
        const foundAlandSects = gPar.getAlandPericopeNumbers(lookups.ref);
        //mylog("foundalandSects=");
        //mylog(foundAlandSects);
        expect(foundAlandSects.length).toEqual(lookups.alands.length);
        
        let found = 0;
        for (const section of lookups.alands){
            expect(foundAlandSects.includes(section)).toBe(true);
            found += 1;    
        }
        expect(found).toEqual(lookups.alands.length);
    }
  //  expect(true).toBe(false);
	//await expect(page.locator('h1')).toBeVisible();
});




test('getAlandSection', async () => {
	const sectionTests = [
        {ref: "Matt 3:15", secs: [3]},
        {ref: "Matt 28:17", secs: [17,18]},
        {ref: "Rom 2:3", secs: [6,7]},
    ]
    for (const t of sectionTests){
        expect(gPar.getAlandSection(t.ref)).toEqual(t.secs);
    }
	expect(true).toBe(true);
	//await expect(page.locator('h1')).toBeVisible();
});


test('getAlandPericopeRefs', async () => {
	const tests = [
        //{per: 16, refs: ["Matt 3:11-12", "Mark 1:7-8", "Luke 3:15-18", "John 1:24-28"]},
        {per: 16, refs: ["Matt 3:11-12", "Mark 1:7-8", "Luke 3:15-18", "John 1:24-28", "Acts 13:24-25"]},
        {per: 255, refs: ["Matt 19:23-30","Mark 10:23-31","Luke 18:24-30","Luke 22:28-30"]},


    ]
	
    for (const test of tests){
        //mylog("test getAlandPericopeRefs: about to call with pericope input:" + test.per);
        const foundRefs = gPar.getAlandPericopeRefs(test.per,false);
       // mylog("found Refs:")
        //mylog(foundRefs);
        expect(foundRefs.length).toEqual(test.refs.length);
        for (const ref of test.refs){
        //    mylog("test getAlandPericopeRefs: checking for test ref '" + ref +"' to be in: [" + foundRefs.join(',')+"]:")
            expect(foundRefs.includes(ref)).toBe(true);
        }
    }
    //expect(true).toBe(true);
	//await expect(page.locator('h1')).toBeVisible();
});

test('getBookName', async () => {
	const tests = [
        {lookup: 137780, name: "Matthew"}
    ]
    for (const t of tests){
        expect(gPar.getBookName(t.lookup)).toEqual(t.name);
    }
	expect(true).toBe(true);
	//await expect(page.locator('h1')).toBeVisible();
});

test('getBookName', async () => {
	const tests = [
        {lookup: 137780, name: "Matthew"}
    ]
    for (const t of tests){
        expect(gPar.getBookName(t.lookup)).toEqual(t.name);
    }
	expect(true).toBe(true);
	//await expect(page.locator('h1')).toBeVisible();
});


test('sortAlandPericopes test', async () => {
	const tests =[
    
        {input:[287, 288, 289, 290, 291, 294, 292, 293, 295], output: [291, 294, 287, 288, 289, 290, 292, 293, 295],
            primary: gPar.gospels.names.LUKE},
        {input:[20,65,51], output: [20,51,65],
            primary: gPar.gospels.names.MATTHEW},    
        {input: [13, 14, 15, 16, 17, 18, 19, 20], output: [13, 14, 15, 16, 18, 19,20,17],
            primary: gPar.gospels.names.MARK}

    ]
	
    for (const t of tests){
        
        //const output = t.input.toSorted((a,b)=>gPar.sortByPrimaryFunc(a,b,t.primary));
        gPar.sortAlandPericopes(t.input,t.primary)
        expect(t.input.length).toEqual(t.output.length);
        expect(t.input).toEqual(t.output);
    }
});


test('isPrimaryPericope Filter test', async () => {
	const tests =[
     
        {input:[4,6], output: [4],
            primary: gPar.gospels.names.LUKE},
        {input: [267,268,269,270,271,272,273,274,275,276], output:[269,271,272,275,276], 
            primary: gPar.gospels.names.MATTHEW}
      
 
    ]
	
    for (const t of tests){
        
        //const output = t.input.toSorted((a,b)=>gPar.sortByPrimaryFunc(a,b,t.primary));
        const output = t.input.filter((n)=>gPar.alandSynopsis.isPrimaryPericope(n,t.primary));
        expect(output.length).toEqual(t.output.length)
        expect(output).toEqual(t.output);
    }
});

test('sort and filter test', async () => {
	const tests =[
     
        {input:[4,6], output: [4],
            primary: gPar.gospels.names.LUKE},
        {input: [269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286], 
            output:[269], primary: gPar.gospels.names.JOHN},
        {input: [269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286], 
            output:[269,270,273,274,276,278,280,281,283,284,286], primary: gPar.gospels.names.LUKE},
        {input: [269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286], 
            output:[269,271,272,273,274,275,276,278,280,281,282,283,284,286], primary: gPar.gospels.names.MARK},


      
 

    ]
	
    for (const t of tests){
        
        //const output = t.input.toSorted((a,b)=>gPar.sortByPrimaryFunc(a,b,t.primary));
        const output = gPar.filterSortAlandPericopes(t.input,t.primary);
        expect(output.length).toEqual(t.output.length)
        expect(output).toEqual(t.output);
    }
});

test('filter Solos', async () => {
	const tests=[
        //5: Luke only; 8. adoration = Matt+Lk, both primary); 10: Matt only; 13: all 4, all primary
        {input: [5,8,10,13], hideNonP: false,hideSolos: true, hideNonPrimarySolos: false,primary: '',output: [8,13]},
        {input: [41], hideNonP: false,hideSolos: true, hideNonPrimarySolos: false,primary: '',output: []},
        {input: [5,8,10,13], hideNonP: false,hideSolos: false, hideNonPrimarySolos: false,primary: '',output: [5,8,10,13]},
        {input: [5,8,10,13], hideNonP: false,hideSolos: false, hideNonPrimarySolos: true,primary: gPar.gospels.names.LUKE, output: [5,8,13]},
        {input: [5,8,10,13], hideNonP: false,hideSolos: false, hideNonPrimarySolos: false,primary: gPar.gospels.names.LUKE, output: [5,8,10,13]},
        {input: [5,8,10,13], hideNonP: true,hideSolos: false, hideNonPrimarySolos: false, primary: gPar.gospels.names.MATTHEW, output: [8,10,13]},
        {input: [5,8,10,13], hideNonP: false,hideSolos: false, hideNonPrimarySolos: false, primary: '', output: [5,8,10,13]},
        {input: [5,8,10,13], hideNonP: true, hideSolos: false, hideNonPrimarySolos: false, primary: '', output: [5,8,10,13]},
        {input: [5,8,10,13], hideNonP: false, hideSolos: false, hideNonPrimarySolos: false, primary: gPar.gospels.names.MATTHEW, output: [5,8,10,13]},
        {input: [5,8,10,13], hideNonP: true, hideSolos: false, hideNonPrimarySolos: false, primary: gPar.gospels.names.LUKE, output: [5,8,13]},
   
    ]   

    for (const t of tests){
        expect(gPar.filterSortAlandPericopes(t.input,t.primary, t.hideNonP,t.hideSolos,t.hideNonPrimarySolos )).toEqual(t.output);
    }
	expect(true).toBe(true);
	//await expect(page.locator('h1')).toBeVisible();
});



test('alandSection filter/sort', () => {
	/*
    const alands=MathUtils.createNumArrayFromStringListRange(gPar.alandSynopsis.lookupSection(12).pericopes);
    const alandsCopy = [...alands]
    const expected=MathUtils.createNumArrayFromStringListRange("251-268");

    expect(alands).toEqual(expected);
	
    gPar.sortAlandPericopes(alands,gPar.gospels.names.JOHN);
	expect(alands).not.toEqual(alandsCopy)
    const johnSorted=[257,258,259,260,261,267,268,251,252,253,254,255,256,262,263,264,265,266];
    //expect(alands).toEqual(johnSorted);*/
    expect(true).toBe(true);
});