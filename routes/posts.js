var express = require('express');
var router = express.Router();

router.get('/:id/comments', function  (req, res, next) {
	res.send("I found id: " + req.id);
});

router.get('/:id/comments/new', function  (req, res, next) {
	res.send("I will create a new form");
});

router.post('/:id/comments', function  (req, res, next) {
	res.send("I will create a new post");
});

router.get('/:id/comments/:cid', function  (req, res, next) {
	res.send("I will display a specific comment");
});

router.get('/:id/comments/:cid/edit', function  (req, res, next) {
	res.send("Edit a comment for a post");
});
router.put('/:id/comments/:cid', function  (req, res, next) {
	res.send("Update a specific comment");
});
router.delete('/:id/comments/:cid', function  (req, res, next) {
	res.send("Delete a specific comment: ");
});

module.exports = router;