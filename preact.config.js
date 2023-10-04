import path from 'path';

export default function (config, env) {
  config.resolve.modules = [ path.resolve(__dirname), 'node_modules' ];

  // production env setup
  if (env.production) {
    config.output.publicPath = '';
  }
}
