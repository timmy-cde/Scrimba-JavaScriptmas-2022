function centuryFromYear(num) {
    // using Math.ceil method
    // return num <= 0 
            // ? `${num} IS NOT A VALID YEAR!`
            // : Math.ceil(num / 100)
    
    // using Math.floor method
    return num <= 0 
            ? `${num} IS NOT A VALID YEAR!`
            : num % 100 != 0
                ? Math.floor(num / 100) + 1
                : num / 100
}

/**
* Test Suite 
*/
describe('centuryFromYear()', () => {
    it('returns current century', () => {
        // arrange
        const year = 1905;
        
        // act
        const result = centuryFromYear(year);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(20);
    });
    
    it('returns current century for edge case of start of century', () => {
        // arrange
        const year = 1700;
        
        // act
        const result = centuryFromYear(year);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(17);
    });    
});