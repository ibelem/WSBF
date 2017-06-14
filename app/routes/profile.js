const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('profile', {
    title: 'profile page'
  })
})

router.get('/security', function (ctx, next) {
  ctx.body = 'hello profile security'
})

module.exports = router
