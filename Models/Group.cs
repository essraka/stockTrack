using System.ComponentModel.DataAnnotations;

namespace StockTrack.Models
{
	public class Group
	{
		[Key]
		public int Id { get; set; }
        public required string Name { get; set; }
		public required string Code { get; set; }
	}
}

