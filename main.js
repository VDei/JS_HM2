//?  Exersize_1
let a = +prompt("Enter your age");
if (a >= 0 && a < 12) {
  document.write("You are child <br>");
  document.body.style.fontSize = "24px";
} else if (a >= 12 && a < 18) {
  document.write("You are teenager <br>");
  document.body.style.fontSize = "24px";
} else if (a >= 18 && a <= 60) {
  document.write("You are adult <br>");
  document.body.style.fontSize = "24px";
} else if (a > 60) {
  document.write("You are old <br>");
  document.body.style.fontSize = "24px";
} else {
  alert("Invalid data! Please, enter your age only as a number");
}

//?  Exersize_2
let b = +prompt("Enter number from 0 to 9");
switch (b) {
  case 1:
    document.write("! <br>");
    document.body.style.fontSize = "24px";
    break;
  case 2:
    document.write("@ <br>");
    document.body.style.fontSize = "24px";
    break;
  case 3:
    document.write("# <br>");
    document.body.style.fontSize = "24px";
    break;
  case 4:
    document.write("$ <br>");
    document.body.style.fontSize = "24px";
    break;
  case 5:
    document.write("% <br>");
    document.body.style.fontSize = "24px";
    break;
  case 6:
    document.write("^ <br>");
    document.body.style.fontSize = "24px";
    break;
  case 7:
    document.write("& <br>");
    document.body.style.fontSize = "24px";
    break;
  case 8:
    document.write("* <br>");
    document.body.style.fontSize = "24px";
    break;
  case 9:
    document.write("( <br>");
    document.body.style.fontSize = "24px";
    break;
  case 0:
    document.write(") <br>");
    document.body.style.fontSize = "24px";
    break;
  default:
    alert("Invalid data! Put number only from 0 to 9");
}

//?  Exersize_3
let c = parseInt(+prompt("Enter number from 100 to 999"));
if (c >= 100 && c <= 999) {
  let d = parseInt(c / 100);
  let e = c % 100;
  let f = parseInt(e / 10);
  let g = e % 10;
  if (d == f && f == g) {
    document.write("Все цифры одинаковые <br>");
    document.body.style.fontSize = "24px";
  } else if (d == f || f == g || d == g) {
    document.write("две цифры одинаковые <br>");
    document.body.style.fontSize = "24px";
  } else {
    document.write("Одинаковых цифр нет <br>");
    document.body.style.fontSize = "24px";
  }
} else {
  alert("Invalid data! Try again and put any number only from 100 to 999");
}

//?  Exersize_4
let y = parseInt(+prompt("Enter number of the year"));
y % 400 == 0 || (y % 4 == 0 && y % 100 != 0)
  ? document.write("It's a leap year <br>")
  : document.write("It`s not a leap year <br>");

//?  Exersize_5
let h = parseInt(+prompt("Enter number from 10000 to 99999"));
if (h >= 10000 && h <= 99999) {
  let j = parseInt(h / 10000);
  h = h % 10000;
  let k = parseInt(h / 1000);
  h = h % 1000;
  h = h % 100;
  let l = parseInt(h / 10);
  h = h % 10;
  if (j == h && k == l) {
    document.write("Число является палиндромом <br>");
    document.body.style.fontSize = "24px";
  } else {
    document.write("Число не является палиндромом <br>");
    document.body.style.fontSize = "24px";
  }
} else {
  alert("Invalid data! Try again and put any number only from 10000 to 99999");
}

//?  Exersize_6
let usd = parseInt(+prompt("Enter how much USD you need to convert "));
let money = prompt(
  "We can convert your USD to EUR, UAH or AZN. Enter please what you need to get "
);
switch (money) {
  case "EUR":
  case "eur":
    let eur = usd / 1.09;
    document.write("You will get " + eur.toFixed(2) + " EUR.");
    break;

  case UAH:
  case uah:
    let uah = usd * 27;
    document.write("You will get " + uah.toFixed(2) + " UAH.");
    break;

  case AZN:
  case azn:
    let azn = usd / 1.7;
    document.write("You will get " + azn.toFixed(2) + " AZN.");
    break;
  default:
    alert("Choose and enter only EUR, UAH or AZN for convert.");
    break;
}

//?  Exersize_7
let order = +prompt("Enter your purchase amount");
if (order < 200) {
  document.write("You will pay " + order + ".");
} else if (order >= 200 && order < 300) {
  document.write("You got 3% discount and will pay " + order * 0.97 + ".");
} else if (order >= 300 && order < 500) {
  document.write("You got 5% discount and will pay " + order * 0.95 + ".");
} else if (order >= 500) {
  document.write("You got 7% discount and will pay " + order * 0.93 + ".");
} else if (order <= 0) {
  alert("Items do not cost 0");
} else {
  alert("Error! Enter your purchase amount only with using numbers");
}
