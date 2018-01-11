using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EMPLOYEESTABLE_SQL_CONNECTION.Controllers
{
    public class EmployeesController : ApiController
    {
        public IEnumerable<EMPLOYEESTABLE> Get()
        {
            using (myDbConnection entities = new myDbConnection())
            {
                return entities.EMPLOYEESTABLE.ToList();
            }
        }

        public EMPLOYEESTABLE Get(string ID)
        {
            using (myDbConnection entities = new myDbConnection())
            {
                return entities.EMPLOYEESTABLE.FirstOrDefault(e => e.ID == ID);
            }
        }
    }
}
