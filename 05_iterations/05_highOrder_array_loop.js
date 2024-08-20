// forEach()
    // The forEach() method of Array instances executes a provided function once for each array element.

    let places = ["Italy", "Spain", "Greece", "Ukraine"];
        // places.forEach(function(item){
        //     console.log(item);
        //         /*
        //         Italy
        //         Spain
        //         Greece
        //         Ukraine
        //         */
        // })

        // places.forEach( (item) => {
        //     console.log(item);
        //     /**
        //         Italy
        //         Spain
        //         Greece
        //         Ukraine
        //      */
        // })

        // function printPlaces(item) {
        //     console.log(item);
            
        // }

        // places.forEach(printPlaces); // do not use printPlaces();
        //     /**
        //         Italy  
        //         Spain
        //         Greece
        //         Ukraine
        //      */

        // places.forEach( (item, index, arr) => {
        //     console.log(item, index, arr);
            
        //     /**
        //         Italy 0 [ 'Italy', 'Spain', 'Greece', 'Ukraine' ]
        //         Spain 1 [ 'Italy', 'Spain', 'Greece', 'Ukraine' ]
        //         Greece 2 [ 'Italy', 'Spain', 'Greece', 'Ukraine' ]
        //         Ukraine 3 [ 'Italy', 'Spain', 'Greece', 'Ukraine' ]
        //      */
        // })

        const myObj = [
            {
                language: "JavaScript",
                fileExtension: "js"
            },
            {
                language: "Java",
                fileExtension: "java"
            },
            {
                language: "Python",
                fileExtension: "py"
            },
        ]

        myObj.forEach(  (item) => {
            console.log(item.fileExtension);
                // js
                // java
                // py
        });