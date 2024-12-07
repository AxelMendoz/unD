// ride/dto/update-ride.dto.ts

import { IsString, IsDateString, IsNumber, Min, IsOptional } from 'class-validator';

export class UpdateRideDto {
  @IsString()
  @IsOptional()
  origen?: string;

  @IsString()
  @IsOptional()
  destino?: string;

  @IsDateString()
  @IsOptional()
  fechaHora?: string;

  @IsNumber()
  @Min(0)
  @IsOptional()
  precio?: number;
}
