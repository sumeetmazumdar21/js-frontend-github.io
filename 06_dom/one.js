// Differnce between innerText, innerHTML and textContent

        {/* <h1 id="header" class="heading">Learning DOM Manipulation
        <span style="display: none;">testing innerHTML, textContent and innerText</span>
        </h1> */}

            title = document.getElementById("header")
                // <h1 id="header" class="heading" style="background-color: pink; color: crimson; border: 5px solid orange; border-radius: 20px; padding: 15px; text-align: center;">Learning DOM Manipulation</h1>

            title.textContent
                // 'Learning DOM Manipulation\n            testing innerHTML, textContent and innerText\n 

            title.innerText
                // 'Learning DOM Manipulation'

            title.innerHTML
                // 'Learning DOM Manipulation\n            <span style="display: none;">testing innerHTML, textContent and innerText</span>\n 

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// querySelector()

document.querySelector('#header')
    //  <h1 id="header" class="heading">Learning DOM Manipulation
    // <span style="display: none;">testing innerHTML, textContent and innerText</span>
    // </h1>

document.querySelector('input[type="password"]')
        //<input type="password" name="password" id="password">

    const myUlist = document.querySelector('ul')
    // undefined
    
    myUlist
    // <ul>​…​</ul>​
    
    const greenList = myUlist.querySelector('li')
    // undefined
    greenList
    // <li>​…​</li>​
    
    greenList.style.backgroundColor= "green"
    // 'green'
    
    greenList.style.padding = "20px"
    // '20px'
    
    greenList.style.fontSize= "30px"
    // '30px'