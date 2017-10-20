using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EmployeeDataAccess; 

namespace EmployeeServiceTwo.Controllers
{
       public class EmployeesController : Controller
    {
        public IEnumerable<Employee> Get()
        {
            using (EmployeeDBEntities entities = new EmployeesDBEntities())
            {
                return entities.Employees.ToList();
            }
        }
    }
}
}