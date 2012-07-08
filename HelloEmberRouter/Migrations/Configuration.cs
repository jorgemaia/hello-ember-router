namespace HelloEmberRouter.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using HelloEmberRouter.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<SomeDBContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            
        }

        protected override void Seed(SomeDBContext context)
        {
            context.Contacts.AddOrUpdate(
                new Contact()
                {
                    FirstName = "Tony",
                    LastName = "Stark",
                    Alias = "Iron-man",
                    ImageUrl = "http://img513.imageshack.us/img513/492/ironmanln.jpg",
                    Twitter = "",
                    Facebook = "",
                    Website = "",
                    Deleted = false
                },
                new Contact()
                {
                    FirstName = "Peter",
                    LastName = "Parker",
                    Alias = "Spider-man",
                    ImageUrl = "http://img29.imageshack.us/img29/6307/spidermandx.jpg",
                    Twitter = "",
                    Facebook = "",
                    Website = "",
                    Deleted = false
                },
                new Contact()
                {
                    FirstName = "Thor",
                    LastName = "Odinson",
                    Alias = "Thor",
                    ImageUrl = "http://img13.imageshack.us/img13/7241/thorgjd.jpg",
                    Twitter = "",
                    Facebook = "",
                    Website = "",
                    Deleted = false
                },
                new Contact()
                {
                    FirstName = "Maria",
                    LastName = "Hill",
                    Alias = "Maria Hill",
                    ImageUrl = "http://img545.imageshack.us/img545/8928/mariahill.jpg",
                    Twitter = "",
                    Facebook = "",
                    Website = "",
                    Deleted = false
                },
                new Contact()
                {
                    FirstName = "James",
                    LastName = "Howlett",
                    Alias = "Wolverine",
                    ImageUrl = "http://img826.imageshack.us/img826/7803/wolverinee.jpg",
                    Twitter = "",
                    Facebook = "",
                    Website = "",
                    Deleted = false
                },
                new Contact()
                {
                    FirstName = "Clint",
                    LastName = "Barton",
                    Alias = "Hawkeye",
                    ImageUrl = "http://img849.imageshack.us/img849/7567/hawkeyec.jpg",
                    Twitter = "",
                    Facebook = "",
                    Website = "",
                    Deleted = false
                }
            );

        }
    }
}
