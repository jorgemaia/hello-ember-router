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
                    Twitter = "iron_man_movie",
                    Facebook = "https://www.facebook.com/ironmanmovie",
                    Website = "http://ironman.wikia.com/wiki/Iron_Man_Wiki",
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
                    Website = "http://www.imdb.com/title/tt0948470/",
                    Deleted = false
                },
                new Contact() {
                    FirstName = "Thiago",
                    LastName = "Santos",
                    Alias = "Milky Way Joe",
                    ImageUrl = "https://twimg0-a.akamaihd.net/profile_images/1030362795/thiago.PNG",
                    Twitter = "tsantos83",
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
                    Twitter = "Thor_Thunderer",
                    Facebook = "https://www.facebook.com/ThorMovie",
                    Website = "",
                    Deleted = false
                },
                new Contact()
                {
                    FirstName = "Maria",
                    LastName = "Hill",
                    Alias = "Maria Hill",
                    ImageUrl = "http://img545.imageshack.us/img545/8928/mariahill.jpg",
                    Twitter = "Avengers",
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
                    Website = "http://www.imdb.com/title/tt0458525/",
                    Deleted = false
                },
                new Contact()
                {
                    FirstName = "Clint",
                    LastName = "Barton",
                    Alias = "Hawkeye",
                    ImageUrl = "http://img849.imageshack.us/img849/7567/hawkeyec.jpg",
                    Twitter = "Avengers",
                    Facebook = string.Empty,
                    Website = string.Empty,
                    Deleted = false
                },
                new Contact()
                {
                    FirstName= "Jesus",
                    LastName= "Christ",
                    Alias = "Jesus",
                    ImageUrl = "http://img713.imageshack.us/img713/7628/cooljesus1.jpg",
                    Twitter = "jesus",
                    Facebook = string.Empty,
                    Website = "http://en.wikipedia.org/wiki/Jesus",
                    Deleted = false

                },
                new Contact()
                {
                    FirstName = "George",
                    LastName = "Tarleton",
                    Alias = "MODOK",
                    ImageUrl = "http://img40.imageshack.us/img40/3803/modok.jpg",
                    Twitter = string.Empty,
                    Facebook = string.Empty,
                    Website = "http://marvel.com/universe/MODOK",
                    Deleted = false
                },
                new Contact()
                {
                    FirstName = "Beta Ray",
                    LastName = "Bill",
                    Alias = "Beta Ray Bill",
                    ImageUrl = "http://img685.imageshack.us/img685/889/ugo50albetabill288x288.jpg",
                    Twitter = "BetaRayBill_",
                    Facebook = string.Empty,
                    Website = "http://marvel.com/universe/Beta_Ray_Bill",
                    Deleted = false
                }
            );

        }
    }
}
