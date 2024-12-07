import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { RideModule } from './ride/ride.module';
@Module({
  imports: [
    PrismaModule,
    UsersModule,
    AuthModule, // Importa el módulo de autenticación
    RideModule
  ],
})
export class AppModule {}
