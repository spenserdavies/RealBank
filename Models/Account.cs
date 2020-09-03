using System.ComponentModel.DataAnnotations;

namespace realbank.Models
{
    public class Account
    {
        public int Id { get; set; }

        [Required]
        public int AccountNumber { get; set; }

        [Required]
        public int Balance { get; set; }

        [Required]
        public string AccountType { get; set; }

        [Required]
        public string UserId { get; set; }
    }
}