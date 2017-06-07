require('./conn')

// 2、引入`User` Model
let User = require('./user')

// 3、定义`user` Entity
let user = new User({
  username: 'belem',
  password: '123456'
})

/*
user.save((err, doc) => {
  if (err) {
    console.log('save error:' + err)
  }
  console.log('save sucess \n' + doc)
})
*/

User.login('belem', '123456', function (err, result) {
  if (err) {
    console.log('login error:' + err)
  }
  console.log('login sucess \n' + result)
})
