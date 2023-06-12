"use strict";

let a,
	b,
	c,
	D,
	x1,
	x2;
let coefArray = [];

const calculate = document.getElementById("sendCoefficients");
calculate.addEventListener("click", calcRoots);
const clear = document.getElementById("clearForm");
clear.addEventListener("click", cleanFields);

const messageField = document.getElementById("upMessage");

const calcOfD = document.getElementById("calculationD");
const resultOfD = document.getElementById("resultD");

const firstRootUpCalc = document.getElementById("firstRootUpCalc");
const firstRootDownCalc = document.getElementById("firstRootDownCalc");
const firstRootRes = document.getElementById("firstRootRes");

const secondRootUpCalc = document.getElementById("secondRootUpCalc");
const secondRootDownCalc = document.getElementById("secondRootDownCalc");
const secondRootRes = document.getElementById("secondRootRes");

const determinant = document.getElementById("determinant");
const firstRoot = document.getElementById("firstRoot");
const secondRoot = document.getElementById("secondRoot");

function cleanFields() {
	let variables = [a, b, c, D, x1, x2];

	(function () {
		D = undefined;
		x1 = undefined;
		x2 = undefined;
	})();

	let array = [messageField, calcOfD, resultOfD, firstRootUpCalc, firstRootDownCalc, firstRootRes, secondRootUpCalc, secondRootDownCalc, secondRootRes];

	(function () {
		array.forEach((el) => el.innerText = "");
	})();

	let formulaes = [determinant, firstRoot, secondRoot];

	(function () {
		formulaes.forEach((el) => el.style.display = "none")
	})();
}

function getUserInputs() {

	let a = (function() {
		let submitedA = document.getElementById("aCoefficient").value;
		return +submitedA;
	})();

	let b = (function() {
			let submitedB = document.getElementById("bCoefficient").value;

			return +submitedB;
		})();

	let c = (function() {
			let submitedC = document.getElementById("cCoefficient").value;
			return +submitedC;
		})();

	return coefArray = [a, b, c];
}

// these 2 functions for changing signs before b and c: seems very stupid
function changeSignB() {
	let num = document.getElementById("bCoefficient").value;
	if (num < 0) {
		document.getElementById("bSign").innerText = "-"
	} else if (num >= 0) {
		document.getElementById("bSign").innerText = "+"
	}
}

function changeSignC() {
	let num = document.getElementById("cCoefficient").value;
	if (num < 0) {
		document.getElementById("cSign").innerText = "-"
	} else if (num >= 0) {
		document.getElementById("cSign").innerText = "+"
	}
}


function calcD() {
	getUserInputs();

	a = coefArray[0];
	b = coefArray[1];
	c = coefArray[2];

	if (a == 0) {
		return messageField.innerText = "It is not the Quadratic Equation";
	} else if (a != 0 && b == 0 && c == 0) {
		return messageField.innerText = "The equation has only one roote: x = 0"
	} else {
		D = b ** 2 - 4 * a *c;
		determinant.style.display = "flex";
		calcOfD.innerText = `(${b}) ^ 2 - 4 × (${a}) × (${c})`;
		resultOfD.innerText = `= ${D}`;
	}
}

function calcRoots() {
	cleanFields();
	calcD();

	(function(){
		if (D < 0) {
			messageField.innerText = `D = ${D} : equation does not have any rootes`;
		} else if (D == 0) {
			firstRoot.style.display = "flex";
			x1 = (-b + Math.sqrt(D)) / (2 * a);
			firstRootUpCalc.innerText = `- ${b} + √${D}`;
			firstRootDownCalc.innerText = `2 × ${a}`;
			firstRootRes.innerText = ` = ${x1}`;
			messageField.innerText = `D = ${D} : equation has only one root: ${(Math.round(x1 * 100) / 100)}`;
		} else if (D > 0) {
			x1 = (-b + Math.sqrt(D)) / (2 * a);
			firstRoot.style.display = "flex";
			firstRootUpCalc.innerText = `- ${b} + √${D}`;
			firstRootDownCalc.innerText = `2 × ${a}`;
			firstRootRes.innerText = ` = ${(Math.round(x1 * 100) / 100)}`;

			x2 = (-b - Math.sqrt(D)) / (2 * a);
			secondRoot.style.display = "flex";
			secondRootUpCalc.innerText = `- ${b} - √${D}`;
			secondRootDownCalc.innerText = `2 × ${a}`;
			secondRootRes.innerText = ` = ${(Math.round(x2 * 100) / 100)}`
			messageField.innerText = `D = ${D} : equation has two roots: ${(Math.round(x1 * 100) / 100)} and ${(Math.round(x2 * 100) / 100)}`;

			console.log(a, b, c, D, x1, x2, "Roots were calculated");

			let rootArr = [x1, x2];

			return rootArr;
		}
	})();
}
