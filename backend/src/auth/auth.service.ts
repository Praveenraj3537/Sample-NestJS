import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    
    signup() {
        return {
            message: ' I have signed Up',
        };
    }
    
    signin() {
        return{
            message: ' I have signed in'
        }
    }
}
