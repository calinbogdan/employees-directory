using System.Collections.Generic;
using System.Threading.Tasks;
using EmployeesAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace EmployeesAPI.Data
{
    public class EmployeesRepository : IEmployeesRepository
    {
        private readonly Context _context;
        public EmployeesRepository(Context context) 
        {
            _context = context;
        }

        public async Task AddEmployeeAsync(Employee employee)
        {
            await _context.Employees.AddAsync(employee);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<Employee>> GetEmployeesAsync()
        {
            return await _context.Employees.ToListAsync();
        }

        public async Task<Employee> FindEmployeeAsync(int id)
        {
            return await _context.Employees.FindAsync(id);
        }

        public async Task<int> DeleteEmployeeAsync(int id)
        {
            Employee employee = await FindEmployeeAsync(id);
            _context.Employees.Remove(employee);
            return await _context.SaveChangesAsync();
        }
    }
}