const CustomAPIError = require('./custom-error')
const {StatusCodes} = require('http-status-codes')

class BadRequest extends CustomAPIError {
    constructor(message) {
      super(message)
      this.statusCode = StatusCodes.BAD_REQUEST 
      // easier to understand and use with library, instead hard coding 400
    }
}
  
module.exports = BadRequest
  