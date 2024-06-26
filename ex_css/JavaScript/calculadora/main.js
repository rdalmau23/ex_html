const valueEl = document.querySelector(".valor");

const acEl = document.querySelector(".ac");
const pmEl = document.querySelector(".mm");
const percentEl = document.querySelector(".porcentaje");

const additionEl = document.querySelector(".suma");
const subtractionEl = document.querySelector(".resta");
const multiplicationEl = document.querySelector(".multiplicacion");
const divisionEl = document.querySelector(".division");
const equalEl = document.querySelector(".igual");

const decimalEl = document.querySelector(".decimal");
const number0El = document.querySelector(".cero");
const number1El = document.querySelector(".uno");
const number2El = document.querySelector(".dos");
const number3El = document.querySelector(".tres");
const number4El = document.querySelector(".cuatro");
const number5El = document.querySelector(".cinco");
const number6El = document.querySelector(".seis");
const number7El = document.querySelector(".siete");
const number8El = document.querySelector(".ocho");
const number9El = document.querySelector(".nueve");
const numberElArray = [
  number0El,
  number1El,
  number2El,
  number3El,
  number4El,
  number5El,
  number6El,
  number7El,
  number8El,
  number9El,
];

// variables
let valueStrInMemory = null;
let operatorInMemory = null;

// Functions
const getValueAsStr = () => valueEl.textContent.split(",").join("");

const getValueAsNum = () => {
  return parseFloat(getValueAsStr());
};

const setStrAsValue = (valueStr) => {
  if (valueStr[valueStr.length - 1] === ".") {
    valueEl.textContent += ".";
    return;
  }

  const [wholeNumStr, decimalStr] = valueStr.split(".");
  if (decimalStr) {
    valueEl.textContent =
      parseFloat(wholeNumStr).toLocaleString() + "." + decimalStr;
  } else {
    valueEl.textContent = parseFloat(wholeNumStr).toLocaleString();
  }
};

const handleNumberClick = (numStr) => {
  const currentValueStr = getValueAsStr();
  if (currentValueStr === "0") {
    setStrAsValue(numStr);
  } else {
    setStrAsValue(currentValueStr + numStr);
  }
};

const getResultOfOperationAsStr = () => {
  const currentValueNum = getValueAsNum();
  const valueNumInMemory = parseFloat(valueStrInMemory);
  let newValueNum;
  if (operatorInMemory === "suma") {
    newValueNum = valueNumInMemory + currentValueNum;
  } else if (operatorInMemory === "resta") {
    newValueNum = valueNumInMemory - currentValueNum;
  } else if (operatorInMemory === "multiplicacion") {
    newValueNum = valueNumInMemory * currentValueNum;
  } else if (operatorInMemory === "division") {
    newValueNum = valueNumInMemory / currentValueNum;
  }

  return newValueNum.toString();
};

const handleOperatorClick = (operation) => {
  const currentValueStr = getValueAsStr();

  if (!valueStrInMemory) {
    valueStrInMemory = currentValueStr;
    operatorInMemory = operation;
    setStrAsValue("0");
    return;
  }
  valueStrInMemory = getResultOfOperationAsStr();
  operatorInMemory = operation;
  setStrAsValue("0");
};

// Add Event Listeners to functions
acEl.addEventListener("click", () => {
  setStrAsValue("0");
  valueStrInMemory = null;
  operatorInMemory = null;
});
pmEl.addEventListener("click", () => {
  const currentValueNum = getValueAsNum();
  const currentValueStr = getValueAsStr();

  if (currentValueStr === "-0") {
    setStrAsValue("0");
    return;
  }
  if (currentValueNum >= 0) {
    setStrAsValue("-" + currentValueStr);
  } else {
    setStrAsValue(currentValueStr.substring(1));
  }
});
percentEl.addEventListener("click", () => {
  const currentValueNum = getValueAsNum();
  const newValueNum = currentValueNum / 100;
  setStrAsValue(newValueNum.toString());
  valueStrInMemory = null;
  operatorInMemory = null;
});

// add event listeners to operators
additionEl.addEventListener("click", () => {
    handleOperatorClick("suma");
});
subtractionEl.addEventListener("click", () => {
    handleOperatorClick("resta");
});
multiplicationEl.addEventListener("click", () => {
    handleOperatorClick("multiplicacion");
});
divisionEl.addEventListener("click", () => {
    handleOperatorClick("division");
});
equalEl.addEventListener("click", () => {
  if (valueStrInMemory) {
    setStrAsValue(getResultOfOperationAsStr());
    valueStrInMemory = null;
    operatorInMemory = null;
  }
});

// Add Event Listeners to numbers and decimal
for (let i = 0; i < numberElArray.length; i++) {
  const numberEl = numberElArray[i];
  numberEl.addEventListener("click", () => {
    handleNumberClick(i.toString());
  });
}
decimalEl.addEventListener("click", () => {
  const currentValueStr = getValueAsStr();
  if (!currentValueStr.includes(".")) {
    setStrAsValue(currentValueStr + ".");
  }
});
