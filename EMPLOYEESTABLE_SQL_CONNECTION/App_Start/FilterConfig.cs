using System.Web;
using System.Web.Mvc;

namespace EMPLOYEESTABLE_SQL_CONNECTION
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
