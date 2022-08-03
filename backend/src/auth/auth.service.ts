import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  test():string {
     return 'Inside test from auth service';
  }
}
