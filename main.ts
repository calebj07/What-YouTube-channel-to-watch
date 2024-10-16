let Number2 = 0
let Channels = [
"ISAB.",
"Mr. Beast.",
"Mark Rober.",
"KSI.",
"Markiplier.",
"Nick Eh 30."
]
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        Number2 = randint(0, 5)
        basic.showString("" + (Channels[Number2]))
    }
})
