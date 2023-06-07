//btn for obtaining coefficients
const submit = document.getElementById("sendCoefficients");
submit.addEventListener("click", getCoefficients);


				//EQUATION BLOCK
const aEquation = document.getElementById("aEquation");
const bEquation = document.getElementById("bEquation");
const cEquation = document.getElementById("cEquation");

//work with +/- signs before b and c in equation scoreboard
const bSign = document.getElementById("bSign");
const cSign = document.getElementById("cSign");


				//SOLUTION BLOCK
//upMessage block
const upMessage = document.getElementById("upMessage");

//determinant block
const resultD = document.getElementById("resultD");
const messageD = document.getElementById("messageD");
const calculationOfD = document.getElementById("calculationD"); //add display: none if DIsNothing

//roots block
const firstRootUpCalc = document.getElementById("firstRootUpCalc");
const firstRootDownCalc = document.getElementById("firstRootDownCalc");
const firstRootRes = document.getElementById("firstRootRes");

const secondRoot = document.getElementById("secondRoot");
const secondRootUpCalc = document.getElementById("secondRootUpCalc");
const secondRootDownCalc = document.getElementById("secondRootDownCalc");
const secondRootRes = document.getElementById("secondRootRes");

function getCoefficients() {

	function getCoefficientA() {
		let submitedA = document.getElementById("aCoefficient").value;
		return submitedA;
	}

	function getCoefficientB() {
		let submitedB = document.getElementById("bCoefficient").value;
		return submitedB;
	}

	function getCoefficientC() {
		let submitedC = document.getElementById("cCoefficient").value;
		return submitedC;
	}

	let a = getCoefficientA();
	let b = getCoefficientB();
	let c = getCoefficientC();

	aEquation.innerText = `${a}`

	//check +/-b 
	function checkSignB() {
		if (b < 0) {
			bSign.innerText = "-"
			bEquation.innerText = `${Math.abs(b)}`
		} else {
			bSign.innerText = "+"
			bEquation.innerText = `${b}`
		}
	}
	checkSignB();
	//check +/-c
	function checkSignC() {
		if (c < 0) {
			cSign.innerText = "-"
			cEquation.innerText = `${Math.abs(c)}`
		} else {
			cSign.innerText = "+"
			cEquation.innerText = `${c}`
		}
	}
	checkSignC();


	function solveEquation() {
		if (a == 0) {
			calculationOfD.innerText = ""
			resultD.innerText = ""
			messageD.innerText = ""
			return upMessage.innerText = "It is not the Quadratic Equation"
		} else if (a != 0 && b == 0 && c == 0) {
			calculationOfD.innerText = ""
			resultD.innerText = ""
			messageD.innerText = ""
			return upMessage.innerText = "The equation has only one roote x = 0"
		} else {
			let D = b**2 - 4 * a * c
			//делаю пока через жёппу. найти!!! как ставить ×(-1) 
			calculationOfD.innerText = `(${b})^2 - 4×(${a})×(${c})`
			resultD.innerText = ` =${D}`
			if (D < 0) {
				let rootsCalcArr = [firstRootUpCalc, firstRootDownCalc, firstRootRes, secondRootUpCalc, secondRootDownCalc, secondRootRes];
				rootsCalcArr.forEach((el) => {
					el.innerText = ""
				});
				return messageD.innerText = `D = ${D} : equation does not have any rootes`
			} else if (D == 0) {
				let x = (-b + Math.sqrt(D)) / (2 * a)
				messageD.innerText = `D = ${D} : equation has only one root`
				if (b > 0) {
					firstRootUpCalc.innerText = `${-b} + √${D}`
				} else {
					firstRootUpCalc.innerText = `${b} + √${D}`
				}
				if (a > 0) {
					firstRootDownCalc.innerText = `2×${a}`
				} else {
					firstRootDownCalc.innerText = `2×(${a})`
				}
				firstRootRes.innerText = ` = ${x}`
				secondRoot.style.display = "none"
				return
			} else if (D > 0) {
				let x1 = (-b + Math.sqrt(D)) / (2 * a);
				let x2 = (-b - Math.sqrt(D)) / (2 * a);

				messageD.innerText = ""
				upMessage.innerText = ""
				if (b > 0) {
					firstRootUpCalc.innerText = `${-b} + √${D}`
					secondRootUpCalc.innerText = `${-b} - √${D}`
				} else {
					firstRootUpCalc.innerText = `${b} + √${D}`
					secondRootUpCalc.innerText = `${b} - √${D}`
				}
				if (a > 0) {
					firstRootDownCalc.innerText = `2×${a}`
					secondRootDownCalc.innerText = `2×${a}`
				} else {
					firstRootDownCalc.innerText = `2×(${a})`
					secondRootDownCalc.innerText = `2×(${a})`
				}

				firstRootRes.innerText = ` = ${(Math.round(x1 * 100) / 100)}`
				secondRootRes.innerText = ` = ${(Math.round(x2 * 100) / 100)}`
			}
		}
	}
	solveEquation();

}

// √  -  root symbol