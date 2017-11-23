using System.Collections.Generic;
using System.Threading.Tasks;
using EmployeesAPI.Models;

namespace EmployeesAPI.Data
{
    public interface IEmployeesRepository
    {
         Task<IEnumerable<Employee>> GetEmployeesAsync();
         Task<Employee> FindEmployeeAsync(int id);
         Task AddEmployeeAsync(Employee employee);
         Task<int> DeleteEmployeeAsync(int id);         
    }
}