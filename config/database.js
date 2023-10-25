module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'db.onfnzyagothbgqfbibkt.supabase.co'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'postgres'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'C61dxJJzXpWujpaD'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
    
    },
  },
});