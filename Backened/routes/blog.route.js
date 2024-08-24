const express = require('express');
const blog = require("../model/blogs.js");
const router = express.Router();

//Post
router.post("/post", async (req,res) => {
    try {
        const {title, desc, email} = req.body;
        const newPost = new blog({title, desc, email});
        console.log(newPost);
        await newPost
        .save()
        .then(() => res.status(200).json({message: "Data saved successfully!!"}));
    } catch (error) {
        res.status(400).json({message: "Some error has occured!"});
    }
});

//get All Blogs
router.get("/getAll", async (req,res) => {
    try {
        const data = await blog.find().sort({createdAt: -1 });
        res.status(200).json({"data": data});
       // console.log(data);
    } catch (error) {
        res.status(400).json({message: "Some error has occured!"});
    }
});

//getMyblogs on basis of emailid
// router.get("/getMyBlog/:email", async (req, res) => {
//     const email = req.params.email;
//     try {
//         const data = await blog.find({ email });
//         console.log(data);
//         res.status(200).json({ "data": data });
//     } catch (error) {
//         res.status(400).json({ message: "Some error has occurred!" });
//     }
// });

//get recent blog
router.get("/getRecentBlog", async (req,res) => {
    try {
        const data = await blog.find().sort({createdAt: -1 }).limit(3);
        res.status(200).json({"data": data});
    } catch (error) {
        res.status(400).json({message: "Some error has occured!"});
    }
});

//get blog by id
router.get("/getBlog/:id", async (req,res) => {
    try {
        const {id} = req.params;
        const data = await blog.findById(id);
        res.status(200).json({"data": data});
    } catch (error) {
        res.status(400).json({message: "Some error has occured!"});
    }
});


//update by id
router.put("/updateBlog/:id", async (req,res) => {
    try {
        const {id} = req.params;
        const {title, desc} = req.body;
        await blog.findByIdAndUpdate(id, {title, desc});
        res.status(200).json({message: "data updated successfully!"});
    } catch (error) {
        res.status(400).json({message: "Some error has occured!"});
    }
});

module.exports = router;