using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using EmployeesAPI.Data;
using EmployeesAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace EmployeesAPI.Controllers
{
    public class EmployeesController : Controller
    {
        private readonly IEmployeesRepository _employeesRepository;
        public EmployeesController(IEmployeesRepository employeesRepository)
        {
            _employeesRepository = employeesRepository;
        }

        [HttpGet]
        public async Task<IActionResult> Get() 
        {
            var employees = await _employeesRepository.GetEmployeesAsync();
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

        public async Task<IActionResult> Delete(int employeeId) 
        {
            await _employeesRepository.DeleteEmployeeAsync(employeeId);
            return Ok();
        }
    }
}