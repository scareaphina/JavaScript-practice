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

// how to set up event listeners for keypress events
// how to use the event object
// read input data from different HTML input types

///////////////////////////////

// BUDGET CONTROLLER
var budgetController = (function() {

    // some code
    
})();



// UI CONTROLLER
var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getInput: function() {
            return {
            type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
            description: document.querySelector(DOMstrings.inputDescription).value,
            value: document.querySelector(DOMstrings.inputValue).value
            };
        },

        getDOMstrings: function() {
            return DOMstrings;
        }
    };
})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var DOM = UIController.getDOMstrings();

    var ctrlAddItem = function() {

        // 1. get field input data
        var input = UICtrl.getInput();
        console.log(input);

        // 2. add item to the budget controller
        
        // 3. add new item to UI
        
        // 4. calculate the budget
        
        // 5. display the budget on the UI

    }

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
        
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }

    });

})(budgetController, UIController);
