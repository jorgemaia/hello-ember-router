namespace HelloEmberRouter.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class EmailTurnsAlias : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Contacts", "Alias", c => c.String(maxLength: 120));
            DropColumn("dbo.Contacts", "Email");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Contacts", "Email", c => c.String(maxLength: 120));
            DropColumn("dbo.Contacts", "Alias");
        }
    }
}
