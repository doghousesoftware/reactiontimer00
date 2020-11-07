let isRunning = 0
let duration = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
    basic.pause(randint(2500, 5500))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    isRunning = 1
    while (isRunning == 1) {
        basic.pause(1)
        duration += 1
        if (input.pinIsPressed(TouchPin.P1)) {
            basic.showNumber(duration)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    isRunning = 0
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.showString("Hello!")
})
input.onPinPressed(TouchPin.P1, function () {
    if (isRunning == 0) {
        basic.clearScreen()
        basic.showIcon(IconNames.Sad)
    } else {
        isRunning = 9
    }
})
