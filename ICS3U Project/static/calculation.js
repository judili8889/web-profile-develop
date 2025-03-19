let currentOperation = "";
let activeButton = null;

function set_operation(calcType) {
  currentOperation = calcType;
  document.getElementById("result").textContent = `Operation set to: ${calcType}`;

  const allButtons = document.querySelectorAll(".button-group button");
  allButtons.forEach((button) => {
    button.classList.remove("active");
  });

  const clickedButton = event.currentTarget;
  clickedButton.classList.add("active");
  activeButton = clickedButton;
}

function performCalculation() {
  const resultElement = document.getElementById("result");

  if (currentOperation === "") {
    resultElement.textContent = "Please select an operation";
    return;
  }

  const result = operation(currentOperation);
  resultElement.textContent = `Result: ${result}`;
}

function operation(x) {
  const num1 = Number.parseFloat(document.getElementById("num1").value);
  const num2 = Number.parseFloat(document.getElementById("num2").value);
  const initial_num = Number.parseFloat(document.getElementById("initial_num").value);
  const difference = Number.parseFloat(document.getElementById("gap").value);
  const ratio = Number.parseFloat(document.getElementById("gap").value);
  const upper_limit = Number.parseFloat(document.getElementById("upper_limit").value);
  const base = Number.parseFloat(document.getElementById("base").value);
  const num3 = Number.parseFloat(document.getElementById("num3").value);
  const num = Number.parseFloat(document.getElementById("num").value);

  if (
    [
      "Addition",
      "Subtraction",
      "Multiplication",
      "Division",
      "Floor Division",
      "Modulo",
      "Exponentiation",
      "Root",
    ].includes(x)
  ) {
    if (isNaN(num1) || isNaN(num2)) {
      return "Please enter valid numbers";
    }
    let result;
    let process;
    // 1. Addition
    if (x === "Addition") {
      result = addition(num1, num2);
      process = `${num1} + ${num2} = ${result}`;
    }
    // 2. Subtraction
    else if (x === "Subtraction") {
      result = subtraction(num1, num2);
      process = `${num1} - ${num2} = ${result}`;
    }
    // 3. Multiplication
    else if (x === "Multiplication") {
      result = multiplication(num1, num2);
      process = `${num1} × ${num2} = ${result}`;
    }
    // 4. Division
    else if (x === "Division") {
      result = division(num1, num2);
      process = `${num1} ÷ ${num2} = ${result}`;
    }
    // 5. Floor Division
    else if (x === "Floor Division") {
      result = floor_division(num1, num2);
      process = `floor(${num1} ÷ ${num2}) = ${result}`;
    }
    // 6. Modulo
    else if (x === "Modulo") {
      result = modulo(num1, num2);
      process = `${num1} % ${num2} = ${result}`;
    }
    // 7. Exponentiation
    else if (x === "Exponentiation") {
      result = exponentiation(num1, num2);
      process = `${num1}<sup>${num2}</sup> = ${result}`;
    }
    // 8. Root
    else if (x === "Root") {
      result = root(num1, num2);
      process = `<sup>${num1}</sup>√${num2} = ${result}`;
    }
    document.getElementById("console").innerHTML = process;
    return result;
    // 9. Arithmetic Summation
  } else if (x === "Arithmetic Summation") {
    if (isNaN(initial_num) || isNaN(difference) || isNaN(upper_limit)) {
      return "Please enter valid numbers";
    }
    const result = arithmetic_sum(initial_num, difference, upper_limit);
    const process = `Arithmetic Sum from ${initial_num} to ${upper_limit} with difference ${difference}: ${result}`;
    document.getElementById("console").innerHTML = process;
    return result;
    // 10. Geometric Summation
  } else if (x === "Geometric Summation") {
    if (isNaN(initial_num) || isNaN(ratio) || isNaN(upper_limit)) {
      return "Please enter valid numbers";
    }
    const result = geometric_sum(initial_num, ratio, upper_limit);
    const process = `Geometric Sum from ${initial_num} to ${upper_limit} with ratio ${ratio}: ${result}`;
    document.getElementById("console").innerHTML = process;
    return result;
    // 11. Arithmetic Product
  } else if (x === "Arithmetic Product") {
    if (isNaN(initial_num) || isNaN(difference) || isNaN(upper_limit)) {
      return "Please enter valid numbers";
    }
    const result = arithmetic_pro(initial_num, difference, upper_limit);
    const process = `Arithmetic Product from ${initial_num} to ${upper_limit} with difference ${difference}: ${result}`;
    document.getElementById("console").innerHTML = process;
    return result;
    // 12. Geometric Product
  } else if (x === "Geometric Product") {
    if (isNaN(initial_num) || isNaN(ratio) || isNaN(upper_limit)) {
      return "Please enter valid numbers";
    }
    const result = geometric_pro(initial_num, ratio, upper_limit);
    const process = `Geometric Product from ${initial_num} to ${upper_limit} with ratio ${ratio}: ${result}`;
    document.getElementById("console").innerHTML = process;
    return result;
    // 13. Logarithm
  } else if (x === "Logarithm") {
    if (isNaN(base) || isNaN(num3)) {
      return "Please enter valid numbers";
    }
    const result = logarithm(base, num3);
    const process = `log<sub>${base}</sub>(${num3}) = ${result}`;
    document.getElementById("console").innerHTML = process;
    return result;
    // 14. Base Conversion
  } else if (x === "Base Conversion") {
    if (isNaN(base) || isNaN(num3)) {
      return "Please enter valid numbers";
    }
    const result = base_conversion(base, num3);
    const process = `${num3}<sub>(10)</sub> = ${result}<sub>(${base})</sub>`;
    document.getElementById("console").innerHTML = process;
    return result;
  } else if (x === "Prime Number Checker") {
    if (isNaN(num)) {
      return "Please enter a valid number";
    }
    const result = `The greatest prime number less than ${num} is ${prime_number_checker(num)}`;
    document.getElementById("console").innerHTML = result;
    return result;
  } else {
    return "Invalid operation";
  }
}

// 1. Addition -----------------------------------------------------------------------------------------------
function addition(num1, num2) {
  return num1 + num2;
}

// 2. Subtraction --------------------------------------------------------------------------------------------
function subtraction(num1, num2) {
  return num1 - num2;
}

// 3. Multiplication -----------------------------------------------------------------------------------------
function multiplication(num1, num2) {
  return num1 * num2;
}

// 4. Division -----------------------------------------------------------------------------------------------
function division(num1, num2) {
  if (num2 !== 0) return num1 / num2;
  else return "Undefined";
}

// 5. Floor Division -----------------------------------------------------------------------------------------
function floor_division(num1, num2) {
  if (num2 !== 0) {
    const result = Math.floor(num1 / num2);
    return result;
  } else {
    return "Undefined";
  }
}

// 6. Modulo -------------------------------------------------------------------------------------------------
function modulo(num1, num2) {
  if (num2 !== 0) return num1 % num2;
  else return "Undefined";
}

// 7. Exponentiation -----------------------------------------------------------------------------------------
function exponentiation(num1, num2) {
  return num1 ** num2;
}

// 8. Root ---------------------------------------------------------------------------------------------------
function root(num1, num2) {
  if (num1 !== 0) return num2 ** (1 / num1);
  else return "Undefined";
}

// 9. Arithmetic Summation -----------------------------------------------------------------------------------
function arithmetic_sum(initial_num, difference, upper_limit) {
  if (difference === 0) {
    return "Difference cannot be zero";
  }
  if ((difference > 0 && initial_num > upper_limit) || (difference < 0 && initial_num < upper_limit)) {
    return "Invalid Range";
  }
  const n = Math.floor(Math.abs((upper_limit - initial_num) / difference)) + 1;
  return (n / 2) * (2 * initial_num + (n - 1) * difference);
}

// 10. Geometric Summation -----------------------------------------------------------------------------------
function geometric_sum(initial_num, ratio, upper_limit) {
  if (ratio === 0) {
    return "Ratio cannot be zero";
  }
  if (ratio === 1) {
    if (initial_num > upper_limit) {
      return "Invalid Range";
    }
    return initial_num * (Math.floor((upper_limit - initial_num) / initial_num) + 1);
  }
  if (
    (ratio > 1 && initial_num > upper_limit) ||
    (ratio < 1 && ratio > 0 && initial_num < upper_limit) ||
    (ratio < 0 && ((initial_num > 0 && upper_limit < 0) || (initial_num < 0 && upper_limit > 0)))
  ) {
    return "Invalid Range";
  }
  let n;
  if (ratio > 0) {
    n = Math.floor(Math.log(upper_limit / initial_num) / Math.log(ratio)) + 1;
  } else {
    let term = 0;
    let current = initial_num;
    while (ratio !== -1 && Math.abs(current) <= Math.abs(upper_limit)) {
      term += 1;
      current *= ratio;
    }
    n = term;
  }
  return (initial_num * (1 - ratio ** n)) / (1 - ratio);
}

// 11. Arithmetic Product ------------------------------------------------------------------------------------
function arithmetic_pro(initial_num, difference, upper_limit) {
  if (difference === 0) {
    return "Difference cannot be zero";
  }
  if ((difference > 0 && initial_num > upper_limit) || (difference < 0 && initial_num < upper_limit)) {
    return "Invalid Range";
  }
  let product = 1;
  let current = initial_num;
  while ((difference > 0 && current <= upper_limit) || (difference < 0 && current >= upper_limit)) {
    product *= current;
    current += difference;
  }
  return product;
}

// 12. Geometric Product -------------------------------------------------------------------------------------
function geometric_pro(initial_num, ratio, upper_limit) {
  if (ratio === 0) {
    return "Ratio cannot be zero";
  }
  if (
    (ratio > 1 && initial_num > upper_limit) ||
    (ratio < 1 && ratio > 0 && initial_num < upper_limit) ||
    (ratio < 0 && ((initial_num > 0 && upper_limit < 0) || (initial_num < 0 && upper_limit > 0)))
  ) {
    return "Invalid Range";
  }
  let product = 1;
  let current = initial_num;
  if (ratio > 0) {
    while ((ratio > 1 && current <= upper_limit) || (ratio < 1 && current >= upper_limit)) {
      product *= current;
      current *= ratio;
    }
  } else {
    let count = 0;
    const maxIterations = 10000;
    while (
      ((ratio > -1 && Math.abs(current) <= Math.abs(upper_limit)) ||
        (ratio < -1 && Math.abs(current) <= Math.abs(upper_limit))) &&
      count < maxIterations
    ) {
      product *= current;
      current *= ratio;
      count += 1;
    }
    if (count >= maxIterations) {
      return "Calculation limit exceeded";
    }
  }
  return product;
}

// 13. Logarithm ---------------------------------------------------------------------------------------------
function logarithm(base, num) {
  if (base <= 0 || num <= 0) {
    return "Base and number must be greater than zero";
  }
  return Math.log(num) / Math.log(base);
}

// 14. Base Conversion ---------------------------------------------------------------------------------------
function base_conversion(base, num) {
  if (base <= 0 || base === 1) {
      return "Base cannot be negative, 0, or 1.";
  }
  let isNegativeNum = num < 0;
  let absNum = Math.abs(num);
  let integerPart = Math.floor(absNum);
  let result = "";
  let dividend = integerPart;
  do {
      let remainder = dividend % base;
      dividend = Math.floor(dividend / base);
      if (remainder < 0) {
          remainder += Math.abs(base);
          dividend += 1;
      }
      result = (remainder >= 10 ? `(${remainder})` : remainder) + result;
  } while (dividend !== 0);
  if (!Number.isInteger(num)) {
      let decimalPart = absNum - Math.floor(absNum);
      result += ".";
      for (let i = 0; i < 9 && decimalPart !== 0; i++) {
          decimalPart *= base;
          let digit = Math.floor(decimalPart);
          if (digit < 0) {
              digit += Math.abs(base);
          }
          result += (digit >= 10 ? `(${digit})` : digit);
          decimalPart -= Math.floor(decimalPart);
      }
  }
  return isNegativeNum ? "-" + result : result;
}
// 15. Prime Number Checker ----------------------------------------------------------------------------------
function prime_number_checker(number) {
  if (number <= 1) return "Invalid Number";
  if (number <= 3) return number;

  let k = Math.floor(number / 6);

  while (k > 0) {
    let candidate2 = 6 * k + 1;
    let candidate1 = 6 * k - 1;

    if (candidate2 <= number && isPrime(candidate2)) return candidate2;
    if (candidate1 <= number && isPrime(candidate1)) return candidate1;

    k--;
  }

  // If no candidate found, return 3 or 2 if number is smaller
  return number >= 3 ? 3 : 2;
}

function isPrime(n) {
  if (n <= 3) return n > 1;
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}
