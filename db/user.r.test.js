require('./conn')

// 2、引入`User` Model
let User = require('./user')

let wherestr = {}
let opt = {
  '_id': 0,
  '__v': 0
}

User.find(wherestr, opt, (err, docs) => {
  if (err) {
    console.log('read error:' + err)
  }
  console.log('read sucess \n' + docs)
})

User.count(wherestr, (err, docs) => {
  if (err) {
    console.log('read error:' + err)
  }
  console.log('read sucess \n' + docs)
})
