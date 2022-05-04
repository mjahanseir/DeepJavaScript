// Function Definition
// Function Declaration
// Function Expression

function showBio() {
  console.log("First name = aa");
  console.log("Last name = mm");
  console.log("Age = 33");
}

showBio();
showBio();

const showBio2 = function () {
  console.log("First name = aa");
  console.log("Last name = mm");
  console.log("Age = 33");
};

showBio2();
showBio2();

let func1 = showBio2;
func1();
