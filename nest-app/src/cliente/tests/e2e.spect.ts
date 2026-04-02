export * from './domain/cliente.entity';
export * from './application/cliente.usecase-funnel';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { ClienteModule } from '../cliente.module';

describe('ClienteController (E2E)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ClienteModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    
    // IMPORTANTE: Usa los pipes de validación para que los DTOs funcionen [cite: 192]
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/cliente (POST) - Debería crear un cliente exitosamente', () => {
    return request(app.getHttpServer())
      .post('/cliente')
      .send({
        name: 'Geronimo',
        email: 'gero@test.com'
      })
      .expect(201); // Creado
  });

  it('/cliente (POST) - Debería fallar si el email es inválido (Regla de Dominio/DTO)', () => {
    return request(app.getHttpServer())
      .post('/cliente')
      .send({
        name: 'Geronimo',
        email: 'email-invalido' // Esto debería ser atrapado por @IsEmail() en tu DTO [cite: 194]
      })
      .expect(400); // Bad Request
  });
});