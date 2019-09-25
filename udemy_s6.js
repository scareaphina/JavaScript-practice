// structuring our code with modules
// important aspect of any robust application articitecture
// keep unites of code for a project cleanly separated and organized
// encapsulate some data into privacy and expose other data publicly

// separate out into ui and data modules

///////////////////////////////

// this section contains:
// how to use the module pattern
// private and public data, encapsulation, and separation of concerns
// separation of concerns - each part of the project should only be interested in doing one thing

///////////////////////////////

var budgetController = (function() {
    
    var x = 23;

    var add = function(a) {
        return x + a;
    }

    return {
        publicTest: function(b) {
            return(add(b));
        }
    }

})();


var UIController = (function() {

    // some code

})();


var controller = (function(budgetCtrl, UICtrl) {

    var z = budgetCtrl.publicTest(5);

    return {
        anotherPublic: function() {
            console.log(z);
        }
    }

})(budgetController, UIController);
