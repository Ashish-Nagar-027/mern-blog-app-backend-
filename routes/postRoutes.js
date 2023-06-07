const express = require('express')
const { createPost, getPosts, getSinglePost, deletePost, updatePost } = require('../controllers/postsController')
const router = express.Router()


router.post('/', createPost )
router.get('/', getPosts)
router.get('/:id', getSinglePost)
router.delete('/:id', deletePost )
router.put('/:id', updatePost)


module.exports = router