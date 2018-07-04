module.exports = {
  files: {
    javascripts: {
      joinTo: 'app.js'
    }
  },
  paths: {
    // Dependencies and current project directories to watch
    watched: [
      'static', 'css', 'js', 'vendor'
    ],

    // Where to compile files to
    public: './priv/static'
  },

  // Configure your plugins
  plugins: {
    closurecompiler: {
      compilationLevel: 'SIMPLE',
      createSourceMap: true
    }
  },
  modules: {
    autoRequire: {
      "js/app.js": ["js/app"]
    }
  },
  npm: {
    enabled: true
  }
};