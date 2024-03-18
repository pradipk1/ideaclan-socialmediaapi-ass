
## About this app

* This is a social media api node.js application. In this application, the REST APIs are created to register a new user, login the registered user and get logged in user details.

* We have used express, apollo-server-express, graphql in this project.

* Express is used to create the REST APIs.
* apollo-server-express and graphql is used to start graphql server and integrate the GraphQl to this application.

## How to setup in your local system?

Follow the given steps below one by one to setup this application into your local system. I am assuming that node.js is already installed in your system if not then first install node.js in your system.

1. Create a new folder anywhere in your drive and open the created folder in vs code editor.

2. Open new terminal and clone the repo using command "git clone https://github.com/pradipk1/ideaclan-socialmediaapi-ass.git".

3. Open an integrated terminal for the cloned repo ie for ideaclan-socialmediaapi-ass folder.
4. Run the command "npm i express dotenv cors graphql mongoose apollo-server-express jsonwebtoken" in the integrated terminal ti install some dependencies.

5. Create a ".env" file inside ideaclan-socialmediaapi-ass folder.
6. Add port number on which you want to run the application like "PORT=3035". Just give the key name as "PORT" only.
7. We have used jwt token based authentication so add your "JWT_SECRET_KEY" in the ".env" file like "JWT_SECRET_KEY='your_secret_key'". Replace "your_secret_key" with your desired value but don't change the key name as it is "JWT_SECRET_KEY".

8. All the setup is completed. To run the application hit the command "node index.js". After running the application you would see a message like "Server listening to http requests on http://localhost:3035" in the terminal. The port number ie 3035 may be different in your case.

9. To see the output of the application open browser and enter "http://localhost:3035" in the search bar and you would see like "Hello from Express!" on the browser.


## API Endpoints:

### Base URL :
    http://localhost:3035

### /auth/register

* This endpoint is used to register a new user using "POST" method. It needs name, email and password to complete the registration process.

### /auth/login

* This endpoint is used to login a registered user using "POST" method. It needs registered email and password. It gives a token for authentication.

### /auth/getLoggedInUser

* This endpoint is used to get logged in user details using "GET" method. It needs token provided during the login of user.


### /graphql

* We have integrated GraphQl api to query all the posts created and also to create a new post.

* If we open this endpoint then we can see the GraphQl interface where we can write query to get all the posts and to create a new post.

* Below is mentioned the query to get all the posts:

```
query {
  getAllPosts {
    title
    content
  }
}
```
* On right hand side you would see the response for the above query.

* Below is mentioned to create a new post:
```
mutation {
  createPost(post: {
    title: "This is 1st graphql"
    content: "This is 1st graphql post"
    authorId: "65f67ebb248818727b0f1a10"
  }) {
    title
    content
  }
}
```
* But to create a new post you need to provide the token provided during login for authentication.

* To provide the token go to graphql interface where we write all the queries. You can see a "Headers" section below. Just click on this and then select "Authorization" and provide the token inside just right of the "Authorization".


* You can use the token "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY2ZWQxYTU0MzY2MjJlNTYyZDQ3MTgiLCJuYW1lIjoiUHJhZGlwIFNodWtsYSIsImVtYWlsIjoicGtAZXhhbXBsZS5jb20iLCJpYXQiOjE3MTA2ODEzNzd9.7j-qQUJ7hL_80-bgq7qkcthhb5cNb6dvqhAdWNmOXq8".

* If the above token does not work then just register and then login to get a new fresh token using "Postman" tool or "thunder-client" extension in vs code.