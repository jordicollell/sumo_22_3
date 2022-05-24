function davant () {
    while (linia_davant == 0 && alerta_1 == 0) {
        motorbit.forward(100)
    }
    if (alerta_1 == 1) {
        darrere()
    }
    if (linia_davant == 1) {
        enrrere_girar()
    }
}
function enrrere_girar () {
    motorbit.back(100)
    basic.pause(1000)
    motorbit.brake()
    gir = randint(0, 1)
    if (gir == 0) {
        motorbit.freestyle(50, -50)
    } else {
        motorbit.freestyle(-50, 50)
    }
    basic.pause(500)
    if (sonar_2 == 1) {
        darrere()
    } else {
        davant()
    }
}
function darrere () {
    while (linia_darrera == 1 && alerta_2 == 0) {
        motorbit.forward(100)
    }
    if (alerta_1 == 1) {
        davant()
    }
    if (linia_darrera == 1) {
        enrrere_girar()
    }
}
let sonar_1 = 0
let alerta_2 = 0
let linia_darrera = 0
let sonar_2 = 0
let gir = 0
let alerta_1 = 0
let linia_davant = 0
led.plot(2, 0)
davant()
basic.forever(function () {
    linia_davant = pins.digitalReadPin(DigitalPin.P15)
    linia_darrera = pins.digitalReadPin(DigitalPin.P16)
})
basic.forever(function () {
    sonar_2 = sonar.ping(
    DigitalPin.P9,
    DigitalPin.P11,
    PingUnit.Centimeters
    )
    if (sonar_2 > 2 && sonar_2 < 40) {
        alerta_2 = 1
    } else {
        alerta_2 = 0
    }
})
basic.forever(function () {
    sonar_1 = sonar.ping(
    DigitalPin.P13,
    DigitalPin.P14,
    PingUnit.Centimeters
    )
    if (sonar_1 > 2 && sonar_1 < 40) {
        alerta_1 = 1
    } else {
        alerta_1 = 0
    }
})
