var express =require("express");  //lib-----Node Module
var app=express();  // will create app object from express package

var onAboutUs=function(req, res){
    res.send("Chief Mentor :Ravi Tambade");
};
var onData=function(req, res){

    var products=[
        {"id":23, "title":"Gerbera", "description": "Wedding Flower"},
        {"id":24, "title":"Jasmine", "description": "Smelling Flower"},
        {"id":25, "title":"Lotus", "description": "Worship Flower"}
    ];
    res.send(products);
}

var onDefault=function(req, res){
    res.send("<h1>Transflower Learning Pvt. Ltd</h1>"+
              "<hr/>"+
              "<h2>PGDAC IACSD </h2>"+
              "<ol>"+
                    " <li>Mentoring for skill building</li>"+
                    " <li>Workshops</li>"+
                    " <li>Online Course</li>"+
                    " <li>Corporate Training</li>"+
             "</ol>");
};
app.get("/",onDefault);  // Request handler functions are registered
app.get("/api/products", onData);
app.get("/aboutus",onAboutUs);  // Request handler functions are registered
var server=app.listen(8081);
console.log("Server is running on port 8081");
