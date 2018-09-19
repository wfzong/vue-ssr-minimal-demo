const server = require('express')()
const Vue = require('vue')
const fs = require('fs')

const Renderer = require('vue-server-renderer').createRenderer({
  template:fs.readFileSync('./src/index.template.html', 'utf-8')
})

server.get('*', (req, res) => {

  const app = new Vue({
    data: {
      name: 'vue app~',
      url: req.url
    },
    template:'<div>hello from {{name}}, and url is: {{url}}</div>'
  })
  const context = {
    title: 'SSR test#'
  }
  Renderer.renderToString(app, context, (err, html) => {
    if(err) {
      console.log(err)
      res.status(500).end('server error')
    }
    res.end(html)
  })
})

server.listen(4001)
console.log('running at: http://localhost:4001');
