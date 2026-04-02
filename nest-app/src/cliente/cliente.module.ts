import { Module } from '@nestjs/common';
import { ClienteUseCases } from './application/cliente.usecase-funnel';
import { ClienteController } from './infrastructure/presentation/cliente.controller';
import { CreateClienteUseCase } from './application/usecases/create-cliente.usecase';
import { GetClienteUseCase } from './application/usecases/get-cliente.usecase';
import { UpdateClienteUseCase } from './application/usecases/update-cliente.usecase';
import { DeleteClienteUseCase } from './application/usecases/delete-cliente.usecase';
import { InMemoryClienteRepository } from './infrastructure/persistence/in-memory/cliente-repository';

@Module({
  controllers: [ClienteController],
  providers: [
    // El Funnel/Servicio
    ClienteUseCases,
    
    // Los Casos de Uso individuales
    CreateClienteUseCase,
    GetClienteUseCase,
    UpdateClienteUseCase,
    DeleteClienteUseCase,

    // Inyección del Repositorio (Usando la implementación en memoria por ahora)
    {
      provide: 'IClienteRepository', // Token para la inversión de dependencia
      useClass: InMemoryClienteRepository,
    },
  ],
  exports: [ClienteUseCases], // Por si otro módulo necesita usar este negocio
})
export class ClienteModule {}