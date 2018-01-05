using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SQL_SERVER_CONNECTIONS_ASP.NETAPP.Controllers
{
    public class EmployeesController : ApiController
    {
        public IEnumerable<EMPLOYEESTABLE> Get()
        {
            using(myDBConnection entities = new myDBConnection())
            {
                return entities.EMPLOYEESTABLE.ToList();
            }
        }

        public EMPLOYEESTABLE Get(int ID)
        {
            using (myDBConnection entities = new myDBConnection())
            {
                return entities.EMPLOYEESTABLE.FirstOrDefault(e => e.ID == ID);
            }
        }
    }
}
