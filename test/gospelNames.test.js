import gPar from '../src/gospelParallels.js';
import { mylog } from '../src/lib/env/env.js';
import { expect, test } from 'vitest';
import { alandSynopsis } from "../src/alandSections.js";
import * as MathUtils from "../src/lib/utils/math-utils.js";

test('dummy', async () => {
	
	expect(true).toBe(true);
	//await expect(page.locator('h1')).toBeVisible();
});

test(' gospels.isValie', () => {
	
   const tests = [
    {gospel:"", valid:false},
    {gospel:"Matthew", valid:true},
    {gospel:"Mark", valid:true},
    {gospel:"Luke", valid:true},
     {gospel:"Matthews", valid:false},
      {gospel:"John", valid:true},
    {gospel:gPar.gospels.names.MATTHEW, valid:true}
   ];

   for (const t of tests){
    
    expect(gPar.gospels.isValid(t.gospel)).toEqual(t.valid);
   }
});