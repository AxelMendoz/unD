import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from '../prisma/prisma.service';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './filters/http-exeption-filters';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    PrismaService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter, // Registra el filtro
    },
  ],
})
export class AuthModule {}
