var cettings = require('cettings')

module.exports = function(game) {
  function bindkey(key, val) {
    key = key.split('.')
    if (key[0] === 'controls') {
      Object.keys(game.keybindings).forEach(function(k, i) {
        var v = game.keybindings[k]
        if (v === key[1]) game.keybindings[k] = null
      })
      game.keybindings[val] = key[1]
    }
  }

  var config = {
    controls: {},
    textures: {
      texturePath: {
        value: './textures/',
        label: 'texture path',
      },
    },
  }

  var controls = [
    'forward', 'W',
    'backward', 'S',
    'left', 'A',
    'right', 'D',
    'fire', '<mouse 1>',
  ]
  for (var i = 0; i < controls.length; i += 2) {
    config.controls[controls[i]] = {
      value: controls[i+1],
      type: 'bindkey',
      on: bindkey,
    }
  }

  return cettings(config)
}