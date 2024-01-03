// const express = require("express");

// const router=express.Router();

const router = require("express").Router();
const toyModel = require("../models/toy");

let arr = [
    { id: 1, name: "קלפים", price: 30 },
    { id: 2, name: "אליאס", price: 110 },
    { id: 3, name: "זיכרון", price: 50 },
];



router.get("/", (req, res) => {

    toyModel.find({}).then(alltoys => {
        res.json(alltoys)
    }).catch(err=>{
        res.status(400).send("לא ניתן לקבל את כל הספרים")
    })

   // res.json(arr);
})

router.get("/:toyid", (req, res) => {
    let toy = arr.find(item => item.id == req.params.toyid);
    if (!toy)
        return res.status(404).send("מצטערים אין ספר עם קוד כזה")
    res.json(toy);
})

router.delete("/:toyid", (req, res) => {
    let index = arr.findIndex(item => item.id == req.params.toyid);
    if (index == -1)
        return res.status(404).send(" מצטערים אין ספר עם קוד כזה למחיקה")
    let toy = arr.splice(index, 1)[0];
    res.json(toy);

})

router.post("/", (req, res) => {
    console.log(req.body);
    req.body.id = arr[arr.length - 1].id + 1;
    arr.push(req.body)
    res.json(req.body);
})

router.put("/:toyid", (req, res) => {
    let toy = arr.find(item => item.id == req.params.toyid);
    if (!toy)
        return res.status(404).send(" מצטערים אין ספר עם קוד כזה לעדכון")
    toy.name = req.body.name || book.name;
    toy.price = req.body.price || book.price;
    res.json(toy);

})

module.exports = router;