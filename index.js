const envPaths = require('env-paths')
const RAF = require('random-access-file')
const path = require('path')

module.exports = function RAA (application) {
  if (!application) throw new Error('Must specify application name for storage')

  const paths = envPaths(application)

  const dir = paths.data

  return (file, ...options) => new RAF(path.join(dir, file), ...options)
}
