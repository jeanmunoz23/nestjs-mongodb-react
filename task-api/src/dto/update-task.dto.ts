// el signo de pregunta es para decirle que puede que venga o no
import { IsString, IsBoolean, IsOptional } from 'class-validator';
export class UpdateTaskDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsBoolean()
  @IsOptional()
  done?: boolean;
}
