# For linux mint (TODO)

		docker ps <-- for container id

		sudo docker exec -it <container ID> bash

# Steps to access data base
1. input these commands first

		docker-compose up

2. go to docker --> mongo --> CLI

3. The type the following command:

		mongo -u admin 
		pw: admin

4. You are in the data base now. The following commands are helpful:

		show databases

Use whatever one you wanna use. We're gonna be using the *test* database
	
	use test

	show collections

	db.categories.find({})

5. To insert something

		db.<insert your collection name>.insert({<val 1>, <val 2>})

For example

	db.testCollection.insert({name: "mason", age: 41})
