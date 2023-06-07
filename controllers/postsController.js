const Post = require("../models/Post");

// create post
const createPost = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title) {
      throw Error("Post title is required");
    }
    if (!description) {
      throw Error("post description  is required");
    }

    const post = await Post.create({
      title,
      description,
      username: req.user.name,
      userId: req.user.id,
    });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get all posts
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get single post
const getSinglePost = async (req, res) => {
  try {
   
    const post = await Post.findById(req.params.id);
    if (!post) {
      res.status(404).json({ message: "post not available" });
      return
    }

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update post
const updatePost = async (req, res) => {
  try {
  
     const post = await Post.findById(req.params.id)
     if(!post){
      return  res.status(200).json("post not available");
     }
 
     if(req.user.id === post.userId){

      const updatedPost = await Post.findByIdAndUpdate({ _id: req.params.id },{
        $set: req.body 
      } , {
        new: true
      })
      res.status(200).json({updatedPost});
     } 
     else {
      res.status(401).json({message: "you are not authorize to update this post"});
     }

  } catch (error) {}
};


// delete post
const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
   
    if (!post) {
     return res.status(404).json({ message: "post not available" });
    }
    
    if(req.user.id === post.userId){
     await Post.deleteOne({_id:post.id})
      res.status(200).json({message: 'post deleted succesfully'});
     } 
     else {
      res.status(401).json({message: "you are not authorize to delete this post"});
     }

 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPost,
  getPosts,
  getSinglePost,
  updatePost,
  deletePost,
};
