// strapi-api/config/database.js
module.exports = ({env}) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'shortcuts'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'postgres'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
    },
    debug: true,
    pool: {
      min: 0,
      max: 10,
      idleTimeoutMillis: 30000000,
      createTimeoutMillis: 30000000,
      acquireTimeoutMillis: 30000000,
      propagateCreateError: false,
    },
    useNullAsDefault: true,
  },
});
