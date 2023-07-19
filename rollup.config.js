import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/server.ts', // O ponto de entrada do seu código (pode ser ajustado conforme necessário)
  output: {
    file: 'dist/server.js', // O nome do arquivo de saída
    format: 'es', // O formato do bundle, CommonJS é comum para projetos Node.js
  },
  plugins: [typescript()],
};
