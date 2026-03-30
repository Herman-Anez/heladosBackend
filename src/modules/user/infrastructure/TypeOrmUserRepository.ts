import { IUserRepository } from '../domain/UserEntity';
import { UserEntity } from '../domain/UserEntity';
import { UserIdVo } from '../domain/value-objects/UserIdVo';

export class TypeOrmUserRepository implements IUserRepository {
  findAll(): Promise<UserEntity[]> {
    throw new Error('Method not implemented.');
  }
  delete(id: UserIdVo): Promise<void> {
    throw new Error('Method not implemented.');
  }
  private tableName = 'users';

  async save(entity: UserEntity): Promise<void> {
    console.log(`Guardando en tabla ${this.tableName}`);
  }

  findById(id: UserIdVo): Promise< UserEntity | null> {
    throw new Error('Method not implemented.');
  }
}