# Table of contents
1. [INSTALLING THINGS](#a)
2. [How to start up containers](#b)
3. [How to shut down the containers](#c) 
4. [How to connect to the important parts of the system](#d)

	4.1 [Database Steps](#e)

	4.2 [API](#f)

	4.3 [Front end](#g)
5. [Important folders](#h)

	5.1 [API for important folders](#i)

	5.2 [Front end for important folders](#j)

6. [Docker nice commands](#k)


# INSTALLING THINGS <a name="a"></a>
- install docker
- install node

# How to start up containers <a name="b"></a>

- cd into this folder
- type the command on the line below

		docker-compose up

# How to shut down the containers <a name="c"></a>
- cd into this folder
- type the command on the line below

    	docker-compose down

# How to connect to the important parts of the system <a name="d"></a>

## Database Steps <a name="e"></a>
- Connect to mongo_db docker container
- type the command on the line below

		mongo

## API  <a name="f"></a>
- Open browser and navigate to http://localhost:5000

## Front end  <a name="g"></a>
- Open browser and navigate to http://localhost:3001

# Important folders <a name="h"></a>
## API for important folders  <a name="i"></a>
- server/src/index.js
- This file can be changed if you want to return data from the database to the front end 
## Front end for important folders <a name="j"></a>
- Edit the HTML of the page
- client/src/App.js



# Docker nice commands <a name="k"></a>
- remove all old files: docker system prune


