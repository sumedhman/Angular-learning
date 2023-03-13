function Student() {
    var sid = 101;
    var sName = "Srikant";
    var isActive = true;
    var sMark = [45, 67, 89];
    var total = 0;
    for (var _i = 0, sMark_1 = sMark; _i < sMark_1.length; _i++) {
        var i = sMark_1[_i];
        total += i;
    }
}
var std = new Student();
console.log("Student Name is" + std.sName);
console.log("Student Name is" + std.sMark);
console.log("Student Name is" + std.total);
console.log("Student Name is" + std.sid);
