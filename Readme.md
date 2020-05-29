# GYM ECOMMERCE

This is an REST API created with Express and a PostgreSQL database. REST API displays users who have created accounts, items that are available in the store, and items that were purchased

## Project setup

If you would like to play around with this project on a local database:

1. clone the project

   > git clone git@gitlab.com:2005-javareact/favour/project-0.git

2. download node modules:

   > npm install

3. run the SQL script (data.sql) in your local database

4. Start the express server using:
   > npm run dev

or

> npm start

## Display Users

### Get one user

GET /user/:id

### Get all users

GET /user

### Insert one user

POST /user

Body of request example:

```
{
   "user_id": 7,
   "name": "Becca",
   "email": "hills@gmail.com",
   "password": "92348",
   "phone": "43215678362"
}
```

### Update one user that exists already.

Keep id the same.

Can update every portion or just one portion

PUT /user

Body of request example:

```
{
   "user_id": 1,
   "name": "Sarah",
   "email": "calisthenics@gmail.com",
   "password": "54321",
   "phone": "0987654321"
}
```

## Display Orders

### Get Orders

GET /order

### Get One Order

GET /order/:id

### Insert One Order

POST /order

Body of request:

```
{
   "order_id": 90099,
   "user_id": 3,
   "order_status": "pending",
   "order_date": "2020-05-09T07:00:00.000Z",
   "shipped_date": "2020-05-15T07:00:00.000Z",
   "item_id": 456
}
```

### Update One Order

PUT /order

Keep id the same

user_id refers to the user that purchased the item

Body of request:

```
{
   "order_id": 90099,
   "user_id": 2,
   "order_status": "shipped",
   "order_date": "2020-05-08T07:00:00.000Z",
   "shipped_date": "2020-05-16T07:00:00.000Z",
   "item_id": 268
}
```

### Get Order Items

GET /order-item

### Get One Order Item

GET /order-item/:id

### Insert One Order Item

POST /order-item

Body of request:

```
{
   "item_id": 707,
   "product_id": 204352,
   "quantity": 50,
   "list_price": "$13.00",
   "name": "resistance band",
   "description": "medium strength"
}
```

### Update One Order Item

PUT /order-item

Keep id the same

Can change all fields except id or just one

Body of request:

```
{
   "item_id": 948,
   "product_id": 948523,
   "quantity": 600,
   "list_price": "$35.00",
   "name": "dumbbells",
   "description": "25 pound plates"
}
```

### Get Purchases

GET /purchases

Shows purchases of specific users

### Login Admin

POST /auth/admin-login

Body of request:

```
{"username":"logan",
"password":"loganspassword"
}
```

### Access Admin Content

GET /auth/content

### General Login

POST /auth/login

Body of request:

```
{"username":"sarah",
"password":"sarahspassword"
}
```

### Logout

GET /auth/logout

### Check Session components

GET /auth/check
