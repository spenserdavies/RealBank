using System;
using System.Collections.Generic;
using realbank.Models;
using realbank.Repositories;

namespace realbank.Services
{
    public class TransactionsService
    {
        private readonly TransactionsRepository _repo;
        public TransactionsService(TransactionsRepository repo)
        {
            _repo = repo;
        }

        internal IEnumerable<Transaction> Get(string userId)
        {
            return _repo.Get(userId);
        }

        internal Transaction GetById(int id, string userId)
        {
            Transaction foundTransaction = _repo.GetById(id, userId);
            if(foundTransaction == null)
            {
                throw new Exception("Invalid ID/User ID");
            }
            return foundTransaction;
        }

        internal Transaction Create(Transaction newTransaction)
        {
            return _repo.Create(newTransaction);
        }

        internal Transaction Edit(Transaction transToUpdate)
        {
            Transaction foundTransaction = _repo.GetById(transToUpdate.Id, transToUpdate.UserId);
            if(_repo.Edit(transToUpdate) && foundTransaction != null)
            {
                return transToUpdate;
            }
            throw new Exception("You cannot edit this transaction.");
        }

        internal string Delete(int id, string userId)
        {
            Transaction foundTransaction = _repo.GetById(id, userId);
            if(foundTransaction.UserId != userId)
            {
                throw new Exception("That is not your transaction");
            }
            if(_repo.Delete(id, userId))
            {
                return "Transaction Deleted";
            }
            throw new Exception("Something went wrong");
        }

        internal string DeleteAllTransactions(int accountNumber, string userId)
        {
            if(_repo.DeleteAccountTransactions(accountNumber, userId)){
                return "Transactions deleted";
            }
            throw new Exception("Something went wrong");
        }
    }
}