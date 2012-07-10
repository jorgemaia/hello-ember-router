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
- [ASP.MVC 4 Web API](http://www.asp.net/web-api);
- [SQL Server Express](http://www.microsoft.com/sqlserver/en/us/editions/2012-editions/express.aspx);
- [EF4.3](http://nuget.org/packages/EntityFramework);
- [jQuery 1.7.2](http://nuget.org/packages/jquery);
- [Handlebars 1.0 b6](https://github.com/wycats/handlebars.js/);
- [Ember 0.9.8.1](https://github.com/emberjs/ember.js)
- [VS Express 12 RC](http://www.microsoft.com/visualstudio/11/en-us/downloads)
- [Ember-Bootstrap](https://github.com/jzajpt/ember-bootstrap)
