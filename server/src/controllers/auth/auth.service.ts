import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { loginData, registerData } from 'src/interfaces/user.interface';
import { User } from 'src/model/user.model';
import { Repository } from 'typeorm';
import * as bcrypt from "bcrypt"

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private User: Repository<User>,
    private jwt: JwtService
  ) { }

  async RegisterLogic(userData: registerData) {
    const { username, email, password } = userData;
    const user = await this.User.findOne({ where: { email } });
    if (user) {
      throw new BadRequestException("This Email Already Exist.")
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)
    await this.User.save({
      username,
      email,
      password: hashedPassword
    })
    return { message: "User Created Succfullt." }
  }

  async LoginLogic(userData: loginData) {
    const { email, password } = userData;
    const user = await this.User.findOne({ where: { email } });
    if (!user) {
      throw new NotFoundException("User Not Found.");
    }
    const isPassMatch = await bcrypt.compare(password, user.password);
    if (!isPassMatch) {
      throw new UnauthorizedException("Invalid Email Or Password.")
    }
    const token = this.jwt.sign({ id: user.id }, { secret: process.env.JWT_SECRET, expiresIn: '1d' });
    return { message: `Welcome ${user.username}`, token }
  }
}
