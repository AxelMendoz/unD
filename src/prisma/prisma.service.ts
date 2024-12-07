// src/prisma/prisma.service.ts
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  user: any;
  
  // Se ejecuta cuando el módulo se inicializa
  async onModuleInit() {
    await this.$connect(); // Conecta Prisma con la base de datos
    console.log('Prisma conectado a la base de datos.');
  }

  // Se ejecuta cuando el módulo se destruye
  async onModuleDestroy() {
    await this.$disconnect(); // Cierra la conexión de Prisma
    console.log('Prisma desconectado de la base de datos.');
  }
}
