module.exports = app => {
  app.get('/device', (req, res) => res.send('servidor ok'))

  app.post('/device', (req, res) => res.send('servidor postando'))
}

