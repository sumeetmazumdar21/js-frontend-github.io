# Projects on DOM

## Project link
[Click here](https://stackblitz.com/edit/dom-project-4t8vof)

# Solution Code

## Project 1
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
