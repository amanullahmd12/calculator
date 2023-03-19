let screen = document.querySelector ('input');
let buttons = document.querySelectorAll ('button');
let string = '';

// console.log (len);

buttons.forEach (function (button) {
  button.addEventListener ('click', function (event) {
    if (event.target.innerHTML == '=') {
      string = eval (string);
      document.querySelector ('input').value = string;
    } else if (
      event.target.innerHTML == 'AC' ||
      event.target.innerHTML == 'C'
    ) {
      string = '';
      document.querySelector ('input').value = string;
    } else {
      string = string + event.target.innerHTML;
      screen.value = string;
    }
  });
});
