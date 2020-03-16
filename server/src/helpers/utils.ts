import * as express from 'express';

export function sendError(response: express.Response, {status, message}){
    response.status(status).json({status, message});
}