let tmp = 15;

// en if / else if / else

/* if (tmp < 0) {
  console.log("Freezing weather.");
} else if (tmp < 10) {
  console.log("Very cold weather.");
} else if (tmp < 20) {
  console.log("Cold weather.");
} else if (tmp < 30) {
  console.log("Normal in temp.");
} else if (tmp < 40) {
  console.log("Its Hot.");
} else {
  console.log("Its very hot.");
} */

// ensuite en switchCase

switch (true) {
  case tmp < 0:
    console.log("Freezing weather.");
    break;
  case tmp < 10:
    console.log("Very cold weather.");
    break;
  case tmp < 20:
    console.log("Cold weather.");
    break;
  case tmp < 30:
    console.log("Normal in temp.");
    break;
  case tmp < 40:
    console.log("It's hot.");
    break;
  case tmp < 50:
    console.log("It's very hot.");
    break;
}