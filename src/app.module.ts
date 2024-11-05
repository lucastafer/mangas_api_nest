import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MangasModule } from './mangas/mangas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'YOUR_USERNAME',
      password: 'YOUR_PASSWORD',
      database: 'mangas_db',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true,
    }),
    MangasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// Configuração padrão, com exceção dos imports, onde adicionamos o TypeOrmModule.forRoot() para configuração do TypeORM.
// Configurei também o Postgres, banco escolhido para o estudo.
