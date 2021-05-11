export default (config, env) => {
  config.resolve.modules.push(env.src)
  config.resolve.modules.push(`${env.cwd}/node_modules`)
}