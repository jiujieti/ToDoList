# To Do List
A web application - to do list

1. View engine: pug
2. Database: mongoDB provided by mLab
3. Session storage: Redis

## Features to be added

1. User login (done)
2. Data persistence of items in the to do list
3. CSS framework may be

## Issues

1. Adding items does not work (POST method not finished)
2. User controller: nested callbacks to promises 

## Concerns and Remarks
### Sessions in cache:
  So far the sessions are stored in a Redis in-memory cache and the cookies stored at the client side will only contain sessionIDs. Once the browser sends out a HTTP request, the server side will use the sessionID to search if the corresponding session exists in Redis. But in practice, this implementation might introduce issues if this web application is deployed in a distributed system: let's assume a user signs in through a server where the user's session is stored, but later on the user retrieves the data protected by authentications from another server where his/her session is missing. Then the user might need to sign in again. 
