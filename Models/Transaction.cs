namespace realbank.Models
{
    public class Transaction
    {
        public int Id { get; set; }
        public int AccountNumber { get; set; }
        public decimal Amount { get; set; }
        public string TransactionType { get; set; }
        public string Category { get; set; }
        public string Memo { get; set; }
        public string Date { get; set; }
        public string UserId { get; set; }
    }
}