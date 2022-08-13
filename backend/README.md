# Favorite Stocks Watcher Backend

A Django backend API created for favorite stocks application.

## API Reference

#### Create a new user

```http
  POST /api/user
```

| Parameter  | Type     | Description                           |
| :--------- | :------- | :------------------------------------ |
| `name`     | `string` | **Required**. Your name               |
| `email`    | `string` | **Required**. Your email              |
| `password` | `string` | **Required**. Your password of choice |

#### Authenticate user/get auth token

```http
  POST /api/user/token
```

| Parameter  | Type     | Description                 |
| :--------- | :------- | :-------------------------- |
| `email`    | `string` | **Required**. Your email    |
| `password` | `string` | **Required**. Your password |

#### Add new stock

```http
  POST /api/stock
```

Header -> Authorization: Token <your_token>

| Parameter      | Type     | Description                       |
| :------------- | :------- | :-------------------------------- |
| `stock_symbol` | `string` | **Required**. Your stock ticker   |
| `company_name` | `string` | **Optional**. Name of the company |

#### User profile/details

```http
  GET /api/user/me
```

Header -> Authorization: Token <your_token>

#### List user stocks

```http
  GET /api/stock
```

Header -> Authorization: Token <your_token>

#### Stock quote

```http
  GET /api/stock/quote/<str:stock_symbol>
```

Header -> Authorization: Token <your_token>

#### Company profile

```http
  GET /api/stock/company-profile/<str:stock_symbol>
```

Header -> Authorization: Token <your_token>

#### Delete user added stock detail

```http
  DELETE /api/stock/<str:pk>
```

Header -> Authorization: Token <your_token>
