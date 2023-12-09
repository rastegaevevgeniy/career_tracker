# Используем официальный образ Node.js с Alpine Linux
FROM node:18-alpine as build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы package.json и package-lock.json (если есть)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы в рабочую директорию контейнера
COPY . .

# Выполняем сборку приложения
RUN npm run build

# Настроим финальный контейнер для минимального размера
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем результаты сборки из контейнера сборки
COPY --from=build /app/build /app/result_build

# Команда по умолчанию, выполняемая при запуске контейнера
CMD ["cp", "-r", "result_build", "/app/result_build"]