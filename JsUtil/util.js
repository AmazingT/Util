// 获取[min, max]之间的随机数
function getRandom(min, max) {
    return Math.floor(min + (max - min) * Math.random());
    // return (min + (max - min) * Math.random()) | 0;
}

// 数组乱序
function shuffle(arr) {
    var _arr = arr.slice();// 获取数组的副本(不会改变原数组)
    for (var i = 0; i < _arr.length; i++) {
        var j = getRandom(0, i);
        var t = _arr[i];
        _arr[i] = _arr[j];
        _arr[j] = t;
    }

    return _arr;
}

// 数组去重
function removeRepeatArray(arr) {
    var _arr = [];
    for (var i = 0; i < arr.length; i++) {
        if (_arr.indexOf(arr[i]) == -1) {
            _arr.push(arr[i]);
        }
    }
    return _arr;
}

// [].slice.call()
// Array.prototype.slice.call(arguments) 截取函数参数放数组里面(apply())
// Array.from()