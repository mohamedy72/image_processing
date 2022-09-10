# Image Proccessing API

An API that make use of Sharp JS for resizing images and provide a link as a placeholder for your project

___
## Project Setup

1. Clone the repo || Download it as ZIP file
2. Make sure you are inside the project's root directory then run </br> ```npm install```

3. Next you have to compile the project from typescript to javascript by running </br>
```npm run compile```

4. Finally, `npm run start` to start the server then visit the API endpoint like-so </br>
```http://127.0.0.1:3000/api/images?filename=fjord.jpg&width=200&height=200```</br>

> * filename must be in jpg format and the actual image is in `/public/imgs/full` folder. </br>
> * All three queries ( filename - width - height) have to be provided. </br>

___
## Additional Scripts
* To test the application, you need to compile first `npm run compile`,  then run `npm run test` to run tests

* Prettier and ESlint is integrated out-of-the-box `npm run prettier` AND `npm run linting` are their scripts respectively
___

### This project is the first project from udacity's Advanced Full Stack Web developer
