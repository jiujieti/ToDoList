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
  The sessions are stored in a Redis in-memory cache. The cookies stored at the client side will only contain sessionID. Once the browser sends out a HTTP request, the server side will use the sessionID to search if the corresponding session's existence in Redis. But in a practical world of a distributed system, this implementation might introduce issues: let's assume a user signs in through a server where the user's session is stored, but later on the user retrieve the data protected by authentications from another server where his/her session is missing. Then the user might need to sign in again.
