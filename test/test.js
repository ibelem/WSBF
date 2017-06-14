import test from 'ava'
import app from '../app.js'
import superkoa from 'superkoa'

test('async superkoa()', async (t) => {
  let res = await superkoa(app)
    .get('/profile/security')
  t.is(200, res.status)
  t.is(res.text, 'hello profile security', 'res.text == hello profile security')
})
