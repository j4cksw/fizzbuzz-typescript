/// <reference path="../typings/jasmine/jasmine.d.ts"/>
/// <reference path="../ts/fizzbuzz.ts"/>
describe("FizzBuzz", () => {

    describe("Fizz rule", () => {
        it("should be 'Fizz' when input is 3", () => {
            var word = fizzbuzz(3);
            expect(word).toEqual("Fizz");
        });

        it("should be 'Fizz' when input is 6", () => {
            var word = fizzbuzz(6);
            expect(word).toEqual("Fizz");
        });
    });

    describe("Buzz rule", () => {
        it("should be 'Buzz' when input is 5", () => {
            var word = fizzbuzz(5);
            expect(word).toEqual("Buzz");
        });

        it("should be 'Buzz' when input is 10", () => {
            var word = fizzbuzz(10);
            expect(word).toEqual("Buzz");
        });
    });

    describe("FizzBuzz rule.", () => {
        it("should be 'FizzBuzz' when input is 15", () => {
            var word = fizzbuzz(15);
            expect(word).toEqual("FizzBuzz");
        });

        it("should be 'FizzBuzz' when input is 30", () => {
            var word = fizzbuzz(30);
            expect(word).toEqual("FizzBuzz");
        });
    });

    describe("Other rule", () => {
        it("should be '1' when input is 1", () => {
            var word = fizzbuzz(1);
            expect(word).toEqual("1");
        });

        it("should be '2' when input is 2", () => {
            var word = fizzbuzz(2);
            expect(word).toEqual("2");
        });
    });

    function fizzbuzz(input: number){
        return new FizzBuzz(new RulesFactory()).say(input);
    }

});
