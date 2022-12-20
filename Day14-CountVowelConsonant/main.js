function countVowelConsonant(str) { 
    return str
            .split('')
            .reduce((total, letter) => total += /[aeiou]/gi.test(letter) ? 1 : 2, 0) 
}



/**
* Test Suite 
*/
describe('countVowelConsonant()', () => {
    it('returns total of vowels(1) and consonants(2) to be added', () => {
        // arrange
        const value = 'abcde';
        
        // act
        const result = countVowelConsonant(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(8);
    });
});