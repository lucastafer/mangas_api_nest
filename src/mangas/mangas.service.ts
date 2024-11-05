import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateMangasDto } from './dto/create-mangas.dto';
import { UpdateMangasDto } from './dto/update-mangas.dto';
import { Repository } from 'typeorm';
import { Mangas } from './entities/mangas.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MangasService {
  constructor(
    @InjectRepository(Mangas)
    private readonly repository: Repository<Mangas>,
  ) {}

  async create(createMangasDto: CreateMangasDto) {
    try {
      const manga = this.repository.create(createMangasDto);
      return await this.repository.save(manga);
    } catch (error) {
      console.error('Error creating manga:', error);
      throw new InternalServerErrorException('Unable to create manga');
    }
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({ id });
  }

  async update(id: string, updateMangasDto: UpdateMangasDto) {
    const manga = await this.repository.findOneBy({ id });
    if (!manga) return null;
    this.repository.merge(manga, updateMangasDto);
    return this.repository.save(manga);
  }

  async remove(id: string) {
    const manga = await this.repository.findOneBy({ id });
    if (!manga) return null;
    return this.repository.remove(manga);
  }
}
