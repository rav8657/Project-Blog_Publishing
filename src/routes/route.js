const express = require('express')
const router = express.Router()
const authorController = require('../controller/authorController')
const blogController = require('../controller/blogController')
const middleware = require('../middleware/middleware')

//Author routes
router.post('/authors', authorController.createAuthor)
router.post('/login', authorController.loginAuthor)

//Blog routes
router.post('/blogs', middleware.loginCheck, blogController.createBlog)
router.get('/filterblogs', middleware.loginCheck, blogController.getBlog)
router.put('/blogs/:blogId', middleware.loginCheck, blogController.updateDetails)
router.delete('/blogs/:blogId', middleware.loginCheck, blogController.deleteBlog)
router.delete('/blogs', middleware.loginCheck, blogController.deleteSpecific)



module.exports = router;