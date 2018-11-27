// “头疼”代码
setTimeout(() => {
    console.log(1)
    setTimeout(() => {
        console.log(2)
        setTimeout(() => {
            console.log(3)
        }, 1000)
    }, 1000)
}, 1000)

// Promise解决
function next(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(n)
        }, 1000)
    })
}

next(1).then((res) => {
    console.log(res)
    return next(2)
}).then((res) => {
    console.log(res)
    return next(3)
}).then((res) => {
    console.log(res)
})

// reject返回异常,resolve返回正常
function next(n) {
    return new Promise((resolve, reject) => {
        let num = Math.floor(Math.random() * 10)
        if (num < 5) {
            resolve(n)
        } else {
            reject(new Error())
        }
    })
}
// then的第二个参数接收reject
next(1).then((res) => {
    console.log(res)
}, (res) => {
    console.log(res)
})
// catch方法接收
next(1).then((res) => {
    console.log(res)
}).catch((res) => {
    console.log('reject' + res)
})


let count = 0;
function next(n) {
    return new Promise((resolve, reject) => {
        let num = Math.floor(Math.random()*10)
        setTimeout(() => {
            console.log(num);
            resolve(`第${++count}随机值为${num}`)
        }, 2000)
    })
}

// all 三个next()异步操作执行完毕之后，才会一起把他们的resolve结果打印出来。
Promise.all([next(),next(),next()]).then((res) => {
    console.log(res)
})

// race 最快的异步执行完毕之后，就执行then。
Promise.race([next(), next(), next()]).then((res) => {
    console.log(res)
})

