// ride/ride.controller.ts

import { Controller, Post, Body, Get, Param, Put } from '@nestjs/common';
import { RideService } from './ride.service';
import { CreateRideDto } from './dto/create-ride.dto';
import { UpdateRideDto } from './dto/update-ride.dto';

@Controller('rides')
export class RideController {
  constructor(private readonly rideService: RideService) {}

  // Ruta para crear un nuevo viaje
  @Post()
  async create(@Body() createRideDto: CreateRideDto) {
    return this.rideService.create(createRideDto);
  }

  // Ruta para obtener todos los viajes
  @Get()
  async findAll() {
    return this.rideService.findAll();
  }

  // Ruta para obtener un viaje por su ID
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.rideService.findOne(id);
  }

  // Ruta para actualizar un viaje
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateRideDto: UpdateRideDto) {
    return this.rideService.update(id, updateRideDto);
  }
}
