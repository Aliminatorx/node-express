
const express = require('express')
const app = express();
const products = ["Laptop","LCD","Mobile"];
const company = ["Nike","Adidas","Puma"];

app.use(express.json());
 
app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/api",function(req,res){
    res.send({products,company});
});
app.get("/api/search", function (req, res) {
  res.send("Api Search");
});
//first parameter is url
//second is a function with two inputs one is request and one is response
app.get("/api/products/",function(req,res){
    res.send(products);
});
app.get("/api/company/",function(req,res){
    res.send(company);
});
//get one resource
app.get("/api/products/:index",function(req,res){
    if(!products[req.params.index]) 
    return res.status(400).send("Product not found");
    res.send(products[req.params.index]);
});
app.get("/api/company/:index",function(req,res){
    if(!company[req.params.index]) 
    return res.status(400).send("Company not found");
    res.send(company[req.params.index]);
});
//update one resource with id
app.put("/api/products/:index",function(req,res){
    products[req.params.index]=req.body.name;
    res.send(products[req.params.index]);
});
app.put("/api/company/:index",function(req,res){
    company[req.params.index]=req.body.name;
    res.send(company[req.params.index]);
});
//delete one resource
app.delete("/api/products/:index",function(req,res){
    products.splice(req.params.index ,1);
    res.send(products);
});
app.delete("/api/company/:index",function(req,res){
    company.splice(req.params.index ,1);
    res.send(company);
});
//create one resource
app.post("/api/products/",function(req,res){
    products.push(req.body.name);
    res.send(products);
});
app.post("/api/company/",function(req,res){
    company.push(req.body.name);
    res.send(company);
});

app.listen(3000);