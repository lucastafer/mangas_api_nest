import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('mangas')
export class Mangas {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  mangaka: string;
  @Column()
  releaseDate: string;
}

// Neste arquivo configuramos as entidades que serão utilizadas no banco de dados.
// A entidade Mangas foi criada com os campos id, name, mangaka e releaseDate.
// O campo id é do tipo string e os demais campos são do tipo string.
// Para cada campo foi utilizado o decorator @Column() para definir que o campo é uma coluna no banco de dados.
// Antes da declaração da classe, adicionamos o decorator @Entity() para definir que a classe é uma entidade com o nome 'mangas'.
