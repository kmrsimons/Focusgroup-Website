# ECO-BOT

You need to have a few things installed for the Python script to work. In the terminal write:
### `pip install flask`
### `pip install python-dotenv`

If the React app is not working correctly, you can type:
### `npm install`
This will install all of the dependencies that are required.

## How to RUN the application

After having all the requirements, make sure to run the React app first.
In the project directory, open a terminal and write:

### `npm start`

This runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

After running the React app, you need to run the Flask Python script.

Open another terminal in the same directory and use:

### `npm run start-api`
This will launch the Flask application.
I added this custom terminal command in the settings, it will automatically move you to the correct folder.

## How it works

I included a proxy in the package.json. 
Each time you press the button, it will make a proxy request to the Flask application instead.

We can use different '\endpoints' for each feature the Python script needs to use.

Right now it just checks the current time and gives that number to the frontend.
If you check the devtools in your browser, you can see that whenever you click the button, it will give you a number in return. This means that whenever you click the button:
-> it will do a request to the Python Flask application
-> the application will check the current time integer
-> this will be communicated to the React application
-> resulting in you seeing the number in the console

## Next time

Now we need it to have a real feature instead of this, because this was just for testing the system. :)


