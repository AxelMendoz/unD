import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcryptjs'; // Importa bcryptjs para encriptar la contraseña

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  // Crear un nuevo usuario
  async create(createUserDto: CreateUserDto) {
    const { email, password, nombre, universidad } = createUserDto;

    // Verifica si el usuario ya existe
    const existingUser = await this.prisma.usuario.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new Error('El correo ya está registrado');
    }

    // Encriptar la contraseña antes de guardar
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear usuario
    return this.prisma.usuario.create({
      data: {
        email,
        password: hashedPassword,  // Guarda la contraseña encriptada
        nombre,
        universidad,
      },
    });
  }

  // Obtener todos los usuarios
  async findAll() {
    return this.prisma.usuario.findMany();
  }

  // Obtener un usuario por ID
  async findOne(id: number) {
    return this.prisma.usuario.findUnique({
      where: { id },
    });
  }

  // Obtener un usuario por correo electrónico
  async findByEmail(email: string) {
    return this.prisma.usuario.findUnique({
      where: { email },
    });
  }

  // Actualizar un usuario por ID
  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.usuario.update({
      where: { id },
      data: updateUserDto,
    });
  }

  // Eliminar un usuario por ID
  async remove(id: number) {
    return this.prisma.usuario.delete({
      where: { id },
    });
  }
}
