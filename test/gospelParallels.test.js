import * as gPar from "../src/gospelParallels.js";
import { mylog } from "../src/env/env.js";
import { expect, test } from 'vitest';
import { alandSynopsis } from "../src/alandSections.js";
test('dummy', async () => {
	
	expect(true).toBe(true);
	//await expect(page.locator('h1')).toBeVisible();
});


test('refIncludes tests', async () => {
    const inRefs = [
        {container: "Matt 1", contained: "Matt 1:3", result:true},
        {container: "Matt 2", contained: "Matt 1:3", result:false},
        {container: "Matt 2-3", contained: "Matt 1:3", result:false},
        {container: "Matt 1-3", contained: "Matt 1:3", result:true},
        {container: "Matt 1-3", contained: "Matt 1:3", result:true},
        {container: "Matt 1-3", contained: "Matt 4:3", result:false},
        {container: "Matt 4:1-3", contained: "Matt 4:3", result:true},
        {container: "Matt 4:1-3", contained: "Matt 4:4", result:false},
        {container: "1 John", contained: "1 John", result:true},
        {container: "1 John", contained: "2 John 1:2", result:false},
        {container: "1 John", contained: "1 John 1:12", result:true},
        {container: "Matt 3:1-3", contained: "Matt 4:3", result:false},
        {container: "Matt 16:1-2a,4", contained: "Matt 4:3", result:false},
        {container: "Matt 16:1-2a,4", contained: "Matt 16:3", result:false},
        {container: "Matt 16:1-2a,4", contained: "Matt 16:2", result:true},
        {container: "Matt 16:1-2a,4", contained: "Matt 16:4", result:true},
        {container: "1 Peter 4:14", contained: "1 Peter 4:14", result:true},

       

        

    ]
	for (const refPair of inRefs){
       expect(gPar.refIncludes(refPair.container, refPair.contained)).toBe(refPair.result)
    }
	//await expect(page.locator('h1')).toBeVisible();
})


test('getBookChapVerse', async () => {
	const bookChapVerseObjs = [
        {ref: "1 Cor 2:3", obj: {book: "1 Cor", chap: "2", v: "3", range: false}},
        {ref: "1 Cor 2:3-5", obj: {book: "1 Cor", chap: "2", v: "3-5", range: true}},
        {ref: "1 Cor 2", obj: {book: "1 Cor", chap: "2", v: null , range: false}},
        {ref: "John 10:12", obj: {book: "John", chap: "10", v: "12", range: false}},
        {ref: "John 10", obj: {book: "John", chap: "10", v: null, range: false }},
        {ref: "John 10-12", obj: {book: "John", chap: "10-12", v: null, range: true }},
        {ref: "John 10:2-12", obj: {book: "John", chap: "10", v: "2-12", range: true }},
        {ref: "John 10:2-12a", obj: {book: "John", chap: "10", v: "2-12a", range: true }},
        {ref: "John 10:1-3a,6b-12a", obj: {book: "John", chap: "10", v: "1-3a,6b-12a", range: true }},
        {ref: "John", obj: {book: "John", chap: null, v: null, range: false}},
        {ref: "Jude 10", obj: {book: "Jude", chap:"10", v: null, range: false }}, //we'll pretend this is a chapter even though it isn't!
    ]
	//expect(true).toBe(true);
    for (const objs of bookChapVerseObjs){
        const myBcV = gPar.testing.getBookChapVerseFromRef(objs.ref);
        expect(myBcV.book).toEqual(objs.obj.book);
        expect(myBcV.chap).toEqual(objs.obj.chap);
        expect(myBcV.v).toEqual(objs.obj.v);
        //expect(myBcV.range).toEqual(objs.obj.range)
    }
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
        {ref: "Hebr", abbrev: "Heb"},
        

    ];

    for (const b of books){
        expect(gPar.getBookAbbrev(b.ref)).toEqual(b.abbrev);
    }
    //expect(true).toBe(false);

	//await expect(page.locator('h1')).toBeVisible();
});


test('splitBookChap', async () => {
	const bookChapObjs = [
        {ref: "1 Cor 2", obj: {book: "1 Cor", chap: "2"}},
        {ref: "John 10", obj: {book: "John", chap: "10"}},
        {ref: "John", obj: {book: "John", chap: null}},
        
    ]
	
    for (const testObj of bookChapObjs){
        const theRetObj = gPar.testing.splitBookChap(testObj.ref);
        expect(theRetObj.book).toEqual(testObj.obj.book);
        expect(theRetObj.chap).toEqual(testObj.obj.chap);
    }
        
    expect(true).toBe(true);
	//await expect(page.locator('h1')).toBeVisible();
});




test('getAlandPericopeNumbers', async () => {
	const alandLookUps =[
        {ref: "Matt 28:17", alands: [359,364]},
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




test('createNumArrayFromStringListRange', async () => {
	const numLists =[
        {string: "1-2,5", array:[1,2,5]},
        {string: "2-5,1", array:[1,2,3,4,5]},
        {string: "2b-5,1", array:[1,2,3,4,5]},
        {string: "2-4a,1", array:[1,2,3,4]},
        {string: "2-4e,1", array:[1,2,3,4]},
        
    ]
    for (const numObj of numLists) {
        expect(gPar.testing.createNumArrayFromStringListRange(numObj.string)).toEqual(numObj.array);
    }
	expect(true).toBe(true);
	//await expect(page.locator('h1')).toBeVisible();
});

test('sortChapVerseFunc', async () => {
	const chapVerses = [
        {refs: ["1:3", "1:2"], sorted: ["1:2", "1:3"]},
        {refs: ["12:3", "13:2", "13:1","6:1"], sorted: ["6:1", "12:3",  "13:1", "13:2"]}

    ];
    for (const test of chapVerses){
        const sortedRefs = test.refs.toSorted(gPar.sortChapVerseFunc);
        //mylog("sorted Refs ("+test.refs.join(',')+") -> ("+sortedRefs.join(',')+")");
        for (const i in test.sorted){
            expect(test.sorted[i]).toEqual(sortedRefs[i]);
        }
        
    }
	expect(true).toBe(true);
	//await expect(page.locator('h1')).toBeVisible();
});

test('getAlandSections', async () => {
	
	expect(true).toBe(true);
	//await expect(page.locator('h1')).toBeVisible();
});


