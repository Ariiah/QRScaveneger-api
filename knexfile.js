module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/qr_scavenger_dev'
  },
  test: {},
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
