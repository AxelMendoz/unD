// ride/ride.module.ts

import { Module } from '@nestjs/common';
import { RideController } from './ride.controller';
import { RideService } from './ride.service';
import { PrismaService } from '../prisma/prisma.service'; // Asegúrate de tener un PrismaService

@Module({
  controllers: [RideController],
  providers: [RideService, PrismaService],
})
export class RideModule {}
