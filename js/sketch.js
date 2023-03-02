let notes = {
    a: "C4",
    w: "C#4",
    s: "D4",
    e: "D#4",
    d: "E4",
    f: "F4",
    t: "F#4",
    g: "G4",
    y: "G#4",
    h: "A4",
    u: "A#4",
    j: "B4",
    k: "C5",
};

let noteKeys = [
    "a",
    "w",
    "s",
    "e",
    "d",
    "f",
    "t",
    "g",
    "y",
    "h",
    "u",
    "j",
    "k",
];

let buttons = [];
const autoWah = new Tone.AutoWah(50, 6, -30).toDestination();
const synth = new Tone.FMSynth().connect(autoWah);

function setup() {
    createCanvas(800, 400);
    slider = new Nexus.Slider("#slider", {
        value: 0,
        min: 0,
        max: 12,
        step: 1,
    });
    slider.on("change", function (v) {
        autoWah.Q.value = v;
    });
    noteKeys.forEach((word, index) => {
        buttons[index] = createButton(word);
        buttons[index].size(60, 20);
        buttons[index].position(
            20 + (index % 2 ? 200 : 0),
            20 + floor(index / 2) * 20
        );
        buttons[index].mousePressed(() => buttonSound(word));
    });
    buttons[0].position(20, 170);
    buttons[1].position(50, 150);
    buttons[2].position(80, 170);
    buttons[3].position(110, 150);
    buttons[4].position(140, 170);
    buttons[5].position(200, 170);
    buttons[6].position(230, 150);
    buttons[7].position(260, 170);
    buttons[8].position(290, 150);
    buttons[9].position(320, 170);
    buttons[10].position(350, 150);
    buttons[11].position(380, 170);
    buttons[12].position(440, 170);
}

function draw() {
    background(220);
    text("Adjust the quality of the AutoWah Effect on Slider Above", 0, 20);
    text(
        "It is oriented like a piano where you can click on the keys but also use your keyboard.",
        100,
        100
    );
}

function keyPressed() {
    let whatNote = notes[key];
    // console.log(whatNote);
    console.log(autoWah.Q.value);
    synth.triggerAttackRelease(whatNote, "8n");
}

function buttonSound(whichSound) {
    let whatNote = notes[whichSound];
    // console.log(whatNote);
    synth.triggerAttackRelease(whatNote, "8n");
}
