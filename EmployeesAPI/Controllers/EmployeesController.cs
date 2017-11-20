using System.Threading.Tasks;
using EmployeesAPI.Data;
using EmployeesAPI.Models;
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

        [HttpGet]
        public async Task<IActionResult> Get() 
        {
            var employees = await _employeesRepository.GetAllAsync();
            return Ok(employees);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody]Employee employee) 
        {
            if (employee == null)
                return BadRequest();
            
            await _employeesRepository.AddEmployeeAsync(employee);
            
            return Created($"/employees/{employee.Id}", employee);
        }
    }
}