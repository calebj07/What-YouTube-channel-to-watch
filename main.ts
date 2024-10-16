let n = 0
let f = [
"ISAB.",
"Mr. Beast.",
"Mark Rober.",
"KSI.",
"Markiplier.",
"Nick Eh 30."
]
basic.forever(function () {
	
})
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        n = randint(0, 5)
        basic.showString("" + (f[n]))
    }
})
