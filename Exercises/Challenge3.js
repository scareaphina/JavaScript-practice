/**************
 * CODING CHALLENGE 2
 */

 /*
 John and his family went on a holiday and went to three different restaurants. The bills were $124, $48, and $268.
 To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% of the bill when then bill is between $50 and $200, and 10% if the bill is more than $200.
 In the end, John would like to have two arrays:
 1. Containing all three tips (one for each bill)
 2. Containing all three final paid amounts (bill + tip)
 (NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
 */


function calculateTip(bill) {
    var percentage;
    if (bill < 50) {
        percentage = 0.25;
    } else if (bill >= 50 && bill < 200) {
        percentage = 0.22;
    } else {
        percentage = 0.2;
    }
    return percentage * bill;
}

//Those tip amounts are bullshit, so I raised them.

var bills = [124, 48, 268];
var tips = [calculateTip(bills[0]), 
            calculateTip(bills[1]),
            calculateTip(bills[2])];

var billWithTip = [bills[0] + tips[0],
                    bills[1] + tips[1],
                    bills[2] + tips[1]]

console.log(tips, billWithTip);

//Me trying to get this exercise to print out an actual sentence to the console

function calculateTip(bill) {
    var percentage;
    if (bill < 50) {
        percentage = 0.25;
    } else if (bill >= 50 && bill < 200) {
        percentage = 0.22;
    } else {
        percentage = 0.2;
    }
    return percentage * bill;
}

//Those tip amounts are bullshit, so I raised them.

var bill = [124, 48, 268];
var tip = [calculateTip(bill[0]),
            calculateTip(bill[1]),
            calculateTip(bill[2])];

var billWithTip = [bill[0] + tip[0],
                  [bill[1] + tip[1]],
                  [bill[2] + tip[2]]]


console.log('The proper amount to tip for a bill of $' + bill[0] + ' is $' + tip[0] + '.');
console.log('The proper amount to tip for a bill of $' + bill[1] + ' is $' + tip[1] + '.');
console.log('The proper amount to tip for a bill of $' + bill[2] + ' is $' + tip[2] + '.');

console.log('The total amount due on this bill is $' + billWithTip[0] + '.');
console.log('The total amount due on this bill is $' + billWithTip[1] + '.');
console.log('The total amount due on this bill is $' + billWithTip[2] + '.');
