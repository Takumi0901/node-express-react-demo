interface Config {
  baseAPIUrl: string
}

const base = {}

function configure(env): Config {
  switch (env) {
    case 'development':
      return {
        ...base,
        baseAPIUrl: 'http://localhost:3000/api/v1'
      }
    case 'production':
      return {
        ...base,
        baseAPIUrl: 'http://localhost:3000/api/v1'
      }
    default:
      return {
        ...base,
        baseAPIUrl: 'http://localhost:3000/api/v1'
      }
  }
}

export default configure(process.env.NODE_ENV)
