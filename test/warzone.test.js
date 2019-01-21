/*
 *       WARZONE Test template
 *
 *
 */

const moduleLocal = require ('./../index.js');

const assert = require('assert');
const should = require('chai').should;

// mission control

//setup flags
// const URL = '';


describe('tests template',() => {
    describe('mission1 - simulation',() => {
        it('',() => {
            // console.log(moduleLocal)
            // console.log(moduleLocal.a)
            // console.log(moduleLocal.add3(2))
            // console.log('aaaa',moduleLocal.add(1).sumOne)
            //
        });

    });

});

describe('accepted tasks',() => {
    describe('',() => {
        it('',() => {
            const isFunction = () =>  typeof moduleLocal.add3 === 'function' ;
            // const sum2plus3IsFive = () =>  moduleLocal.add3(2) === 5

assert(isFunction(),'its not a function!');
            assert(moduleLocal.add(2)(5),'2+3 is not 5');
        });

    });

});

describe('tests template',() => {
    describe('mission1 - simulation',() => {
        it('',() => {

        });

    });

});

/*
describe('rejected tasks',() => {
    describe('its not too bad',() => {
        it('',() => {

        })

    })
})

/*

*/
