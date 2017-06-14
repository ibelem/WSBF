import test from 'ava'
import app from '../app.js'
import superkoa from 'superkoa'

test('profile page', async (t) => {
  let res = await superkoa(app)
    .get('/profile/security')
  t.is(res.status, 200)
  t.is(res.text, 'hello profile security', 'res.text == hello profile security')
})

test('profile http header', async (t) => {
  let res = await superkoa(app)
    .get('/profile/security')
  t.is(res.charset, 'utf-8')
  // t.is(res.header)
})


