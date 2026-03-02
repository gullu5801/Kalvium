const path = require("path");
module.exports = {
  // 1. Where do we start?
  entry: "./src/index.js",
  
  // 2. Where should the "finished" file go?
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  
  // 3. How to handle different file types? (The Loaders)
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,      // If you see a .js or .jsx file...
        exclude: /node_modules/,  // ...but not in the library folder...
        use: {
          loader: "babel-loader", // ...run it through Babel first!
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // Handles CSS files
      }
    ],
  },
};


// (function App() {
//   return <h1>Hello Students</h1>;
// })()

// React.createElement("h1","null","Hello Students");
