using EmployeesAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace EmployeesAPI.Data
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options) 
        {
            Database.EnsureCreated();
        }

        public DbSet<Employee> Employees { get; set; }
    }
}