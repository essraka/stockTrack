
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StockTrack.DAL;
using StockTrack.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace StockTrack.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GroupController : Controller
    {

        private readonly StockContext _context;

        public GroupController(StockContext context)
        {
            _context = context;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<Group> Get()
        {
            var groups = _context.Groups.ToList();
            return groups;
        }

        // GET api/values/5
        [HttpGet("{code}")]
        public async Task<ActionResult<Group>> Get(string code)
        {
            var group = _context.Groups.FirstOrDefault((g) => g.Code == code);
            if (group == null)
            {
                return NotFound();
            }

            return group;
        }

        // POST api/values
        [HttpPost]
        public CreatedAtActionResult Post(Group group)
        {
            _context.Groups.Add(group);
            _context.SaveChanges();

            return CreatedAtAction(nameof(Get), new { id = group.Id }, value: group);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Group group)
        {
            if (id != group.Id)
            {
                return BadRequest();
            }

            _context.Entry(group).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        private bool ItemExists(int id)
        {
            throw new NotImplementedException();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var group = await _context.Groups.FindAsync(id);
            if (group == null)
            {
                return NotFound();
            }

            _context.Groups.Remove(group);
            //TODO:burada gruba bağlı ürünleri de sil fk_groupId
            //_context.Products.RemoveRange(_context.Products.Where(x => x.GroupId == id));
            _context.SaveChanges();

            return NoContent();
        }
    }
}

