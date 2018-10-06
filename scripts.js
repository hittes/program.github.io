var values = {
    a: 0,
    b: 0,
    c: 0
}

var axisLength = 20;
var aWidth = 0;
var bWidth = 0;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function f() {
    values.a = getRndInteger(6, 9);
    values.c = getRndInteger(11, 14);
    values.b = values.c - values.a;

    document.getElementById("expression-operand-a").textContent = values.a;
    document.getElementById("expression-operand-b").textContent = values.b;
    document.getElementById("expression-solution-completed").value = "?";

    var axisWidth = document.getElementById("arrows-road").offsetWidth;
    aWidth = (values.a / axisLength) * axisWidth;
    bWidth = (values.b / axisLength) * axisWidth;

    document.getElementById("arrow-element-a").style.width = aWidth + "px";
    document.getElementById("arrow-element-b").style.width = bWidth + "px";

    console.log(aWidth);
    paintArrowA();

}

function operandChanged(event) {
    if(event.value === "") {
        event.style.color = "black";
        return;
    }

    var value = Number(event.value);

    if(event.className === "arrow-value-a") {
        if(value !== values.a) {
            document.getElementById("expression-operand-a").style.backgroundColor = "orange";
            document.getElementById("arrow-value-a").style.color = "red";
        }
        else {
            document.getElementById("expression-operand-a").style.backgroundColor = "transparent";
            document.getElementById("arrow-value-a").classList.add('invisible');
            document.getElementById("arrow-value-completed-a").classList.remove('invisible');
            document.getElementById("arrow-value-completed-a").textContent = value;
            document.getElementById("arrow-element-b").classList.remove('invisible');
            paintArrowB();
        }
    }
    else if(event.className === "arrow-value-b") {
        if(value !== values.b) {
            document.getElementById("expression-operand-b").style.backgroundColor = "orange";
            document.getElementById("arrow-value-b").style.color = "red";
        }
        else {
            document.getElementById("expression-operand-b").style.backgroundColor = "transparent";
            document.getElementById("arrow-value-b").classList.add('invisible');
            document.getElementById("arrow-value-completed-b").classList.remove('invisible');
            document.getElementById("arrow-value-completed-b").textContent = value;
            document.getElementById("arrow-element-b").classList.remove('invisible');
            document.getElementById("expression-solution-completed").classList.add('invisible');
            document.getElementById("expression-solution").classList.remove('invisible');
        }
    }
}

function solutionChanged(event) {
    if(event.value === "") {
        event.style.color = "black";
        return;
    }

    var value = Number(event.value);

    if(value !== values.c) {
        event.style.color = "red";
    }
    else {
        document.getElementById("expression-solution").classList.add('invisible');
        document.getElementById("expression-solution-completed").classList.remove('invisible');
        document.getElementById("expression-solution-completed").textContent = value;
    }

    console.log(values.c);
}

function paintArrowA() {
    var c = document.getElementById("arrow-a");

    c.style.width ='100%';
    c.width  = c.offsetWidth;
    var ctx = c.getContext("2d");

    ctx.lineWidth = 4;
    ctx.strokeStyle = "#d61750";
    ctx.beginPath();
    ctx.moveTo(5, c.height);
    ctx.bezierCurveTo(0, 0, c.width - 5, 0, c.width - 5, c.height);
    ctx.stroke();
}

function paintArrowB() {
    var c = document.getElementById("arrow-b");

    c.style.width ='100%';
    c.width  = c.offsetWidth;
    var ctx = c.getContext("2d");
    ctx.strokeStyle = "#d61750";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(5, c.height);
    ctx.bezierCurveTo(0, 0, c.width - 5, 0, c.width - 5, c.height);
    ctx.stroke();
}

f();