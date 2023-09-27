using Microsoft.EntityFrameworkCore;
using StockTrack.Models;

namespace StockTrack.DAL
{
	public class StockContext : DbContext
	{
		public StockContext(DbContextOptions<StockContext> options):base(options)
		{
		}

        public DbSet<User> Users { get; set; }
		public DbSet<Group> Groups { get; set; }
		public DbSet<Product> Products { get; set; }
    }
}

