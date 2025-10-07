# Node.js + TS boilerplate with jest and supertest

## Описание

Базовый boilerplate с настроенными тестами `jest` и `supertest` для разработки приложений на `node.js` с `TypeScript`<br>
Данный boilerplate сделан на основе `basic-nodejs-ts-boilerplate`

## Настройка тестов в существующем проекте (гайд)

### Jest

1. Создать папку `__tests__` в корне проекта
2. `npm install --save-dev jest ts-jest @types/jest @jest/globals`
3. Настроить конфиг jest (можно просто скопировать из этого проекта)
4. Добавить `"test": "jest"` как скрипт в package.json + переписать скрипты `format` и `format:fix`

```
"format": "prettier --check ./src ./__tests__",
"format:fix": "prettier --write ./src ./__tests__",
```

5. Переписать `include` в `tsconfig.json`:

```
"include": ["./src/**/*.ts", "./src/**/*.mts", "./__tests__/**/*.ts"],
```

6. Переписать `files` и `globals` в `eslint.config.mjs`:

```
files: [
  './src/**/*.ts',
  './src/**/*.mts',
  './src/**/*.js',
  './src/**/*.mjs',
  './__tests__/**/*.test.ts',
],
...
languageOptions: {
  ...
  globals: { ...globals.node, ...globals.jest },
  ...
}
```

7. Переписать `ignore` в `nodemon.json`:

```
"ignore": ["src/**/*.test.ts", "__tests__", "node_modules"],
```

8. После данных настроек желательно перезагрузить проект или vscode, т.к. `ts` или `eslint` может выдавать ошибки

### Supertest

1. `npm install --save-dev supertest @types/supertest`

\*Тесты supertest запускаются запускаются той же командой `npm run test`, так как они являются частью тестов Jest.<br>
Supertest просто используется внутри тестовых файлов для проверки API-эндпоинтов, и Jest выполняет их как любые другие тесты.

---

Пример структуры `__tests__` (папка находится в корне проекта)

```
корень проекта/
├── __tests__/
│   ├── unit/
│   │   ├── controllers/
│   │   │   ├── userController.test.ts
│   │   │   └── postController.test.ts
│   │   └── services/
│   │       ├── userService.test.ts
│   │       └── postService.test.ts
│   ├── integration/
│   │   ├── api/
│   │   │   ├── userRoutes.test.ts
│   │   │   └── postRoutes.test.ts
│   └── setup.ts  # Файл для глобальной настройки тестов (если нужно)
```
