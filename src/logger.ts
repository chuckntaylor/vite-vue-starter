import log from 'loglevel'
// LOG LEVELS
// 0 trace
// 1 debug
// 2 info
// 3 warn
// 4 error

// Default to info
if (import.meta.env.DEV) {
  log.setLevel(1)
}
else {
  log.setLevel(2)
}

export { log }
