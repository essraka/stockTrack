using System.ComponentModel.DataAnnotations;

namespace StockTrack.Models
{
	public class User
	{
        [Key]
        public Guid Guid { get; set; }
        public string? Email { get; set; }
        public string? Password { get; set; }
    }
}

