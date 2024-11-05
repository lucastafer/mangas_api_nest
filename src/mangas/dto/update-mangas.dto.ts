import { PartialType } from '@nestjs/mapped-types';
import { CreateMangasDto } from './create-mangas.dto';

export class UpdateMangasDto extends PartialType(CreateMangasDto) {}

// Neste arquivo descreve-se o DTO de UPDATE de mangas.
// Estende o DTO De criação.
