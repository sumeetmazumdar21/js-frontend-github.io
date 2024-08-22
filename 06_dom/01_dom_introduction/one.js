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

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// querySelectorAll() 

        // The Document method querySelectorAll() returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors.

        const tempList = document.querySelectorAll('li')
        //undefined
        tempList
        //NodeList(3) [li, li, li]
        
        tempList.style.backgroundColor = "green"
        // VM263:1 Uncaught TypeError: Cannot set properties of undefined (setting 'backgroundColor') at <anonymous>:1:32  (anonymous) @ VM263:1Understand this error

        tempList[0].style.backgroundColor = "green"
        // 'green'

        // forEach using querySelectorAll

        tempList.forEach((list) => {
            list.style.fontWeight = "700"
        })
        // undefined
        tempList.forEach((list) => {
            list.style.color = "yellow"
        })
        // undefined

// Converting nodeList to Array and applying array methods like map, filter etc
    Array.from(tempList)
    // (3) [li, li, li]
    const tempListArr = Array.from(tempList)
    // undefined
    tempListArr
    // (3) [li, li, li]
    tempListArr.map((li) => {
        li.style.color = "yellow"
    })
    // (3) [undefined, undefined, undefined]

    const inputBox = document.querySelectorAll('input')
    // undefined
    inputBox
    // NodeList(2) [input#email, input#password]
    const ipBoxArr = Array.from(inputBox)
    //undefined
    ipBoxArr
    // (2) [input#email, input#password]
    ipBoxArr.map((box) => {
        box.style.backgroundColor = "yellow"
    })
    // (2) [undefined, undefined]