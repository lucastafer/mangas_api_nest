import { Module } from '@nestjs/common';
import { MangasService } from './mangas.service';
import { MangasController } from './mangas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mangas } from './entities/mangas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Mangas])],
  controllers: [MangasController],
  providers: [MangasService],
})
export class MangasModule {}

// Configuração padrão, com exceção dos imports onde devemos configurar o TypeORM.
