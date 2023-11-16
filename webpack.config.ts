import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

// Типизируем переменные окружения
// Юнион тип Mode
  type Mode = 'production' | 'development';
// Переменная типизации окружения
  interface EnvVariables {
    // Мод для сборки
    mode: Mode;
    // Порт для LiveServer
    port: number;
  }



export default (env: EnvVariables) => {
  // Флаг для запуска сервера тлько для разработки
  const isDev = env.mode === 'development'
  // Конфигурация 
  const config: webpack.Configuration = {
        // Переменные окружения для создания dev and prod  сборок
        mode: env.mode ?? 'development',
        // Входная точка сборки
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        // Выходная точка сборки
        output: {
          filename: '[name].js',
          path: path.resolve(__dirname, 'build'),
          clean: true,
        },
        // Сервер для разработки
        devtool: isDev && 'inline-source-map',
        devServer: isDev ? {
          port: env.port ?? 5000,
          open: true,
        } : undefined,
        // Плагины для работы с файлами
        plugins: [
          // HTML плагин с указанием адреса файла
          new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') })
        ],
        // Модули 
        module: {
          // TypeScript настройки
          rules: [
            // Css лоадер
            {
              test: /\.css$/i,
              use: ["style-loader", "css-loader"],
            },
            // TypeScript лоадер
            {
              // Обрабатываемые файлы
              test: /\.tsx?$/,
              // Используемый лоадер
              use: 'ts-loader',
              // Необрабатыываемые файлы (исключения)
              exclude: /node_modules/,
            },
          ],
        },
        resolve: {
          // Массив расширений импользуемых файлов
          extensions: ['.tsx', '.ts', '.js'],
        },
    };
    return config;
};	