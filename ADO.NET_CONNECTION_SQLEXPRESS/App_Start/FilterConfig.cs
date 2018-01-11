using System.Web;
using System.Web.Mvc;

namespace ADO.NET_CONNECTION_SQLEXPRESS
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
