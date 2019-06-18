<h1 align="center">Welcome to TestTask_Node.JS_server_for_CinemaList 👋</h1>
<p>
  <img src="https://img.shields.io/badge/version-0.7-blue.svg?cacheSeconds=2592000" />
</p>

## Архитектура

Серверная часть приложения: 
* в качестве сервера - Exspress.JS
* база данных MongoDB

Весь сервер находится в директории server/
* serverjs - модуль с конфигурацией сервера и подключением к БД
* /routes - директория маршрутизации
* routes.js - модуль содержащий логику end-point-от сервера
* fileRead - модуль отвечающий за обработку данных полученых из файла  

Фронтенд:
* ReactJS
* react-bootstrap
* Redux

Фронтенд размещен в каталоге src/
* index.js - файл инициализирующий React приложение, запускает <Render/> и инициализирует store Redux
* App.js - основная компонента SWA приложения
* components/ - директива с компонентами приложения
* actions - директива с action для обмена обращения UI к BLL
* filmAPI - модуль, экспортирующий класс, с actions для связи с сервером
* ../reducers - директива к которой лежит reducer Redux, который изменяет состояния store в зависимости от action
```sh
Примечание. В приложении, для доступа к значением <input/> используются ссылки! Тоесть приложение имеет не связанный с store данные. 
Что есть плохим тоном, но вполне уместно, учитывая нацеленость данного приложения, болеее на серверную часть
```
Тесты:
* Mocha, Chai, chai-http
* App.test.js - файл с тестами REST API 



## REST API
```sh

## Получение списка всех фильмов из базы данных: 
{url:"http://localhost:3001/get", method:"GET", Content-Type: "application/json"}

## Сортировка списка по алфавиту: url:"http://localhost:3001/sort" method:"GET"

##Удаление елемента: url:"http://localhost:3001/delete/:id" method="DELETE"

##Добавления елемента в базу данных: 
url:"http://localhost:3001/create" method:"POST"  Content-Type:"application/x-www-form-urlencoded" data:"Title=value&ReleseYears=value&Format=value&Stars=[value]"

##Поиск елемента в списке: url:"http://localhost:3001/find" method:"POST" data="(Title_or_Stars)=value"

##Загрузка списка из файла: url:"http://localhost:3001/withFile" method:"POST" data=FILE;
```



## Install

```sh
npm start
```

## Usage

```sh
npm run start
```

## Run tests

```sh
npm test
```

## Author

👤 **OlehMell**

* Github: [@mell-old/FilmCatalog](https://github.com/mell-old/FilmCatalog)  


