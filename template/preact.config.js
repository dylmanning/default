export default (config, env) => {
  config.resolve.modules.push(env.src)
  config.resolve.modules.push(`${env.cwd}/node_modules`)

  config.resolve.alias = {
    app: path.resolve(__dirname, 'src/app'),
    store: path.resolve(__dirname, 'src/store'),
    services: path.resolve(__dirname, 'src/services'),
    static: path.resolve(__dirname, 'src/static'),
    assets: path.resolve(__dirname, 'src/assets'),
    routes: path.resolve(__dirname, 'src/routes'),
    components: path.resolve(__dirname, 'src/components'),
    ...config.resolve.alias
  }

  if (env.isProd) {
    config.devtool = false
    config.output.filename = "[hash:11].js"
    config.output.chunkFilename = "chunk.[chunkhash:5].js"
  }
}