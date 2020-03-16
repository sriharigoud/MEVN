import HttpException from "./http-exception";

class UserNotFoundException extends HttpException{
    constructor(message){
        super(404, "User not found");
    }
}
export default UserNotFoundException;