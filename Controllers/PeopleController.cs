using System.Xml.Serialization;
using System.Security.Cryptography.X509Certificates;
using System.Linq;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Model.Entities;
using System.IO;
using Model;

namespace ex1.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PeopleController:Controller
    {
        private DataContext _Context;
        public PeopleController()
        {
            _Context=new DataContext();
        }
        [HttpGet("List")]
        public IActionResult Get()
        {
             return Ok(_Context.Persons.ToList());
        }
        [HttpGet("Find")]
        public IActionResult Get(long id)
        {
            
            if (_Context.Persons.Where(it=>it.id==id).Count()>0)
            {
                return Ok(_Context.Persons.Find(id));
            }
            else
            {
                return NotFound();
            }
        }
        [HttpPost()]
        public IActionResult Post(Person value)
        {
            
            _Context.Persons.Add(value);
            _Context.SaveChanges();
            return Ok(value);
        }
        [HttpPut()]
        public IActionResult Put(Person value)
        {
            try
            {
                _Context.Entry<Person>(value).State=Microsoft.EntityFrameworkCore.EntityState.Modified;
                _Context.SaveChanges();
                return Ok("data has been updated");
            }
            catch 
            {
                 return BadRequest();
            }
            
        }
        public IActionResult Delete(long Id)
        {
            
            if (_Context.Persons.Find(Id)!=null)
            {
                _Context.Persons.Remove(_Context.Persons.Find(Id));
                _Context.SaveChanges();
                return Ok("data has been deleted");
            }
            else
            {
                return BadRequest();
            }
        }
        protected override void Dispose(bool disposing)
        {
            _Context.Dispose();
            base.Dispose(disposing);
        }
    }
}