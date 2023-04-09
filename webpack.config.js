module.exports = {
  output: {
    filename: "[name].pack.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["env", "react"],
          plugins: ["transform-object-rest-spread"]
        }
      }
    ]
  },
  entry: {
    index: "./index.js"
  }
};
