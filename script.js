var screen = document.querySelector("#screen");

var buttons = document.querySelectorAll(".btn");

buttons.forEach(item => {
    item.addEventListener("click", e => {
        let buttonText = e.target.innerText;
        screen.value += buttonText;
    });
});

function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch (e) {
        alert("Invalid operation");
        screen.value = "";
    }
}

function sin() {
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}

function log() {
    screen.value = Math.log(screen.value);
}

function pow() {
    screen.value = Math.pow(screen.value, 2);
}

function sqrt() {
    screen.value = Math.sqrt(screen.value, 2);
}

function pi() {
    screen.value *= 3.14159265359;
}

function e() {
    screen.value *= 2.718281828459045;
}

function fact() {
    var f = 1;
    var n = screen.value;
    for (var i = 1; i <= n; i++) {
        f = f * i;
    }
    screen.value = f;
}

function back() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}

function AC() {
    screen.value = "";
}