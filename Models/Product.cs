using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace StockTrack.Models
{
	public class Product
	{
        [Key]
        public int Id { get; set; }
        [ForeignKey("Group")]
        public int GroupId { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public int Count { get; set; }

    }
}

