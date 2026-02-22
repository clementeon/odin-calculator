const display = {
	mainDisplay: document.getElementById("answer"),
	smallDisplay: document.getElementById("numLog"),
};

const equation = {
	current: ``,
	prev: ``,
	operator: ``,
	equals: ``,
};

const values = {
	one: 1,
	two: 2,
	three: 3,
	four: 4,
	five: 5,
	six: 6,
	seven: 7,
	eight: 8,
	nine: 9,
	zero: 0,
	decimal: ".",
	equals: "=",
	plus: "+",
	minus: "-",
	times: "x",
	divide: "/",
};

const buttons = document.querySelectorAll("button");
const methods = [...document.querySelectorAll(".method")].map(
	(val) => val.innerText,
);

const add = function (a, b) {
	return a + b;
};

const minus = function (a, b) {
	return a - b;
};

const times = function (a, b) {
	return a * b;
};

const divide = function (a, b) {
	if (b == 0) {
		return "error";
	}
	return a / b;
};

const operatorFunction = {
	"+": (a, b) => add(a, b),
	"-": (a, b) => minus(a, b),
	x: (a, b) => times(a, b),
	"/": (a, b) => divide(a, b),
};

//operatorFunction['+'](a, b) => ...

function clearVals() {
	equation.current = ``;
	equation.prev = ``;
	equation.operator = ``;
	equation.equals = ``;
}
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		temp = button.id;
		console.log(temp);
		console.log(values[temp]);

		if (temp == "clear") {
			clearVals();
		} else if (temp == "clearAll") {
			display.smallDisplay.innerText = ``;
			clearVals();
		} else if (methods.includes(values[temp])) {
			if (equation.operator == ``) {
				equation.operator = values[temp];
				equation.prev = equation.current;
				equation.current = ``;
			} else {
				equation.prev = String(
					operatorFunction[equation.operator](
						parseFloat(equation.prev),
						parseFloat(equation.current),
					),
				);

				equation.operator = values[temp];
				equation.current = ``;
			}
		} else if (temp === "decimal" && equation.current.includes(".")) {
			return;
		} else if (typeof values[temp] === "number" || temp === "decimal") {
			equation.current += String(values[temp]);
		} else if (temp == "equals") {
			equation.equals = `=`;
		}

		if (equation.equals == ``) {
			display.mainDisplay.innerText = `${equation.prev} ${equation.operator} ${equation.current}`;
		} else if (temp == "equals") {
			let sol = operatorFunction[equation.operator](parseFloat(equation.prev), parseFloat(equation.current));
			display.smallDisplay.innerText = `${equation.prev} ${equation.operator} ${equation.current} =`;
			display.mainDisplay.innerText = `${sol}`
			equation.current = sol;
			equation.operator = ``;
		} else {
			display.smallDisplay.innerText = `${equation.prev} ${equation.operator} `;
			display.mainDisplay.innerText = `${equation.current}`;
		}
	});
});
