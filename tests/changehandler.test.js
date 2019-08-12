let { ChangeHandler } = require("../src/changehandler");

describe("ChangeHandler", function () {

    describe("constructor", function () {


        // it is the same as test
        test("5.a. amountDue is set based on an argument", function () {
            let changeHandler = new ChangeHandler(105);
            expect(changeHandler.amountDue).toBe(105)
        });

        test("5.b. cashTendered is set to zero", function () {
            let changeHandler = new ChangeHandler();
            expect(changeHandler.cashTendered).toBe(0);
        });

    })
    describe("insertCoin", function () {
        test("6.a. Inserting a quarter adds 25.", function () {
            // Learn what is happening here in JS
            let changeHandler = new ChangeHandler(25);
            changeHandler.insertCoin("quarter")
            expect(changeHandler.cashTendered).toBe(25);
        })
        test("6.b. Inserting a dime adds 10.", function () {
            let changeHandler = new ChangeHandler(25);
            changeHandler.insertCoin("dime")
            expect(changeHandler.cashTendered).toBe(10);
        })
        test("6.c. Inserting a nickel adds 5.", function () {
            let changeHandler = new ChangeHandler(25);
            changeHandler.insertCoin("nickel")
            expect(changeHandler.cashTendered).toBe(5);
        })
        test("6.d. Inserting a penny adds 1.", function () {
            let changeHandler = new ChangeHandler(25);
            changeHandler.insertCoin("penny")
            expect(changeHandler.cashTendered).toBe(1);
        })
        test("6.e. Calling function multiple times adds to amount.", function () {
            let changeHandler = new ChangeHandler();
            changeHandler.insertCoin('penny')
            changeHandler.insertCoin('quarter')
            expect(changeHandler.cashTendered).toBe(26);
        })

        test("7.a. Returns true if cashTendered more than amount due", function () {
            let changeHandler = new ChangeHandler(5);
            changeHandler.insertCoin('quarter');
            expect(changeHandler.isPaymentSufficient()).toBe(true);
        });
    })