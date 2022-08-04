import {
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() dataValues)
   {

    console.log({
      data: dataValues
    });
    
    // console.log({
    //   email,
    //   typeOfEmail: typeof email,
    //   pass,
    //   typeOfPassword: typeof pass,
      
    // });

    // console.log({mail: dto.email});
    // console.log(dto.password);

    // console.log({

    //     email: dto.email,
    //     pass: dto.password
    // }
    // );
    return this.authService.signup();
  }

  @Post('signin')
  signin() {
    return this.authService.signin();
  }
}
