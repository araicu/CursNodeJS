var chai = require("chai");
var passwordValidator = require('../modules/passwordValidator');
describe("passwordValidator", function() {
    describe(".validPassword(password)", function() {
        it("should have minimum 8 char length", function(){
            var wrongPass = '1234567';
            var valid = passwordValidator.validPassword(wrongPass);

            chai.expect(valid).to.be.equal(false);

            var goodPass = '12345678';
            var valid2 = passwordValidator.validPassword(goodPass);
            chai.expect(valid2).to.be.equal(true);

        });

        it("should not contain password inside", function(){
            var wrongPass = 'password1';
            var valid = passwordValidator.validPassword(wrongPass);

            chai.expect(valid).to.be.equal(false);

            var goodPass = 'blablabla1';
            var valid2 = passwordValidator.validPassword(goodPass);
            chai.expect(valid2).to.be.equal(true);

        });
    });
});