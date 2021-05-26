export default (config, env) => {
  //absolute paths
  config.resolve.modules.push(env.src)
  config.resolve.modules.push(`${env.cwd}/node_modules`)

  //disable sourcemaps
  if (env.isProd) {
    config.devtool = false;
  }
}