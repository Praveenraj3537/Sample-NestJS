import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    // private jwt: JwtService,
  ) {}

  signup(dto: AuthDto) {
    return {
      message: ' I have signed Up',
    };
  }

  signin() {
    return {
      message: ' I have signed in',
    };
  }
}
