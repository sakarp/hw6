const { request, response } = require('express');
let express = require('express');
let app = express();

let signs = {
    data: [
        {
            name: "Aries",
            info: "some stuff"
        },
        {
            name: "Scorpio",
            info: "some scorpio stuff"
        },
        {
            name: "Virgo",
            info: "some virgo stuff"
        }
    ]
}; 

app.use("/static", express.static("public"));

app.get("/", (request, response) => {
    console.log(request.url);
    response.send("@root");
});

app.get("/about", (request, response) => {
    console.log(request.url);
    response.send("@about");
});

app.get("/signs", (request, response) =>{
    response.json(signs);
});

app.listen(3000, ()=>{
    console.log("app is listening at 3000");
});

app.get("/signs/:sign", (request, response) =>{
    let userReq = request.params["sign"];
    console.log(userReq);
    let userResponse;
    for(i=0; i<signs.data.length; i++){
        if (signs.data[i].name == userReq){ userResponse = signs.data[i].info} 
    }
    if (userResponse){
        response.send("here is your shizz: " + userResponse);
    } else { response.send("no such things as " + userReq);}
});