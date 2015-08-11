function parse(query){
    var obj = {}, reg = /([^?=&]+)=([^?=&]+)/g;
    query.replace(reg, function () {
        var cur = arguments;
        obj[cur[1]] = cur[2];
    });
    return obj;
}
exports.parse = parse;