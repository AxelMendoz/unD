// ride/dto/create-ride.dto.ts

import { IsString, IsDateString, IsNumber, Min } from 'class-validator';

export class CreateRideDto {
  @IsString()
  origen: string;

  @IsString()
  destino: string;

  @IsDateString()
  fechaHora: string; // Debería ser una fecha en formato de cadena ISO 8601

  @IsNumber()
  @Min(0)
  precio: number;
}
