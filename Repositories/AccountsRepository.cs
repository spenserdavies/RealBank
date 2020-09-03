using System.Collections.Generic;
using System.Data;
using Dapper;
using realbank.Models;

namespace realbank.Repositories
{
    public class AccountsRepository
    {
        private readonly IDbConnection _db;
        public AccountsRepository(IDbConnection db)
        {
            _db = db;
        }

        internal IEnumerable<Account> Get(string userId)
        {
            string sql = "SELECT * FROM accounts WHERE userId = @userId";
            return _db.Query<Account>(sql, new { userId });
        }

        internal Account GetById(int id, string userId)
        {
            string sql = "SELECT * FROM accounts WHERE id = @id AND userId = @userId;";
            return _db.QueryFirstOrDefault<Account>(sql, new { id, userId });
        }

        internal Account Create(Account newAccount)
        {
            string sql = @"
            INSERT INTO accounts
            (accountNumber, balance, userId, accountType)
            VALUES
            (@AccountNumber, @Balance, @UserId, @AccountType);
            SELECT LAST_INSERT_ID();
            ";
            newAccount.Id = _db.ExecuteScalar<int>(sql, newAccount);
            return newAccount;
        }

        internal bool Edit(Account accountToUpdate)
        {
            string sql = @"
            UPDATE accounts
            SET
                accountNumber = @AccountNumber,
                balance = @Balance,
                accountType = @AccountType
            WHERE id = @Id
            AND userId = @UserId";
            int affectedRows = _db.Execute(sql, accountToUpdate);
            return affectedRows == 1;
        }

        internal bool Delete(int id, string userId)
        {
            string sql = "DELETE FROM accounts WHERE id = @id AND userId = @userId LIMIT 1;";
            int affectedRows = _db.Execute(sql, new { id, userId });
            return affectedRows == 1;
        }
    }
}