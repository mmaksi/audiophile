# Audiophile

# Front-End
Next.js, React, Styled Components

# Back-End
Microservices architecture using Express.js

## Start Next.js Development Server:
1. `cd client`
2. `npm install`
3. `npm run dev`

## Start backend microservices:
1. `cd auth`
2. `npm run start`

# Documentation

## Auth Service
The `auth` service uses JWT and cookies for authentication. The reason is because we are using a server-side rendered React app (Next.js), which makes sending the JWT token in the `body` or `headers` impossible in the initial request. We need to check user authentication status on the initial request to know what orders we want to show for the client, so the only option to authenticate initial requests is using `cookies`.

### Auth service architecture strategies:
There are 2 ways to address the architecture of the Auth service:
1. The authentication logic is implemented in each microservice to implement the idea of creating independent services.
2. The authentication logic is a centralized service and every other service makes a direct dependency on it by making synchronous requests.

Audiophile implements the first strategy where every service has access to its own authentication logic.

### Cookie Encryption
JWT token inside the cookie is not encrypted using the `cookie-session` package because we want our authentication mechanism easily understood by different services which can be implemented in different languages that don't support the encryption algorithm inside `cookie-session` package.

### Endpoints:
- POST `api/users/signup`
  - body: `{ email: string, password: string }`
    - email: must have email structure
    - password: must be between 4 and 8 characters long
 
- POST `api/users/signin`

- POST `api/users/signout`

