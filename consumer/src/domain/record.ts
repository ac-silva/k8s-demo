import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Record extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ type: 'jsonb' })
  data: string;
}
