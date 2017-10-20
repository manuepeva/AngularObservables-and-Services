using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;


namespace WebApplication2.Controllers
{
    public class EmployeesController : ApiController
    {
        public IEnumerable<employees> Get()
        {
            using(mydbEntities1 entities = new mydbEntities1())
            {
                return entities.employees.ToList();
            }
        }

        public employees Get(string code)
        {
            using (mydbEntities1 entities = new mydbEntities1())
            {
                return entities.employees.FirstOrDefault(e => e.code == code);
            }
        }
    }
}
