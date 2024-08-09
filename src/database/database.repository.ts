import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        //host: 'host.docker.internal',
        host: 'mysql',
        //host: '172.17.0.2',
        port: 3306,
        username: 'khzhao',
        password: 'password!',
        database: 'testdb',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];