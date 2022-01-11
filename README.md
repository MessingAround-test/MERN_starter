INSTALLING THINGS. 
    - install docker
    - install node

How to start up containers: 
    - cd into this folder
    - type the command on the line below
    docker-compose up

How to shut down the containers: 
    - cd into this folder
    - type the command on the line below
    docker-compose down


How to connect to the important parts of the system: 
    Database Steps
        - Connect to mongo_db docker container
        - type the command on the line below
        mongo

    API: 
        - open browser and navigate to http://localhost:5000

    Front end: 
        - open browser and navigate to http://localhost:3001

Important folders: 
    API: 
        - server/src/index.js
        - This file can be changed if you want to return data from the database to the front end 
    Front end: 
        - Edit the HTML of the page
        - client/src/App.js



Docker nice commands: 
    - remove all old files: docker system prune
