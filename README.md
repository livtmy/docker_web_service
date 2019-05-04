## Liv's Garden

This app uses Docker Node.js and Express.

Two routes: 
/flowers: returns all the flowers' info.
/flowers/3: returns the info of the flower with id 3. 3 can be replaced by any valid Id. Valid Ids range from 1 to 6.

# To run this application locally
You need to have Docker installed in your machine. 

# Download source code through Git

Step 1: click the "Clone or download" button on the upper right side of this webpage.

Step 2: choose "use HTTPS" instead of "use SSH".

Step 3: copy the url from the edit text.

Step 4: open Git Bash on your device.

Step 5: navigate to the file that you want to store the source code of this application using the "cd" command.

Step 6: type "git clone your url", replace "your url" with the url copied from Github; and press enter.

Now all the source code is downloaded to your local machine in a file named "docker_web_service" in the file you specified.

# Build and run your image

Step 1: open your Docker terminal.

Step 2: navigate to the file named "docker_web_service".

Step 3: type "docker build -t my-tag", you can replace "my-tag" with any tag you would like to give to your image; and press enter. "-t" means give your image a tag so it can be easily identified.

Step 4: type "docker run -p 49160:8080 -d my-tag", you can replace "49160" with any public(valid) port you would like to redirect to the private port inside your container, which is 8080; if you replaced "my-tag", change here as well; and press enter. "-p" means redirect the public port 49160 to the private port 8080 inside your container. "-d" means your contianer will run in the detached mode, meaning in the background.

Step 5: open your browser and type "http://192.168.99.100:49160/flowers" or "http://192.168.99.100:49160/flowers/3" to view the json file send by the server. In my case, I used a Docker toolbox, and the ip address may be different from what is valid on your machine. Please check online for other resources.
