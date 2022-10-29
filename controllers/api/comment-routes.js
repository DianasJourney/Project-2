const router = require("express").Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    console.log('comment post route reached');
    console.log(req.session.user_id,req.body.body,req.body.review_id);
    try{
        const newComment = await Comment.create({
            user_id: req.session.user_id,
            body: req.body.body,
            review_id: req.body.review_id
         })
        res.json(newComment);
    }
    catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;