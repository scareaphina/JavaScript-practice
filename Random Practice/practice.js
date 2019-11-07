//switch and case

let role = "guest";

switch (role) {
  case "guest":
    console.log("Guest User");
    break;

  case "moderator":
    console.log("Moderator User");
    break;

  default:
    console.log("Unknown User");
}


// can do the same with if/else

if (role === "guest") console.log("Guest User");
else if (role === "moderator") console.log("Moderator");
else console.log("Unknown User");



// for loops

// for (initial expression, condition, increment expresion);
// executes as long as the condition is true

for (let i = 0; i <= 5; i++) {
  console.log("Hello World!", i);
}

for (let i = 5; i >= 1; i--) {
  if (i % 2 !== 0) console.log(i);
}
