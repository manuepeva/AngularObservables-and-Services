using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ADO.NET_CONNECTION_SQLEXPRESS.Controllers
{
    public class EmployeesController : ApiController
    {
        public IEnumerable<ResumenDeCosas> Get()
        {
            using (myDBConnection entities = new myDBConnection())
            {
                return entities.ResumenDeCosas.ToList();
            }
        }

        public ResumenDeCosas Get(string code)
        {
            using (myDBConnection entities = new myDBConnection())
            {
                return entities.ResumenDeCosas.FirstOrDefault(e => e.code == code);
            }
        }
    }
}
