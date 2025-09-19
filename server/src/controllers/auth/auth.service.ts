import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/model/user.model';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private User: Repository<User>,
    private jwt: JwtService
  ) { }

  LoginLogic() {
    return {message : "Hello From Login"}
  }

  RegisterLogic() {
    return {message : "Hello From Register"}
  }
}
