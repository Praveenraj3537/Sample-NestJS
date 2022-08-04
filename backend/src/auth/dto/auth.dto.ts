import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AuthDto {

  @IsEmail()
  @IsNotEmpty({message: 'Please provide Email'})
  email: string;

  @IsString()
  @IsNotEmpty({message: 'Please input password'})
  password: string;
}

