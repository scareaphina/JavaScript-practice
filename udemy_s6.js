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

///////////////////////////////

// BUDGET CONTROLLER
var budgetController = (function() {

    // some code
    
})();



// UI CONTROLLER
var UIController = (function() {

    // some code

})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    document.querySelector('.add__btn').addEventListener('click', function() {
        
        // 1. get field input data
        // 2. add item to the budget controller
        // 3. add new item to UI
        // 4. calculate the budget
        // 5. display the budget on the UI

    });



})(budgetController, UIController);
