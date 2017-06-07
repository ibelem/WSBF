// 1、引入`mongoose`模块
let mongoose = require('mongoose')
require('./conn')
let bcrypt = require('bcrypt')

mongoose.Promise = global.Promise

let Schema = mongoose.Schema

// 定义Schema
let UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

UserSchema.pre('save', function (next) {
  var that = this

  bcrypt.genSalt(this._salt_bounds, function (err, salt) {
    if (err) {
      console.log(err)
      return next()
    }

    bcrypt.hash(that.password, salt, function (error, hash) {
      if (error) {
        console.log(error)
      }

      // console.log(this.password + ' \n ' + hash) 生成密文
      that.password = hash

      return next()
    })
  })
})

UserSchema.statics.login = function (username, password, cb) {
  this.findOne({
    username: username
  }, function (err, user) {
    if (err || !user) {
      if (err) {
        console.log(err)
      }

      return cb(err, {
        code: -1,
        msg: username + ' is not exist!'
      })
    }

    bcrypt.compare(password, user.password, function (error, res) {
      if (error) {
        console.log(error)
        return cb(err, {
          code: -2,
          msg: 'password is incorrect, please check it again!'
        })
      }

      return cb(null, user)
    })
  })
}

// 定义Model
// UserModel = mongoose.model('User', UserSchema)

// 暴露接口
// module.exports = UserModel

module.exports = mongoose.model('User', UserSchema)
