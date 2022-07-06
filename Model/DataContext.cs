using Microsoft.EntityFrameworkCore;
using Model.Entities;

namespace Model
{
 public class DataContext:DbContext
 {  
     public DbSet<Person> Persons { get; set; }
     protected override void OnConfiguring(DbContextOptionsBuilder content) {
        content.UseSqlServer("server=.;database=FirstCoreApp;trusted_connection=true");
        
        
     }
 }   
}