module.exports = ({ env }) => ({
  host: env('HOST', process.env.HOST),
  port: env.int('PORT', process.env.PORT),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'd09a9b34c99b8ff50b72e8f74b027f30'),
    },
  },
});
