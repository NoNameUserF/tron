import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';


import {libInjectCss} from "vite-plugin-lib-inject-css";

export default defineConfig({
  plugins: [react(),
    libInjectCss(),
  ],
  build: {
    lib: {
      entry: './lib/index.jsx', // Основной файл вашей библиотеки
      name: 'gsu-ui-core', // Имя вашей библиотеки, доступное как глобальная переменная
      formats: ['es', 'umd'], // Форматы, в которые вы хотите собрать вашу библиотеку
      fileName: (format) => `gsu-ui-core.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-router', 'react-router-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-router': 'ReactRouter',
          'react-router-dom': 'ReactRouterDOM'
        }
      }
    },

    resolve: {
      alias: {
        react: path.resolve('./node_modules/react'),
        'react-dom': path.resolve('./node_modules/react-dom')
      }
    }

  },


})