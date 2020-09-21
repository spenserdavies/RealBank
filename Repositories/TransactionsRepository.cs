using System.Collections.Generic;
using System.Data;
using realbank.Models;
using Dapper;

namespace realbank.Repositories
{
    public class TransactionsRepository
    {
        private readonly IDbConnection _db;
        public TransactionsRepository(IDbConnection db)
        {
            _db = db;
        }

        internal IEnumerable<Transaction> Get(string userId)
        {
            string sql = "SELECT * FROM transactions WHERE userId = @userId";
            return _db.Query<Transaction>(sql, new { userId });
        }

        internal Transaction GetById(int id, string userId)
        {
            string sql = "SELECT * FROM transactions WHERE id = @id AND userId = @userId";
            return _db.QueryFirstOrDefault<Transaction>(sql, new { id });
        }

        internal Transaction Create(Transaction newTransaction)
        {
            string sql = @"
            INSERT INTO transactions
            (accountNumber, amount, transactionType, category, memo, date, userId)
            VALUES
            (@AccountNumber, @Amount, @TransactionType, @Category, @Memo, @Date, @UserId)
            SELECT LAST_INSERT_ID();";
            newTransaction.Id = _db.ExecuteScalar<int>(sql, newTransaction);
            return newTransaction;
        }

        internal bool Edit(Transaction transactionToUpdate)
        {
            string sql = @"
            UPDATE transactions
            SET
                accountNumber = @AccountNumber,
                amount = @Amount,
                transactionType = @TransactionType,
                category = @Category,
                memo = @Memo,
                date = @Date,
                userId = @UserId
            WHERE id = @Id
            AND userId = @UserId;";
            int affectedRows = _db.Execute(sql, transactionToUpdate);
            return affectedRows == 1;
        }

        internal bool Delete(int id, string userId)
        {
            string sql = "DELETE FROM transactions WHERE id = @id AND userId = @userId LIMIT 1;";
            int affectedRows = _db.Execute(sql, new { id, userId });
            return affectedRows == 1;
        }
        
    }
}