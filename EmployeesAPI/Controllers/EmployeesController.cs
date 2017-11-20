using Microsoft.AspNetCore.Mvc;

namespace EmployeesAPI.Controllers
{
    public class EmployeesController : Controller
    {
        private readonly EmployeesRepository _employeesRepository;
        public EmployeesController(EmployeesRepository employeesRepository)
        {
            _employeesRepository = employeesRepository;
        }
        public IActionResult Get() 
        {

        }
    }
}