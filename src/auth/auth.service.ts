import { Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';  // Importar jsonwebtoken
import { RegisterAuthDto } from './dto/register.dto';
import { LoginAuthDto } from './dto/login.dto';  // Importar el DTO de login

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  // Método de registro
  async register(registerAuthDto: RegisterAuthDto) {
    const { email, password, nombre, universidad } = registerAuthDto;

    // Verificar si el usuario ya existe
    const existingUser = await this.prisma.usuario.findUnique({ where: { email } });
    if (existingUser) {
      throw new ConflictException('El correo ya está registrado.');
    }

    // Hashear contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear usuario en la base de datos
    return this.prisma.usuario.create({
      data: {
        nombre,
        email,
        password: hashedPassword,
        universidad,
      },
    });
  }

  // Método de login
  async login(loginAuthDto: LoginAuthDto) {
    const { email, password } = loginAuthDto;

    // Verificar si el usuario existe
    const user = await this.prisma.usuario.findUnique({ where: { email } });
    if (!user) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    // Comparar la contraseña proporcionada con la almacenada
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    // Generar el token JWT
    const payload = { email: user.email, sub: user.id };  // Puedes agregar más información en el payload
    const token = jwt.sign(payload, 'secretKey', { expiresIn: '1h' });  // Usar tu propia clave secreta

    // Retornar el token
    return { access_token: token };
  }
}
