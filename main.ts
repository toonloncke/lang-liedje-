input.onButtonPressed(Button.A, function () {
    music.setVolume(100)
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 2; index++) {
            music.playMelody("C D E F G A B C5 ", 200)
            music.playMelody("C5 B A G F E D C ", 450)
        }
        music.playTone(196, music.beat(BeatFraction.Breve))
        for (let index = 0; index < 3; index++) {
            music.playMelody("C5 G C5 G B F B F ", 120)
        }
        for (let index = 0; index < 3; index++) {
            music.playMelody("C D E F G A B C5 ", 200)
            music.playMelody("C5 B A G F E D C ", 450)
        }
        music.playTone(196, music.beat(BeatFraction.Breve))
        for (let index = 0; index < 2; index++) {
            music.playMelody("A E A E G D G D ", 355)
        }
        for (let index = 0; index < 3; index++) {
            music.playMelody("C D E F G A B C5 ", 200)
            music.playMelody("C5 B A G F E D C ", 450)
        }
        music.playTone(196, music.beat(BeatFraction.Breve))
        for (let index = 0; index < 2; index++) {
            music.playMelody("E C F D G E A F ", 120)
            music.playMelody("B G C5 A C5 B C5 C5 ", 120)
        }
        for (let index = 0; index < 3; index++) {
            music.playMelody("C D E F G A B C5 ", 200)
            music.playMelody("C5 B A G F E D C ", 450)
        }
        music.playTone(196, music.beat(BeatFraction.Breve))
        for (let index = 0; index < 4; index++) {
            music.playMelody("C5 A F B G E A F ", 500)
            music.playMelody("D G E C F D C C ", 500)
        }
        for (let index = 0; index < 3; index++) {
            music.playMelody("C D E F G A B C5 ", 200)
            music.playMelody("C5 B A G F E D C ", 450)
        }
        music.playTone(196, music.beat(BeatFraction.Breve))
        for (let index = 0; index < 5; index++) {
            music.playMelody("C G D A E B F C5 ", 285)
            music.playTone(311, music.beat(BeatFraction.Double))
        }
        for (let index = 0; index < 3; index++) {
            music.playMelody("C D E F G A B C5 ", 200)
            music.playMelody("C5 B A G F E D C ", 450)
        }
        music.playTone(196, music.beat(BeatFraction.Breve))
        music.setVolume(255)
        music.playMelody("C D E F G A B C5 ", 200)
        music.playMelody("C5 B A G F E D C ", 450)
        music.playTone(196, music.beat(BeatFraction.Breve))
    }
    for (let index = 0; index < 10; index++) {
        music.playMelody("C D E F G A B C5 ", 200)
        music.playMelody("C5 B A G F E D C ", 450)
        music.playTone(196, music.beat(BeatFraction.Breve))
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        # # . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        # # # . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        # # # . .
        # . . # .
        # . . . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        # # # . .
        # . . # .
        # . # . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        # # # . .
        # . . # .
        # # # . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        # # # . .
        # . . # .
        # # # . .
        # . . # .
        # . . . .
        `)
    basic.showLeds(`
        # # # . .
        # . . # .
        # # # . .
        # . . # .
        # . . # .
        `)
    basic.showLeds(`
        # # # . .
        # . . # .
        # # # . .
        # . . # .
        # . # # .
        `)
    basic.showLeds(`
        # # # . .
        # . . # .
        # # # . .
        # . . # .
        # # # # .
        `)
    basic.pause(500)
    basic.clearScreen()
    for (let index = 0; index < 6; index++) {
        basic.showNumber(989)
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.clearScreen()
    }
})
