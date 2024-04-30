# Trigvent-Assessment

## Steps to run app locally

## Clone the repo
* Open your terminal.

* Change the current working directory to the location where you want to clone the repository.

* Run the following command to clone the repository:
```bash
git clone https://github.com/nmnarora600/Trigvent-Assessment.git
```


## Installing the Required Dependencies

After cloning the repo run run following commands to install required node modules.

* check in to Trigvent-Assessment
```bash
cd Trigvent-Assessment
```
* install node modules for frontend
```bash
npm install
```
* check in backend
```bash
cd ./backend
```
* install node modules for backend
```bash
npm install
```
* make sure you have mongodb installed on the system.
## Setting Environment variables
To start using the app you must create an environment (.env) file in root of backend folder and set following values.


```bash
JWT_SECRET_TOKEN='secret token for jwt'
MONGOURI = "url to connect with mongo"
```
Backend uses port 3003 to run

## Run in Development Mode

After following above steps just open the frontend folder in cmd, powershell etc.
```bash
cd Path/to/the/repo/Trigvent-Assessment
```
* Run the following command to start app in development mode

```bash
npm start
```

* Then go to backend
```bash
cd ./backend
```

* Run the server
```bash
node ./index.js
```
* Open your Browser and go to the following link to see your app 

```bash
http://localhost:3000
```
## Run in Production Mode
* For a production grade frontend build install serve globally and repeat these steps
```bash
npm i -g serve
cd Path/to/the/repo/Trigvent-Assessment
```
```bash
npm run build
cd ./build
serve -s
```
* afterwards this goto backend
```bash
cd ../backend
```

* Run the server
```bash
node ./index.js
```
* Open your Browser and go to the following link to see your app 

```bash
http://localhost:3000
```
