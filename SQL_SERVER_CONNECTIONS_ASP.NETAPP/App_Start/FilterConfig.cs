﻿using System.Web;
using System.Web.Mvc;

namespace SQL_SERVER_CONNECTIONS_ASP.NETAPP
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
