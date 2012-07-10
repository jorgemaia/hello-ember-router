using System.Web;
using System.Web.Optimization;

namespace HelloEmberRouter
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include("~/Scripts/jquery.js"));
            bundles.Add(new ScriptBundle("~/bundles/ember").Include("~/Scripts/handlebars.js", "~/Scripts/handlebars.helpers.js", "~/Scripts/ember.js", "~/Scripts/bootstrap.js", "~/Scripts/prettify.css", "~/Scripts/app.js"));
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include("~/Scripts/modernizr-*"));
            bundles.Add(new StyleBundle("~/Content/css").Include("~/Content/site.css", "~/Content/bootstrap.min.css", "~/Content/prettify.css"));
        }
    }
}