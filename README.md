# Machine Test
---
### Tech Specification

  - Laravel 8
  - Vue 2 + VueRouter
  - Vue-bootstrap
  - Vuelidate

### Features

  - List of Product
  - Add new Product
  - Edit Product
  - Filter and search for Product

### Installation

to use this project please follow the instrection below

```sh
$ git clone https://github.com/BrahimAZOUGAGH/machine-test.git
$ cd machine-test/
$ composer install
$ cp .env.example .env
```
Update .env and set your database credentials

```sh
$ php artisan migrate
$ npm install
$ npm run dev
```
And finally to start the server so that you can consult the executed project the following command
```sh
$ php artisan serve
```
Verify the deployment by navigating to your server address in your preferred browser.
```sh
127.0.0.1:8000
```

License
----

MIT