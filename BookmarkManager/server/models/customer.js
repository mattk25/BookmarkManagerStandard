var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId
  , bcrypt = require('bcrypt')
  , SALT_WORK_FACTOR = 10;

var referenceSchema = Schema({
    _id    : Number,
    title   : String,
    url     : String,
    type    : String,
    source  : String,
    text    : String,
    vote    : Number,
    rating  : Number,

    subDate : {type: Date, default: Date.now},
    author  : [{type: Schema.Types.ObjectId, ref: User}],
    user    : [{type: Schema.Types.ObjectId, ref: 'User'}],
    book    : [{type: Schema.Types.ObjectId, ref: 'Book'}]
});

var userSchema = Schema({
    _id     : Number,
    name    : String,
    email   : String,
    username: {type: String, required: true, index: {unique: true}},
    password: {type: String, required: true},
    regDate : {type: Date, default: Date.now},

    friendRequest: [{type: Schema.Types.ObjectId, ref: User}],
    friends : [{type: Schema.Types.ObjectId, ref: User}],
    tags    : [{type: Schema.Types.ObjectId, ref: Tag}]

});

var tagSchema = Schema({
    _id     : Number,
    name    : String,
    desc    : String,
    slug    : String,

    comment: [{type: Schema.Types.ObjectId, ref: Comment}]
});




exports.referenceSchema = ReferenceSchema;
module.exports = mongoose.model('Reference', ReferenceSchemaeferenceSchema);
