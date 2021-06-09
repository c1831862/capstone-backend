
# Sigap Blood Donor Backend

For our Capstone project, we decide to 
implement Cloud Computing by deploying
our backend-end service into App Engine and
using Cloud SQL as our database in the cloud.
We choose MySql database in Cloud SQL as our
database.

We are using Node.js, Express, and Sequelize to serve 
as back-end service and providing REST API for our front-end.

Our android app serves as a front-end service which later 
we integrate to the cloud using REST API that we have created.

This repository also contain configuration file needed so that our 
service deployed to App Engine. 

There are two branch in this repository master and development, currently our progress
is saved inside the development branch and not yet finalized into master branch because 
there is still testing and integration that we need to do.

## API List 
Our App Engine Service address:
https://animated-lyceum-312604.et.r.appspot.com/


#### Get all users

```http
  GET /user/read/
```
#### Get user by their id
```http
  GET /user/read/:id
```
#### Create new user
```http
  POST /user/signup
```
#### User login
```http
  POST /user/login
```
#### Get history for all user
```http
  GET /history
```
#### Create new history for a user
```http
  POST /histor
```
#### Get user history by id
```http
  Get /user/read/:id
```
#### Login for admin
```http
  POST /admin/login
```
#### Creating new admin
```http
  POST /admin/signup
```
#### Get admin by id
```http
  GET /admin/read/:id
```
#### Get all admin 
```http
  GET /admin/read/
```





  