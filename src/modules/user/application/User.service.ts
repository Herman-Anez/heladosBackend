import { CreateUserUseCase } from './CreateUser.useCase';

export class UserService {

  constructor(private readonly createUseCase: CreateUserUseCase) {}

 async create(dto: any): Promise<void> {
    return await this.createUseCase.execute(dto);
  }
}

