require('./conn')

// 2、引入`User` Model
let User = require('./user')

let wherestr = {}
let wherestr2 = {
  username: 'belem'
}

let opt = {
  '_id': 0,
  '__v': 0
}
let updatestr = {
  'username': 'veritas'
}

User.update(wherestr2, updatestr, (err, doc) => {
  if (err) {
    console.log('update error:' + err)
  }
  console.log('update sucess \n' + doc)
})

User.find(wherestr, opt, (err, docs) => {
  if (err) {
    console.log('read error:' + err)
  }
  console.log('read sucess \n' + docs)
})
