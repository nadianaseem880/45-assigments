"use strict";
//q14
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest_list1 = void 0;
var guest_list = ["rida", "nida", "sana", "maha"];
// for(let i=0; i<guest_list.length;i++){
//     console.log(`dear`+guest_list[i]+`\n\nyou are invited for a dinner tomorrow.\n\nThank you`);
//}
//q15
var not_coming = "rida";
var new_guest = "maryam";
guest_list[0] = new_guest;
// for(let i=0; i<guest_list.length;i++){
//     console.log(`dear`+guest_list[i]+`\n\nyou are invited for a dinner tomorrow.\n\nThank you`);
// }
// console.log(`Ms ${not_coming},is not comind dinner tomorrow.`)
//q16
guest_list.unshift("salman");
guest_list.splice(guest_list.length / 2, 2, "sharukh");
guest_list.push("vicky");
// for(let i=0; i<guest_list.length;i++){
//     console.log(`dear`+guest_list[i]+`\n\nyou are invited for a dinner tomorrow.\n\nThank you`);
// }
//console.log(`we have found a bigger dinner table so we invited more guest`);
//q17
console.log("\n\nunfortunately we are out of space,so space for two guest only .\n\n");
while (guest_list.length > 2) {
    var removed_guest = guest_list.pop();
    console.log("dear, sorry ".concat(removed_guest, ", you are not invited for a dinner tomorrow"));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log("dear" + guest_list[i] + "\n\nyou all are still invited for a dinner tomorrow.\n\nThank you");
}
guest_list.splice(0, 2);
console.log(guest_list);
//q18
var places = ["islamabad", "tokyo", "karachi", "new york", "lahore"];
// print your array in its original order
console.log("original" + places);
//print your array in alphabetical order without  modifying the actual list.
console.log("copy" + __spreadArray([], places, true).sort());
//show that your array its original order by printing it.
console.log("original" + places);
//print your array in reverse alphabetical order without changing  the order of  the original list
console.log("copy" + __spreadArray([], places, true).sort().reverse());
//show that your arry is still  in original order by printing it again.
console.log("copy" + __spreadArray([], places, true).sort().reverse());
//reverse the order your list .print the arrey to show that its order has changed
console.log("copy" + __spreadArray([], places, true).sort());
//reverse the order of your list again.print the kist to show its back to its original order
console.log("copy" + __spreadArray([], places, true).sort().reverse());
//sort your array so its stored in alphabetical order. print the array to  show its order has been changed
console.log("copy" + __spreadArray([], places, true).sort());
//q19
var guest_list1 = ["rida", "nida", "sana", "maha"];
exports.guest_list1 = guest_list1;
for (var i = 0; i < guest_list.length; i++) {
    console.log("dear" + guest_list1[i] + "\n\nyou are invited for a dinner tomorrow.\n\nThank you");
}
