import { Sequelize } from 'sequelize-typescript';
import { Record } from 'src/domain/record';

export const SequelizeConfig = {
  provide: 'SEQUELIZE',
  useFactory: async () => {
    const sequelize = new Sequelize({
      dialect: 'postgres',
      host: String(process.env.DB_HOST || 'db'),
      port: Number(process.env.DB_PORT || 5432),
      username: String(process.env.DB_USER || 'postgres'),
      password: String(process.env.DB_PASSWORD || 'postgres'),
      database: String(process.env.DB_NAME || 'postgres'),
    });
    sequelize.addModels([Record]);
    await sequelize.sync();
    return sequelize;
  },
};
