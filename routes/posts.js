const express = require('express');
const router = express.Router();
const post = require("../models/post");


//get request using api
router.get("/", (req, res) => {
    const allPost = post.find()
    .then(allPost => {
        res.json(allPost)
    })
    .catch(err => {
        res.json({message: err})
    })
})


//get aspecific post with a given id
router.get("/:id", (req, res) => {
    const singlePost = post.findById(req.params.id)
    .then(singlePost => {
        res.json(singlePost);
    })
    .catch (err => {
        res.json({message: err});
    })
})


//post requrest using api
router.post("/", (req, res) => {
    const data = new post({
        title: req.body.title,
        description: req.body.description
    });
    data.save()
    .then(data => {

        res.json(data);
    })
    .catch(err => {
        res.json({message: err})
    });
})

//update with a specific id 
router.patch("/:postId", (req, res) => {
    const updatePost = post.updateOne(
        {
            _id: req.params.postId
        },
        {
            $set: {title: req.body.title}
        }
    )
    .then(updatePost => res.json(updatePost))
    .catch(err => res.json({message: err}));
})

//delete a post using spicific id
router.delete("/:delId",(req, res) => {
    const deletePost = post.deleteOne(
        {
            _id:req.params.delId
        }

    )

    .then(deletePost => res.json(deletePost))
    .catch(err => res.json({message: err}));
})

module.exports = router;