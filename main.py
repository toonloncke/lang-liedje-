def on_button_pressed_a():
    for index in range(2):
        for index2 in range(2):
            music.play_melody("C D E F G A B C5 ", 200)
            music.play_melody("C5 B A G F E D C ", 450)
        music.play_tone(196, music.beat(BeatFraction.BREVE))
        for index3 in range(3):
            music.play_melody("C5 G C5 G B F B F ", 120)
        for index4 in range(3):
            music.play_melody("C D E F G A B C5 ", 200)
            music.play_melody("C5 B A G F E D C ", 450)
        music.play_tone(196, music.beat(BeatFraction.BREVE))
        for index5 in range(2):
            music.play_melody("A E A E G D G D ", 355)
        for index6 in range(3):
            music.play_melody("C D E F G A B C5 ", 200)
            music.play_melody("C5 B A G F E D C ", 450)
        music.play_tone(196, music.beat(BeatFraction.BREVE))
        for index7 in range(2):
            music.play_melody("E C F D G E A F ", 120)
            music.play_melody("B G C5 A C5 B C5 C5 ", 120)
        for index8 in range(3):
            music.play_melody("C D E F G A B C5 ", 200)
            music.play_melody("C5 B A G F E D C ", 450)
        music.play_tone(196, music.beat(BeatFraction.BREVE))
        for index9 in range(4):
            music.play_melody("C5 A F B G E A F ", 500)
            music.play_melody("D G E C F D C C ", 500)
        for index10 in range(3):
            music.play_melody("C D E F G A B C5 ", 200)
            music.play_melody("C5 B A G F E D C ", 450)
        music.play_tone(196, music.beat(BeatFraction.BREVE))
        for index11 in range(5):
            music.play_melody("C G D A E B F C5 ", 285)
            music.play_tone(311, music.beat(BeatFraction.DOUBLE))
        for index12 in range(3):
            music.play_melody("C D E F G A B C5 ", 200)
            music.play_melody("C5 B A G F E D C ", 450)
        music.play_tone(196, music.beat(BeatFraction.BREVE))
        music.set_volume(255)
        music.play_melody("C D E F G A B C5 ", 200)
        music.play_melody("C5 B A G F E D C ", 450)
        music.play_tone(196, music.beat(BeatFraction.BREVE))
    for index13 in range(10):
        music.play_melody("C D E F G A B C5 ", 200)
        music.play_melody("C5 B A G F E D C ", 450)
        music.play_tone(196, music.beat(BeatFraction.BREVE))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)

music.set_volume(100)

def on_forever():
    pass
basic.forever(on_forever)
