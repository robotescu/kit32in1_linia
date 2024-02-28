let dreapta = 0
let stanga = 0
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
basic.showIcon(IconNames.Tortoise)
basic.forever(function () {
    stanga = pins.digitalReadPin(DigitalPin.P2)
    dreapta = pins.digitalReadPin(DigitalPin.P1)
    if (stanga == 0 && dreapta == 0) {
        wuKong.setAllMotor(100, 100)
    } else if (stanga == 1 && dreapta == 0) {
        wuKong.setAllMotor(60, 0)
    } else if (stanga == 0 && dreapta == 1) {
        wuKong.setAllMotor(0, 60)
    }
})
