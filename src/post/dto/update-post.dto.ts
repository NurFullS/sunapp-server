import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdatePostDto {
  @IsString()
  authorId!: string;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @IsBoolean()
  published?: boolean;
}