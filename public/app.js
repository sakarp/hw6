window.addEventListener('load', () => {
    document.getElementById("button-coffee").addEventListener("click", () => {
        let numCups = document.getElementById("number-coffee").value;
        let cupsObject = { type: "coffee", number: numCups };
        let passJSON = JSON.stringify(cupsObject);
        console.log(passJSON);
        fetch('/bev', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: passJSON
        })
            .then(response => response.json())
            .then(data => console.log(data));
    });

    document.getElementById("get-tracker").addEventListener("click", () => {
        fetch("/getBev")
            .then(response => response.json())
            .then(data => {
                myData = JSON.parse(data);
                myData.forEach(element => {
                    console.log("beverage type is: " + element.type);
                    console.log("number drunk: " + element.number);
                });
            });
    });
});