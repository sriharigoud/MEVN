import * as express from 'express'
import userModel from './user.model';
import postModel from '../posts/posts.model';
import authMiddleware from '../middleware/auth.middleware';
import RequestWithUser from '../interfaces/requestWithUser.interface';
import NotAuthorizedException from '../exceptions/AuthenticationTokenMissingException';
import UserNotFoundException from '../exceptions/UserNotFoundException';
import { sendError } from '../helpers/utils';

class UserController {
    public path = "/users";
    public user = userModel;
    public post = postModel;
    public router = express.Router();
    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get(`${this.path}/:id/posts`, authMiddleware, this.getUserPosts.bind(this));
        this.router.get(`${this.path}`, authMiddleware, this.getUserById.bind(this));
    }

    async getUserPosts(request: RequestWithUser, response: express.Response, next: express.NextFunction) {
        const userId = request.params.id;
        if (userId === request.user._id.toString()) {
            const posts = await this.post.find({ authors: userId });
            response.send(posts);
        }
        sendError(response, new NotAuthorizedException());
    }

    async getUserById(request: RequestWithUser, response: express.Response, next: express.NextFunction) {
        const id = request.params.id;
        const userQuery = this.user.findById(id);
        if (request.query.withPosts === 'true') {
            userQuery.populate('posts').exec();
        }
        const user = await userQuery;
        if (user) {
            response.send(user);
        } else {
            sendError(response, new UserNotFoundException(id));
        }
    }
}

export default UserController