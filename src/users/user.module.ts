import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [UserController],
  providers: [UsersService, PrismaService],
  exports: [UsersService], // Exporta el servicio para que otros módulos puedan usarlo
})
export class UsersModule {}
