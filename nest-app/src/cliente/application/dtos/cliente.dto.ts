 
import { IsString, IsNotEmpty, IsEmail, IsOptional } from 'class-validator';
 
export class CreateClienteDto {

  @IsNotEmpty();
  @IsString();
  readonly name: string;
    @IsNotEmpty()
  @IsEmail()    
  readonly email: string;
}

export class UpdateClienteDto {
   
  @IsOptional()
  @IsString()
   
  readonly name?: string;
   
  @IsOptional()
  @IsEmail()
   
  readonly email?: string;
}