import { Injectable } from '@nestjs/common';
import { PrismadbService } from 'src/prismadb/prismadb.service';

@Injectable()
export class AuthService {
    constructor(private prismaService: PrismadbService){}
    
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
