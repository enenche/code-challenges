import {assert} from 'chai';
const myFun=require('../source/App'); //need to find an import statement

describe('aritGeo', function(){
	describe('Normal required input', function(){
		it('aritGeo should return true if input is Geometric',function(){
            result=myFun.aritGeo([2,4,8,16,32,64]);
			assert.equal(result, 'true');

	    });

		it('aritGeo should return true if input is Arithmetic', function(){
            result=myFun.aritGeo([2,4,6,8,10,12]);
            assert.equal(result, 'true');

		});

		it('aritGeo should return -1 for neither', () => {
			result=myFun.aritGeo([2,5,10,11,16,17]);
			assert.equal(result,'-1');
		});

		it('aritGeo should return 0 for empty input', function(){
            result=myFun.aritGeo([]);
            assert.equal(result,'0');
		});

		it('aritGeo should return undefined for non array input',function(){
			result=myFun.aritGeo(8);
			assert.equal(result,'undefined')

		 });


    })
})




