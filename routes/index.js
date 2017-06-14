const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'WSBF! C '
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'WSBF string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'WSBF json'
  }
})

module.exports = router
