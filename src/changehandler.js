/**
 * This class handles change for a vending machine.
 *
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
class ChangeHandler {
    constructor(amountDue) {
        this.amountDue = amountDue;
        this.cashTendered = 0;
    }

    /**
     * The customer inserts a coin, increasing the cashTendered.
     * The parameter "type" is a string that is either quarter, dime, nickel, or penny
     */
    insertCoin(typeOfCoin) {
        if (typeOfCoin === "quarter") {
            this.cashTendered += 25
        } else if (typeOfCoin === "dime") {
            this.cashTendered += 10
        } else if (typeOfCoin === "nickel") {
            this.cashTendered += 5
        } else if (typeOfCoin === "penny") {
            this.cashTendered += 1
        }
    }
    /**
     * Returns true if enough coins have been inserted to at least meet the amountDue
     */
    isPaymentSufficient() {
        if (this.cashTendered >= this.amountDue) {
            return true;
        } else {
            return false;
        };
    }


    giveChange() {
        // TODO return the correct change in the following format...
        let quarters = 0;
        let changeLeft = this.cashTendered - this.amountDue;
        while (changeLeft > 0) {
            if (changeLeft >= 25) {
                quarters++;
                changeLeft -=;
            }
            else if (changeLeft >= 5) {
                nickels++;
                changeLeft -= 5;
            }
            else if (changeLeft >= 1) {
                pennies++;
                changeLeft -= 1;
            }
        }
        return {
            quarters: quarters,
            dimes: dimes,
            nickels: nickels,
            pennies: pennies
        };
    }
}

module.exports = { ChangeHandler };