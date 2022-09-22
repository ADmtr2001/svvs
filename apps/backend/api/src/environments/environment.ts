export const environment = {
  production: false,
  connection: {
    type: 'postgres' as 'aurora-mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: 'postgres',
    password: '1234',
    database: process.env.DB_NAME,
    dropSchema: false,
    synchronize: true,
    logging: true,
    entities: [
      'dist/apps/backend/api/src/**/*.entity{.ts, .js}'
    ],
    migrations: [
      'dist/apps/backend/api/migrations/*{.ts, .js}'
    ],
    cli: {
      'migrationsDir': 'db/migrations'
    }
  }
};
