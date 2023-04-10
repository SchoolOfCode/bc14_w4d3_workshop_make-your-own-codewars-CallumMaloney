//👉 Write your tests below here:

import {removeImposters} from './main.js'
import {test, expect} from "@jest/globals"

test("Uppercase",() =>{

    expect(removeImposters('aBcdEfGHiJKL')).toBe('acdfi')

})

test("Numbers", () => {

    expect(removeImposters('one23fourfive67(8)nine')).toBe('onefourfive8nine')
})

test("Special", () =>{

    expect(removeImposters('hel.lowh/a@tisyo,urn[am]e')).toBe('hellowhatisyourname')
})

test("Random", () => {

    expect(removeImposters('Aqu(IC)k, br0wn Fox!!')).toBe('quICkbrwnox')
})