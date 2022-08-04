import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // private readonly logger = new Logger(
  //   AuthController.name,
  // );
  @Post('signup')
  signup(@Body() authDTO: AuthDto) {
    /**
     * Below way of access the data from the body will execute but it will not take of validation
     */
    // signup(@Body('email') email:string, @Body('password') password:string) {
    // console.log(email, password);
    

   console.log({
    data: authDTO
  });
   
    return this.authService.signup(authDTO);
  }

  @Post('signin')
  signin() {
    return this.authService.signin();
  }
}
