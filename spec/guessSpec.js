//Testing with Jasmine
describe("Test the Guessing number", function(){
    describe("Test to pass", function(){
        it(" should return 'Guess again.' for any number between 1 and 10 (inclusive) that is not the correct answer", function(){
            let num = 6;
            expect(guessNum(num)).toEqual("Guess again.");
        });
        
        it(" should return 'You guessed it!' when the correct number is entered.", function(){
            let num = 4;
            expect(guessNum(num)).toEqual("You guessed it!");
        });
    });//END TEST TO PASS

    describe("Test to Fail", function(){
        it(" should return 'A number was not input.' if the value entered is not a number.", function(){
            let num ;
            expect(guessNum(num)).toEqual("A number was not input.");
        });
        it(" should return 'A number was not input.' if the value entered is not a number.", function(){
            let num = undefined ;
            expect(guessNum(num)).toEqual("A number was not input.");
        });
        it(" should return 'A value was not entered.' if it receives an empty string. ", function(){
            let num = "";
            expect(guessNum(num)).toEqual("A value was not entered.");
        })
        
    });//END TEST TO FAIL

    describe("Boundary Testing",function(){
        it("should return 'Way off!!!! Pick between 1 and 10.' if the value entered is a number outside of the allowed range of guessing values. ",function(){
            let num = 0;
            expect(guessNum(num)).toEqual("Way off!!!! Pick between 1 and 10.");
        });
        it("should return 'Way off!!!! Pick between 1 and 10.' if the value entered is a number outside of the allowed range of guessing values. ",function(){
            let num = 11;
            expect(guessNum(num)).toEqual("Way off!!!! Pick between 1 and 10.");
        });

        it(" should return 'Guess again.' for any number between 1 and 10 (inclusive) that is not the correct answer", function(){
            let num = 1;
            expect(guessNum(num)).toEqual("Guess again.");
        });
        it(" should return 'Guess again.' for any number between 1 and 10 (inclusive) that is not the correct answer", function(){
            let num = 10;
            expect(guessNum(num)).toEqual("Guess again.");
        });
        it(" should return 'Guess again.' for any number between 1 and 10 (inclusive) that is not the correct answer", function(){
            let num = 2;
            expect(guessNum(num)).toEqual("Guess again.");
        });
        it(" should return 'Guess again.' for any number between 1 and 10 (inclusive) that is not the correct answer", function(){
            let num = 9;
            expect(guessNum(num)).toEqual("Guess again.");
        });
        
    })
});