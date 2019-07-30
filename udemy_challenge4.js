/******************
 * CODING CHALLENGE 4
 */

 /*
 Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.

 1. For each of them, create an object with properties for their full name, mass, and height.
 2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
 3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget that they might have the same BMI.

 Remember: BMI = mass/height^2 = mass / (height * height). (mass in kg and height in meter).
 */

 var mark = {
     firstName: 'Mark',
     lastName: 'Anderson',
     mass: 80,
     height: 1.72,
     calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
 }

 var john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.85,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

john.calcBMI();
mark.calcBMI();

console.log(john, mark);

if (john.bmi > mark.bmi) {
    console.log(john.firstName + ' has a higher BMI of ' + john.bmi + '.');
} else if (mark.bmi > john.bmi) {
    console.log(mark.firstName + ' has a higher BMI of ' + mark.bmi + '.');
} else {
    console.log('John and Mark\'s BMIs are equal');
}
