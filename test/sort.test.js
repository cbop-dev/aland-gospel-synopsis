
import * as gPar from '../src/gospelParallels.js';
import { mylog } from '../src/lib/env/env.js';
import { expect, test } from 'vitest';
import { alandSynopsis } from "../src/alandSections.js";
import * as MathUtils from "../src/lib/utils/math-utils.js";

test('dummy', async () => {
	
	expect(true).toBe(true);
	//await expect(page.locator('h1')).toBeVisible();
});
test('sort', async () => {
    const myoutput=gPar.sortByPrimaryFunc(gPar.alandSynopsis.lookupPericope(266),
    gPar.alandSynopsis.lookupPericope(267),gPar.gospels.LUKE);

   // mylog("sorting[266,267] for LUKE --> " +myoutput);
	expect(myoutput).toBeGreaterThan(0);
    const tests=[
        //5: Luke only; 8. adoration = Matt+Lk, both primary); 10: Matt only; 13: all 4, all primary
        {input: [341,342], primary: '',output: [341,342]},
        {input: [341,342], primary: gPar.gospels.JOHN,output: [342,341]},
         {input: [266,267], primary: gPar.gospels.LUKE,output: [267,266]},
          {input: [251,267], primary: gPar.gospels.LUKE,output: [267,251]},
        {input: [255,256], primary: gPar.gospels.LUKE,output: [256,255]},
       {input:[251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268],primary: gPar.gospels.LUKE,
        output:[267,251,256,252,253,254,255,257,258,259,260,261,262,264,265,266,263,268]}
        
    ];

    for (const t of tests){
        const copy = [...t.input];
       const sorted =gPar.sortAlandPericopes(t.input,t.primary);
       
        mylog("original: ["+copy.join(',')+"], sorted for "+t.primary +
         " --> ["+t.input+"], sorted: [" +
         sorted.join(',')+"];")
        expect(t.input).toEqual(t.output);
    }
	expect(true).toBe(true);
	//await expect(page.locator('h1')).toBeVisible();
});