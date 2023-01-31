# Chef Recipes

![](https://visitor-badge.glitch.me/badge?page_id=puneethreddyhc.onlineadv)

<a href="https://www.buymeacoffee.com/brasildu" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" width="195" height="55"></a>

## Built with:
<img alt="html5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" /> <img alt="Css" src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" /> <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" /> <img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /> <img alt="Ruby" src="https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white" /> <img alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" /> <img alt="Rails" src="https://img.shields.io/badge/Ruby_on_Rails-CC0000?style=for-the-badge&logo=ruby-on-rails&logoColor=white" />  

## Description
This application allows culinary chefs to join other chefs from all over the world. With the application, a chef is able to sign up and login in order to be a member of the community, sharing, leaving feedbacks and uploading new recipes.  

## Walk-through video:
https://www.youtube.com/watch?v=aH9A6q8cYCk  


## Getting Started
Follow the steps below to set up both front-end and back-end code.

### chef-recipes-project directory (back-end)

- Install gems from Gemfile for backend

 ```bash
bundle install
  ```

- Execute database table migrations and seeding

 ```bash
 rails db:migrate db:seed
  ```
  
- Run server

 ```bash
rails server
  ```

### chef-recipes-project/client/ directory (front-end)

- Install dependencies  

 ```bash
npm install
  ```
  
- Start development server
  
 ```bash
npm start
  ```


## Database Tables: recipes, comments and users
<img alt="db tables" src="./gifs-images/db-tables.png"/>


## Usage

In this application, a chef (user) is able to sign up and have its information saved for future login.

* ### Logging in
Once the application is loaded, a form will be displayed along with a brief description of the webpage. Users are able to create an account and login:

![](./gifs-images/logging-in.gif)

<br/>

* ### Interacting with the recipes
Once redirected to the home page, a user is able to browse a list of recipes from other chefs. Clicking on the play button of a recipe, loads a page with a video and information about the recipe:

![](./gifs-images/recipes-list.gif)

<br/>

* ### Adding a recipe
In the Navbar, you can find the 'New Recipe' link to open a form so a user can submit recipes. The form is helpful on the way that it makes sure that all the input fields are validated before creating a new recipe:

![](./gifs-images/new-recipe.gif)

<br/>

* ### Adding, editing and removing a comment
Also in the Navbar, the user is able to navigate to the Comments section. There, you can add, edit and remove a comment (editing and removing a comment should be only able to work if the comment belongs to the user that is logged in).

![](./gifs-images/new-comment.gif)

<br/>

## Support
For any questions related to the project's functionality, code, or usage, please reach out to:
brasildu@gmail.com


