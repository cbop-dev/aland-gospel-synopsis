import * as gPar from '../src/gospelParallels.js';
import { mylog } from '../src/lib/env/env.js';
import { expect, test } from 'vitest';
import { alandSynopsis } from "../src/alandSections.js";
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
     //   {ref: "Matt 28:17", sort=gPar.gospels.MATTHEWalands: [359,364]},
        //{ref: "Mt 28:17", alands: [359,364]},
       // {sec: 16, primary: gPar.gospels.LUKE, alands: [294, 287, 288, 289, 290, 291, 292, 293, 295]},
        {input:[287, 288, 289, 290, 291, 294, 292, 293, 295], output: [291, 294, 287, 288, 289, 290, 292, 293, 295],
            primary: gPar.gospels.LUKE}
        

    ]
	
    for (const t of tests){
        
        //const output = t.input.toSorted((a,b)=>gPar.sortByPrimaryFunc(a,b,t.primary));
        gPar.sortAlandPericopes(t.input,t.primary)
        expect(t.input.length).toEqual(t.output.length);
        expect(t.input).toEqual(t.output);
    }
});
