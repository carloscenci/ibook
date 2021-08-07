const middleware = {}

middleware['auth'] = require('../middleware/auth.ts')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['guest'] = require('../middleware/guest.ts')
middleware['guest'] = middleware['guest'].default || middleware['guest']

export default middleware
