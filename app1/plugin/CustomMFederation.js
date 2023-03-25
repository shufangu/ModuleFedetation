class CustomMFederationPlugin {
  constructor(options) {
    this._options = options;
  }

  apply(compiler) {
    // console.log("=======compilter====", compiler);
    const { _options: options } = this;
    const library = options.library || { type: "var", name: options.name };
    const remoteType = options.remoteType || (options.library ? (options.library.type) : "script");
    if (
      library &&
      !compiler.options.output.enabledLibraryTypes.includes(library.type)
    ) {
      compiler.options.output.enabledLibraryTypes.push(library.type);
    }
    compiler.hooks.afterPlugins.tap("CustomMFederationPlugin", () => {
      if (
        options.exposes &&
        (Array.isArray(options.exposes)
          ? options.exposes.length > 0
          : Object.keys(options.exposes).length > 0)
      ) {
        console.log("哈哈哈哈");
        console.log(" options.exposes:", options.exposes);
        // new ContainerPlugin({
        //   name: options.name,
        //   library,
        //   filename: options.filename,
        //   runtime: options.runtime,
        //   shareScope: options.shareScope,
        //   exposes: options.exposes,
        // }).apply(compiler);
      }
      if (
        options.remotes &&
        (Array.isArray(options.remotes)
          ? options.remotes.length > 0
          : Object.keys(options.remotes).length > 0)
      ) {
        console.log("options.remotes:", options.remotes);
        // new ContainerReferencePlugin({
        //   remoteType,
        //   shareScope: options.shareScope,
        //   remotes: options.remotes,
        // }).apply(compiler);
      }
      if (options.shared) {
        console.log("options.shared:", options.shared);
        // new SharePlugin({
        //   shared: options.shared,
        //   shareScope: options.shareScope,
        // }).apply(compiler);
      }
    });
  }
}

module.exports = CustomMFederationPlugin;
