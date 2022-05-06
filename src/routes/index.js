
const express = require("express");
const router = express.Router()

// routings

router.get("/",(req,res)=>{

	res.render("index");

});


router.get("/Prueba",(req,res)=>{

	res.send("funciona la prueba");
});


module.exports = router;
