const CustomAPIError = require('./custom-error')
const {StatusCodes} = require('http-status-codes')


class Unauthenticated extends CustomAPIError {
    constructor(message) {
      super(message)
      this.statusCode = StatusCodes.UNAUTHORIZED
      // easier to understand and use with library, instead hard coding 401
    }
}
  
module.exports = Unauthenticated;
  