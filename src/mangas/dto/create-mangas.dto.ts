import { IsDateString, IsString } from 'class-validator';

export class CreateMangasDto {
  @IsString()
  name: string;
  @IsString()
  mangaka: string;
  @IsDateString()
  releaseDate: string;
}

// Neste arquivo descreve-se o DTO de mangas.
// Validators automáticos para String e Date
