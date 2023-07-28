const { Comment } = require('../models');

const commentData = [];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
