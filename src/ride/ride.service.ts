// ride/ride.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRideDto } from './dto/create-ride.dto';
import { UpdateRideDto } from './dto/update-ride.dto';

@Injectable()
export class RideService {
  constructor(private readonly prisma: PrismaService) {}

  // Crear un nuevo viaje
  async create(createRideDto: CreateRideDto) {
    return this.prisma.ride.create({
      data: {
        origen: createRideDto.origen,
        destino: createRideDto.destino,
        fechaHora: new Date(createRideDto.fechaHora),
        precio: createRideDto.precio,
      },
    });
  }

  // Obtener todos los viajes
  async findAll() {
    return this.prisma.ride.findMany();
  }

  // Obtener un viaje por su ID
  async findOne(id: string) {
    return this.prisma.ride.findUnique({
      where: { id: parseInt(id) },
    });
  }

  // Actualizar un viaje
  async update(id: string, updateRideDto: UpdateRideDto) {
    return this.prisma.ride.update({
      where: { id: parseInt(id) },
      data: {
        origen: updateRideDto.origen,
        destino: updateRideDto.destino,
        fechaHora: updateRideDto.fechaHora ? new Date(updateRideDto.fechaHora) : undefined,
        precio: updateRideDto.precio,
      },
    });
  }
}
