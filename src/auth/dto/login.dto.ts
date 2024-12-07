// src/auth/dto/login-auth.dto.ts
import { IsString, IsEmail, MinLength } from 'class-validator';

export class LoginAuthDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6) // Asegúrate de que la contraseña tenga una longitud mínima (si es necesario)
  password: string;
}
