Ember.Router with ASP.NET MVC4 Web API
======================================
--------------------------------------

This is a sample application for ***learning*** purposes which is intended to demonstrate how to use Ember.js implemeting route management. 
The goal is to create a small CRUD implementation to demonstrate common practices of both Ember and Web API.

**Note:** This is under development and will probably remain under development forever as new bits are released.


**Why?** Because .NET people also deserve Ember.js :)


**Enabling PUT & DELETE**


 - Open the `applicationHost.config` file located in the directory `%userprofile%\documents\IISExpress\config`.  
 - Scroll down to the bottom of the file and find a handler that looks like this:
```
<add name="ExtensionlessUrl-Integrated-4.0" path="*." verb="GET,HEAD,POST,DEBUG" 
         type="System.Web.Handlers.TransferRequestHandler" 
         preCondition="integratedMode,runtimeVersionv4.0" />
``` 
 - Add `PUT` and `DELETE` in the `verb` attribute so your tag now looks like this:
```
<add name="ExtensionlessUrl-Integrated-4.0" path="*." verb="GET,HEAD,POST,DEBUG,PUT,DELETE" 
        type="System.Web.Handlers.TransferRequestHandler" 
         preCondition="integratedMode,runtimeVersionv4.0" />
```

For IIS configuration, follow [this link].(http://geekswithblogs.net/michelotti/archive/2011/05/28/resolve-404-in-iis-express-for-put-and-delete-verbs.aspx)
 

**Steps to Run**


 - Before running the application, go to global.asax.cs and set the following line to `Application_Start` method:
   `Database.SetInitializer<SomeDBContext>(new CreateDatabaseIfNotExists<SomeDBContext>());`
 - Add a new connection in Visual Studio to your database and open the properties of the connection and copy the `connectionString`
 - Change your connection string in the `web.config` file
    `<add name="SomeDBContext" connectionString="CONNECTION STRING GOES HERE" providerName="System.Data.SqlClient" />`
 - Open the Package Management Console and run the first migration:
   `Add-Migration init`
 - In your `Migrations` directory you should see a file been created with the *init* sulfix;
 - Still in the PM Console, run the command  `Update-Database` to update and seed the database
 - Run the application 

  
**Technologies/Dependencies**


- [ASP.MVC 4 Web API](http://www.asp.net/web-api);
- [SQL Server Express](http://www.microsoft.com/sqlserver/en/us/editions/2012-editions/express.aspx);
- [EF4.3](http://nuget.org/packages/EntityFramework);
- [jQuery 1.7.2](http://nuget.org/packages/jquery);
- [Handlebars 1.0 b6](https://github.com/wycats/handlebars.js/);
- [Ember 0.9.8.1](https://github.com/emberjs/ember.js)
- [VS Express 12 RC](http://www.microsoft.com/visualstudio/11/en-us/downloads)
- [Ember-Bootstrap](https://github.com/jzajpt/ember-bootstrap)
