# Projects on DOM

## Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-jysccj?file=index.html)

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
