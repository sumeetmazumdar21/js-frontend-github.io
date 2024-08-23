# Projects on DOM

## Project link
[Click here](https://stackblitz.com/edit/dom-project-codeczar)

# Solution Code

## Project 1 - Color Scheme Changer
```Javascript
    const buttons = document.querySelectorAll('.button');
    const body = document.querySelector("body");

    buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if(e.target.id){
        body.style.backgroundColor = e.target.id;
        }
    })
    })
```

## Project 2 - BMI Calculator

```
const form = document.querySelector('form');
  // This use-case i.e, before submitting values, will return empty values
  // const height = parseInt(document.querySelector('#height').value);
  // const weight = parseInt(document.querySelector('#weight').value);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#result');

  if(height === '' || height < 0 || isNaN(height)){
    result.innerHTML = "Enter a valid height";
  }else if(weight === '' || weight < 0 || isNaN(weight)){
    result.innerHTML = "Enter a valid weight";
  }else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
      //show the result
      if(bmi < 18.6){
        result.innerHTML = `Your BMI is: <span>${bmi}</span> ~ You're under-weight, try to put on some weight!`;
      } else if( bmi >= 18.6 && bmi < 24.9){
        result.innerHTML = `Your BMI is: <span>${bmi}</span> ~ You're perfectly in control of your life, well done!`;
      } else {
        result.innerHTML = `Your BMI is: <span>${bmi}</span> ~ Alert!!! You're OVERWEIGHT!!!`;
      }
  }
  
})

```
