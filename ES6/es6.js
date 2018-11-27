// (1) 交换变量的值
let x = 1;
let y = 2;

[x, y] = [y, x];

// (2) 从函数返回多个值
/* return Array */
function example() {
    return [1, 2, 3];
}
let [a, b, c] = example();

/* return Object */
function example() {
    return {
        foo: 1,
        bar: 2
    };
}
let { foo, bar } = example();

/* 函数参数的定义 */
function fn([x, y, z]) { }
fn([1, 2, 3]);

function f({x, y, z}) { }
f({z: 3, y: 2, x: 1});

/* 提取JSON数据 */
let jsonData = {
    id: 42,
    status: "OK",
    data: [12, 15]
};

let { id, status, data: number } = jsonData;

/* 函数参数的默认值 */
$.ajax = function (url, {
    async = true,
    beforeSend = function () {},
    cache = true,
    complete = function () {},
    crossDomain = false,
    global = true,
} = {}) {
    // do something
};

/* 遍历Map结构 */
const map = new Map();
map.set('name', 'zb');
map.set('age', 12);

for (let [key, value] of map) {
    console.log(key + "is " + value);
}

for (let [key] of map) {}
for (let [value] of map) {}

/* 输入模块的指定方法 */
const { SourceMapConsumer, SourceNode } = require("source-map");

/* 函数参数的默认值 */
function log(x, y) {
    y = y || 'World';
    console.log(x, y);
}
log('Hello');
log('Hello', 'China');
log('Hello', '');

// 如果y = false时取不到
if (typeof y === 'undefined') {
    y = 'World';
}

// ES6
function log(x, y = 'World') {
    console.log(x, y);
}
log('Hello');
log('Hello', 'China');
log('Hello', '');

// 对象的扩展
const o = {
    method() {
        return 'hello';
    }
};

let birth = '1994/7/12';
const Person = {
    name: 'zb',
    birth,
    say() {
        console.log(this.name);
    }
};

function point() {
    let x = 1;
    let y = 2;

    return {x, y};
}
point();

function getItem() {
    return key in ms ? ms[key] : null;
}

function setItem(key, value) {
    ms[key] = value;
}

function clear() {
    ms = {};
}

module.exports = { getItem, setItem, clear };

// promise
// promise有三个状态： 未完成 - 完成 -失败
// promise的状态可以由未完成-完成和未完成-失败
// promise的状态只发生一次
// promise有一个then方法，then方法可以接受3个函数作为参数。前两个函数对应promise的两种状态fulfilled, rejected的回调函数。第三个函数用于处理进度信息。
promiseSomething().then(function(fulfilled){
    //当promise状态变成fulfilled时，调用此函数
},function(rejected){
    //当promise状态变成rejected时，调用此函数
},function(progress){
    //当返回进度信息时，调用此函数
});

// 图片异步加载
function loadImageUrl(url) {
    return new Promise((resolve, reject) => {
        let img = new Image();

        img.onload = function() {
            resolve(img);
        }

        img.onerror = function() {
            reject(new Error('Could not load image at ' + url));
        }

        img.src = url;
    });
}