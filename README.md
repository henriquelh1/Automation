
 
 # AUTOMATION - API and UI Test
 
 This repository contains API and UI tests
 

 # Tools
 
><b>API Test</b>
- Eclipse
-	Java
-	RestAssured
-	JUnit
- Hamcrest
 
><b>UI Test </b>

- Visual Studio Code
- Cypress
- Typescript
- Page Object Pattern


# Approach

 ><b>Cypress and Page Object</b>

I have decided to use Cypress, because it's one of the best tools available in the market in the moment. The advantage of using Cypress, is the fact we dont need to worry about synchronization between the tests and current status of the page under test, it is done automatically thus avoiding the use of waits in the code. About Page Object pattern, it separates the locators from the test, so I can keep the code clean, easy to understand and to maintain in the future.


 ><b>Rest Assured</b>
 
Rest-Assured is a Java-based library that is used to test RESTful Web Services and the reason I have chosen it is because this is pretty simple to use, so we can test test a wide variety of Request combinations very easily.

# Test Scenarios

 
  ><b>API</b>

-	Register a new user
-	Login with valid credentials

 ><b>UI Test</b>
- Login successful
- Login with wrong username
- Login with wrong password
- Logout successful

 
 
# How to Run
> <b>Prerequisites</b>

You must have Java and NodeJS installed in your machine. 
 <br>

> <b>Steps to run</b>

 ><b>API</b>
```
1. Clone this repository to your machine.
2. Open the APITest project
3. Run with JUnit
```
 ><b>UI Test</b>
```
1. Clone this repository to your machine.
2. Open the UITest project
3. Run npm install so you can download all the dependencies to run the project
4. Then you can run the the test by using "npx cypress open"
    
```
 # Author
 
 LUIS MARREIROS
