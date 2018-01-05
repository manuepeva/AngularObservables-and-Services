using System.Web;
using System.Web.Mvc;

namespace SQL_CONNECTIONS_ADO.NET
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
