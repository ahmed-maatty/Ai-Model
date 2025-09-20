import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { registerData, loginData } from 'src/interfaces/user.interface';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }
  @Post('register')
  Register(@Body() userData: registerData) {
    return this.authService.RegisterLogic(userData)
  }

  @Post('login')
  Login(@Body() userData: loginData) {
    return this.authService.LoginLogic(userData)
  }
}
