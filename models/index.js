//imports User model from ./User file in models directory
const User = require('./User');
//imports vote model from ./Vote file in models directory
const Vote = require('./Vote');
//const Comment = require('./Comment');
const Genres = require('./Genres');

//create model associations between models User and Post (this is a one-to-many relationship) This association creates the reference for the id column in the User model to link to the corresponding foreign key pair, which is the user_id in the Post model.
// User.hasMany(Post, {
//     foreignKey: 'user_id'
// });

//make the reverse association, definite relationship of the post model to the user model. Inferred constraint is that a post can belong to one user, but not many users.
// Post.belongsTo(User, {
//     foreignKey: 'user_id',
// })

//associates User and Post to one another so that when we query User, we will see all of the posts they've voted on
// User.belongsToMany(Post, {
//     through: Vote,
//     as: 'voted_posts',
//     foreignKey: 'user_id'
// })

//double check that the above and below comments dont need to be switched

//associates User and Post to one another so that when we query Post, we will see the total votes a user creates
// Post.belongsToMany(User, {
//     through: Vote,
//     as: 'voted_posts',
//     foreignKey: 'post_id'
// });

//associations will let us see total # of votes on a post
//will also connect User to Vote directly
Vote.belongsTo(User, {
    foreignKey: 'user_id'
});

Vote.belongsTo(Genres, {
    foreignKey: 'genre_id'
});

User.hasMany(Vote, {
    foreignKey: 'user_id'
});

Genres.hasMany(Vote, {
    foreignKey: 'genre_id'
});

//Comment.belongsTo(User, {
    //foreignKey: 'user_id'
//});
  
//Comment.belongsTo(Genres, {
    //foreignKey: 'genre_id'
//});
  
//User.hasMany(Comment, {
   // foreignKey: 'user_id'
//});
  
//Genres.hasMany(Comment, {
    //foreignKey: 'genre_id'
//});

module.exports = { User, Genres, Vote };