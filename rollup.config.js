import babel from "@rollup/plugin-babel";
import nodeResolve from "@rollup/plugin-node-resolve";
import css from "rollup-plugin-import-css";
import withSolid from "rollup-preset-solid";

// export default {
//   input: "./src/index.tsx",
//   output: [
//     {
//       file: "dist/index.js",
//       format: "es"
//     }
//   ],
//   external: ["solid-js", "solid-js/web", "solid-js/store"],
//   plugins: [
//     nodeResolve({
//       extensions: [".js", ".ts", ".tsx"]
//     }),
//     babel({
//       extensions: [".js", ".ts", ".tsx"],
//       babelHelpers: "bundled",
//       presets: ["solid", "@babel/preset-typescript"],
//       exclude: "node_modules/**"
//     }),css() 
//   ]
// };

export default withSolid({plugins:[css({output:"styles.css"})],printInstructions:true, external: ["solid-js", "solid-js/web", "solid-js/store"],});