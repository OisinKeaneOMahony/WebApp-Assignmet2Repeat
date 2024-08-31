# Assignment 2 - Web API.

Name: Oisin Keane-O'Mahony

## Features.

[A bullet-point list of the ADDITIONAL features/endpoints you have implemented in the API **THAT WERE NOT IN THE LABS** ]. 

 + Feature 1 - Actor Details with API Route 

 + Feature 2 - Tv Shows added 

## Installation Requirements

Describe what needs to be on the machine to run the API (Node v?, NPM, MongoDB instance, any other 3rd party software not in the package.json). 

getting/installing the software:

```bat
git clone https://github.com/OisinKeaneOMahony/WebApp-Assignmet2Repeat.git
```

install required npm components to the app
```bat
cd .\movies-api\
npm install
cd .\reactApp\
npm install
```
ensure mongoDB is installed and running with 
```bat
mongod -dbpath db
```

## API Configuration
Describe any configuration that needs to take place before running the API. For example, creating an ``.env`` and what variables to put in it. Give an example of how this might be structured/done.
**REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB,** just placeholders as indicated below:

```bat
NODEENV=development
PORT=8080
HOST=
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
```


## API Design
Give an overview of your web API design, perhaps similar to the following: 

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A |
| /api/movies/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie | N/A | N/A |  
| /tv/{tv_id} | Get TV Details | N/A | N/A | N/A |
| /person/{person_id} | get Actor details | N/A | N/A | N/A | 
| /person/popular | Get A list of popular actors | N/A | N/A | N/A |
| /movie/upcoming | Get Upcoming Movies | N/A | N/A | N/A |
| /movie/trending | Get Popular movies | N/A | N/A | N/A | 
| /person/${id}/images | get Actor images | N/A | N/A | N/A |
| /tv/popular | get popular tv shows | N/A | N/A | N/A |   
| /tv/${id}/images | gets the images for the tv shows | N/A | N/A | N/A |
| /tv/${id}/reviews | Get all reviews for tv shows | N/A | N/A | N/A |
| /genre/tv/list | Gets Genres for a tv show | N/A | N/A | N/A |
| /api/users | Gets users | Login | N/A | N/A |
| /api/users/{userid} | Gets single user | N/A | N/A | N/A |
| /api/users?action=register | N/A | Adds a new user | N/A | N/A |  
| ... | ... | ... | ... | ...

If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).


## Security and Authentication
Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected. **REMEMBER: DON'T PUT YOUR OWN

Json Web Tokens are used to authenticate users.

All routes in the index.js file of the src folder are private aside from the sign up and login routes.

## Integrating with React App

~~~Javascript

export const getMovies = async () => {
  const response = await  fetch(
    'http://localhost:8080/api/movies', {
      headers: {
        'Authorization': window.localStorage.getItem('token')
       }
    }
  )
  return response.json()
};

export const login = async (username, password) => {
  const response = await fetch('http://localhost:8080/api/users', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ username: username, password: password })
  });
  return response.json();
};

export const signup = async (username, password) => {
  const response = await fetch('http://localhost:8080/api/users?action=register', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ username: username, password: password })
  });
  return response.json();
};
~~~