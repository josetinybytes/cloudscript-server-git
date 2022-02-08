usage: 

first install the package with this command: 

npm install -g cloudscript-server 

then run cloudscript-server in the playfab cloudscript project folder 

this service requires 2 environment variables:  
 TITLE_ID = "your project title id"  
 TITLE_SECRET = "your project developer secret"  

you can use a .env file in the same cloudscript project folder for setting up the environment variables, if you do this, remember to add the .env file to the .ignore file for your repository to avoid sensitive keys leaking 

this server should not be used in production, it will not work, the currentPlayerId is setted as a global variable, so if a new request arrive to the server while another request is processing the currentPlayerId will be changed and things will break, in fact, only one user can use this server at a time because of this 

the default port of the server is 8080, this can be changed by passing a -p or --port argument to the program 

you can also use a -d or --dir argument for declaring your cloudscript project folder 

for testing on editor you have to set in your PlafabSharedSettings the ProductionEnvironmentUrl to "http://127.0.0.1:8080"  