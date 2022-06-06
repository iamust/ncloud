const { Cloud } = require('./lib/cloud')

module.exports = function mdcloud({ appId, appKey, masterKey, prefix, debug } = {}) {
  return new Cloud({
    appId: appId || process.env.LC_APP_ID,
    appKey: appKey || process.env.LC_APP_KEY,
    masterKey: masterKey || process.env.LC_MASTER_KEY,
    prefix,
    debug
  })
}
