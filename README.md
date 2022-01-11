# Table of contents
1. [Introduction](#introduction)
2. [Some paragraph](#paragraph1)
    1. [Sub paragraph](#subparagraph1)
3. [Another paragraph](#paragraph2)

## This is the introduction <a name="introduction"></a>
Some introduction text, formatted in heading 2 style

## Some paragraph <a name="paragraph1"></a>
The first paragraph text

### Sub paragraph <a name="subparagraph1"></a>
This is a sub paragraph, formatted in heading 3 style

## Another paragraph <a name="paragraph2"></a>
The second paragraph text


# INSTALLING THINGS 
- install docker
- install node

# How to start up containers

- cd into this folder
- type the command on the line below

		docker-compose up

# How to shut down the containers
- cd into this folder
- type the command on the line below

    	docker-compose down

# How to connect to the important parts of the system
## Database Steps
- Connect to mongo_db docker container
- type the command on the line below

        mongo

## API: 
- Open browser and navigate to http://localhost:5000

## Front end: 
- Open browser and navigate to http://localhost:3001

# Important folders
## API: 
- server/src/index.js
- This file can be changed if you want to return data from the database to the front end 
## Front end: 
- Edit the HTML of the page
- client/src/App.js



# Docker nice commands
- remove all old files: docker system prune

