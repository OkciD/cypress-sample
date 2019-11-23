# cypress-sample
> Тестовый проект, чтобы попробовать тесты на [Cypress](https://www.cypress.io/)

## Команды
* `npm test` &ndash; запускает прогон тестов в консоли
* `npm run cy:open` &ndash; _(на десктопе)_ запускает локально приложение Cypress для прогона тестов (предварительно необходимо выполнить `npm start` в соседнем терминале)
* `npm start` &ndash; запускает тестируемое приложение на `http://localhost:8080`

## Приложение
Суть проста: есть инпут и кнопка, а под ними `<ul>`. По нажатию кнопки, в `<ul>` добавляется `<li>` с текстом из инпута, а инпут очищается

## Структура
```
.
├── app                     # папка тестируемого приложения
│   ├── index.js            # код локального сервера
│   └── static              # статические файлы, отдаваемые сервером
│       ├── index.html
│       └── index.js
├── cypress
│   ├── fixtures            # наборы тестовых данных ???
│   │   └── example.json
│   ├── integration
│   │   ├── examples        # автосгенеренные примеры тестов на Cypress
│   │   │   └── <бла-бла>.spec.js
│   │   └── sample_spec.js  # тесты на приложение
│   ├── plugins
│   │   └── index.js
│   └── support
│       ├── commands.js
│       └── index.js
├── cypress.json            # конфиг Cypress
└── package.json
```
