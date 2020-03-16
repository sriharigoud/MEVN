import HttpException from './http-exception';

class WrongAuthenticationTokenException extends HttpException {
  constructor() {
    super(401, 'Wrong authentication provided');
  }
}

export default WrongAuthenticationTokenException;