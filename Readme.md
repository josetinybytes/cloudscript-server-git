# Playfab CloudScript Server

## Usage

First install the package:  
>npm install -g cloudscript-server

This service requires 2 environment variables:  
>TITLE_ID = "your project title id"  
>TITLE_SECRET = "your project developer secret"  

You can use a **.env** file in the same cloudscript project folder for setting up the environment variables, if you do this, remember to add the **.env** file to the **.ignore** file for your repository to avoid sensitive keys leaking 

Then run the program in your cloudscript project directory: 
>cloudscript-server  

The default port of the server is **8080**, this can be changed by passing a **-p** or **--port** argument to the program 

You can also use a **-d** or **--dir** argument to point to your cloudscript project folder 

For testing in the editor you have to set in your **PlafabSharedSettings.asset** the **ProductionEnvironmentUrl** to http://127.0.0.1:8080  

## Disclaimer
This server should not be used in production, it will not work, the currentPlayerId is setted as a global variable, so if a new request arrive to the server while another request is processing the currentPlayerId will be changed and things will break, in fact, only one user can use this server at a time because of this 

This package is arriving a litte late, it should have been done by Playfab ages ago, but better late than never...
