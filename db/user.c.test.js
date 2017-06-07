require('./conn')

// 2、引入`User` Model
let User = require('./user')

// 3、定义`user` Entity
const user = new User({
  username: 'belem',
  password: '123456'
})

console.log(user.username)
console.log(user.password)

user.save((err, doc) => {
  if (err) {
    console.log('save error:' + err)
  }
  console.log('save sucess \n' + doc)
})
