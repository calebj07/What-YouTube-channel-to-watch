n = 0
f = ["ISAB.",
    "Mr. Beast.",
    "Mark Rober.",
    "KSI.",
    "Markiplier.",
    "Nick Eh 30."]

def on_forever():
    global n
    if input.is_gesture(Gesture.SHAKE):
        n = randint(0, 5)
        basic.show_string("" + (f[n]))
basic.forever(on_forever)
