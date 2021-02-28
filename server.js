const express = require("express");

const app = express();

app.get("/", function(request, responce){
  responce.send("hello");
})

app.get("/conact", function(request, responce){
  responce.send("contact me at:npoliths8@gmail.com");
})

app.get("/about", function(request, responce){
  responce.send("my name is: nikos poliths and im student of it in thessaloniki");
})

app.listen(3000, function(){
  console.log("server started on port 3000");
});
