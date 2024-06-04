var guestList = ["Omair", "Junaid", "Daniyal"];
// for(let elements of guestList){
//     console.log(`${elements}, we'd love to have you join us for dinner tonight!`)
// }
var notPresent = "Daniyal";
var present = "Arbaz";
guestList[2] = present;
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var elements = guestList_1[_i];
    console.log("".concat(elements, ", we'd love to have you join us for dinner tonight!"));
}
console.log("Mr ".concat(notPresent, " will not comming tonight."));
guestList.splice(0, 0, "Farhan", "Naveed", "Imran");
for (var _a = 0, guestList_2 = guestList; _a < guestList_2.length; _a++) {
    var elements = guestList_2[_a];
    console.log("".concat(elements, ", we'd love to have you join us for dinner tonight!"));
}
