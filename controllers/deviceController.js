const Devices = require('../models/devices');

module.exports = app => {
  app.get('/devices', (req, res) => {

    Devices.read(res);

  });

  app.post('/devices', (req, res) => {

    const device = req.body;

    Devices.create(device, res);

  });

  app.delete('/devices/:id', (req, res) => Devices.delete(req, res));
}