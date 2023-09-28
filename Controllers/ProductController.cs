using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StockTrack.DAL;
using StockTrack.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace StockTrack.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : Controller
    {
        private readonly StockContext _context;

        public ProductController(StockContext context)
        {
            _context = context;
        }


        // GET: api/values
        [HttpGet]
        public IEnumerable<Product> Get()
        {
            var products = _context.Products.ToList();
            return products;
        }

        // GET api/values/5
        [HttpGet("{code}")]
        public async Task<ActionResult<Product>> Get(string code)
        {
            var product = _context.Products.FirstOrDefault((p) => p.Code == code);
            if (product == null)
            {
                return NotFound();
            }

            return product;
        }

        [HttpGet("group")]
        public IEnumerable<Product> GetGroupProduct(string code)
        {
            var group = _context.Groups.FirstOrDefault((p) => p.Code == code);

            var products = _context.Products.Where((p) => p.GroupId == group.Id);

            return products;
        }

        // POST api/values
        [HttpPost]
        public CreatedAtActionResult Post(Product product)
        {
            _context.Products.Add(product);
            _context.SaveChangesAsync();

            return CreatedAtAction(nameof(Get), new { id = product.Id }, value: product);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Product product)
        {
            if (id != product.Id)
            {
                return BadRequest();
            }

            _context.Entry(product).State = EntityState.Modified;

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
            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }

            _context.Products.Remove(product);
         
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}

