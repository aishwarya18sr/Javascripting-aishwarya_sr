const amstrong = require('../printAmstrongNumbers');

describe('isAmstrongNumber function', function() {
    it('should return true', function() {
        const result = amstrong.isAmstrongNumber(0);
        expect(result).toBe(true);
    });
    it('should return true', function() {
        const result = amstrong.isAmstrongNumber(153);
        expect(result).toBe(true);
    });
    it('should return true', function() {
        const result = amstrong.isAmstrongNumber(370);
        expect(result).toBe(true);
    });
    it('should return true', function() {
        const result = amstrong.isAmstrongNumber(371);
        expect(result).toBe(true);
    });
    it('should return true', function() {
        const result = amstrong.isAmstrongNumber(407);
        expect(result).toBe(true);
    });
    it('should throw invalid input when string is given as input', () => {
        expect(
        () => amstrong.isAmstrongNumber('hello')
        ).toThrow('Not a valid input type.')
      })
    it('should throw invalid input when array is given as input', () => {
        expect(
        () => amstrong.isAmstrongNumber([1,2])
        ).toThrow('Not a valid input type.')
      })
    it('should throw invalid input when boolean is given as input', () => {
        expect(
        () => amstrong.isAmstrongNumber(true)
        ).toThrow('Not a valid input type.')
      })
    it('should throw invalid input when decimal number is given as input', () => {
        expect(
        () => amstrong.isAmstrongNumber(2.5)
        ).toThrow('Not a valid input type.')
      })
    it('should throw invalid input when negative number is given as input', () => {
        expect(
        () => amstrong.isAmstrongNumber(-5)
        ).toThrow('Negative number is an invalid input.')
      })
});

describe('printAmstrongNumber function', function() {
    it('should return amstrong numbers in the given range', function() {
        const result = amstrong.printAmstrongNumber(10);
        const resultArray = Array.from(result);
        const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        expect(resultArray).toEqual(expect.arrayContaining(expectedArray));
    });
    it('should return amstrong numbers in the given range', function() {
        const result = amstrong.printAmstrongNumber(100);
        const resultArray = Array.from(result);
        const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        expect(resultArray).toEqual(expect.arrayContaining(expectedArray));
    });
    it('should return amstrong numbers in the given range', function() {
        const result = amstrong.printAmstrongNumber(1000);
        const resultArray = Array.from(result);
        const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 153, 370, 371, 407]
        expect(resultArray).toEqual(expect.arrayContaining(expectedArray));
    });
    it('should throw invalid input when string is given as input', () => {
        expect(
        () => amstrong.printAmstrongNumber('hello')
        ).toThrow('Not a valid input type.')
      })
    it('should throw invalid input when array is given as input', () => {
        expect(
        () => amstrong.printAmstrongNumber([1,2])
        ).toThrow('Not a valid input type.')
      })
    it('should throw invalid input when boolean is given as input', () => {
        expect(
        () => amstrong.printAmstrongNumber(true)
        ).toThrow('Not a valid input type.')
      })
    it('should throw invalid input when decimal number is given as input', () => {
        expect(
        () => amstrong.printAmstrongNumber(2.5)
        ).toThrow('Not a valid input type.')
      })
    it('should throw invalid input when negative number is given as input', () => {
        expect(
        () => amstrong.printAmstrongNumber(-5)
        ).toThrow('Negative number is an invalid input.')
      })
});