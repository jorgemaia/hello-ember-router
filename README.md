Ember.Router with ASP.NET MVC4 Web API
======================================
--------------------------------------

This is a sample application for LEARNING purposes which is intended to demonstrate how to use Ember.js implemeting route management. 
The goal is to create a small CRUD implementation to demonstrate common practices of both Ember and Web API.

Note: 
====
This is under development and will probably remain under development forever as new bits are released.


Why?
=====
Because .NET people also deserve Ember.js :)


Config
======
 - Before running the application, go to global.asax.cs and set the following line to `Application_Start` method:
   `Database.SetInitializer<SomeDBContext>(new CreateDatabaseIfNotExists<SomeDBContext>());`
 - Change your connection string in the `web.config` file
    `<add name="SomeDBContext" connectionString="CONNECTION STRING GOES HERE" providerName="System.Data.SqlClient" />`
 - Open the Package Management Console and run the first migration:
   `Add-Migration init`
 - Make sure a file has been created in the `Migrations` directory
 - Still in the PM Console, run the command to update and seed the database
   `Update-Database` 


Technologies
============
- ASP.MVC 4 Web API;
- SQL Server 2008;
- EF4.*;
- jQuery 1.7.2;
- Handlebars 1.0 b6;
- Ember 0.9.8.1
- VS Express 12 RC
