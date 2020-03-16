import { NextFunction, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import AuthenticationTokenMissingException from '../exceptions/AuthenticationTokenMissingException';
import WrongAuthenticationTokenException from '../exceptions/WrongAuthenticationTokenException';
import {DataStoredInToken} from '../interfaces/tokenData.interface';
import RequestWithUser from '../interfaces/requestWithUser.interface';
import userModel from '../users/user.model';
import { sendError } from '../helpers/utils';
 

async function authMiddleware(request: RequestWithUser, response: Response, next: NextFunction) {
  const cookies = request.headers.authorization;
  if (cookies && request.headers.authorization) {
    const secret = process.env.JWT_SECRET;
    try {
      const verificationResponse = jwt.verify(request.headers.authorization, secret) as DataStoredInToken;
      const id = verificationResponse._id;
      const user = await userModel.findById(id);
      if (user) {
        request.user = user;
        next();
      } else {
        sendError(response, new WrongAuthenticationTokenException());
      }
    } catch (error) {
      sendError(response, new WrongAuthenticationTokenException());
    }
  } else {
    sendError(response, new AuthenticationTokenMissingException());
  }
}
 
export default authMiddleware;