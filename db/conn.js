let mongoose = require('mongoose')

mongoose.set('debug', true)

// 2、通过`mongoose.connect`连接mongodb数据库
let db = mongoose.connect('mongodb://127.0.0.1:27017/wsbf')

db.connection.on('error', function (error) {
  console.log('database connection failed：' + error)
})

db.connection.on('open', function () {
  console.log('database connection succeeded.')
})
