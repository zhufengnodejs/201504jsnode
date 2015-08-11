
function util(){
    var exports = {};
    var a = 10;
    exports.a = a;
    //.....
    return exports;
}

var util = util();
console.log(util.a);