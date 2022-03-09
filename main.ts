input.onButtonPressed(Button.A, function () {
    hours += 1
    basic.showNumber(hours)
    basic.clearScreen()
    basic.pause(500)
    basic.showNumber(sec)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(hours)
    basic.clearScreen()
    basic.pause(500)
    basic.showNumber(sec)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    sec += 1
    basic.showNumber(hours)
    basic.clearScreen()
    basic.pause(500)
    basic.showNumber(sec)
    basic.clearScreen()
})
let hours = 0
let sec = 0
sec = 0
hours = 0
basic.forever(function () {
    basic.pause(100000)
    sec += 1
})
basic.forever(function () {
    basic.pause(6000000)
    hours += 1
})
basic.forever(function () {
    if (hours == 13) {
        hours = 1
    }
})
basic.forever(function () {
    if (sec == 60) {
        sec = 0
    }
})
