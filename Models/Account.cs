using System.ComponentModel.DataAnnotations;

namespace realbank.Models
{
    public class Account
    {
        public int Id { get; set; }

        [Required]
        public int AccountNumber { get; set; }

        [Required]
        public decimal Balance { get; set; }

        [Required]
        public string AccountType { get; set; }

        public string UserId { get; set; }
    }
}