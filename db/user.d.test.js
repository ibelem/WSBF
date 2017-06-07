require('./conn')

// 2、引入`User` Model
let User = require('./user')

let wherestr = {}
let wherestr2 = {
  username: 'veritas'
}

User.remove(wherestr2, (err, doc) => {
  if (err) {
    console.log('remove error:' + err)
  }
  console.log('remove sucess \n' + doc)
})

User.count(wherestr, (err, docs) => {
  if (err) {
    console.log('count error:' + err)
  }
  console.log('count sucess \n' + docs)
})
