using System;
using System.Collections.Generic;
using realbank.Models;
using realbank.Repositories;

namespace realbank.Services
{
    public class AccountsService
    {
        private readonly AccountsRepository _repo;
        public AccountsService(AccountsRepository repo)
        {
            _repo = repo;
        }

        internal IEnumerable<Account> Get(string userId)
        {
            return _repo.Get(userId);
        }

        internal Account GetById(int id, string userId)
        {
            Account foundAccount = _repo.GetById(id, userId);
            if(foundAccount == null)
            {
                throw new Exception("Invalid ID / User ID");
            }
            return foundAccount;
        }

        public Account Create(Account newAccount)
        {
            return _repo.Create(newAccount);
        }

        internal Account Edit(Account accountToUpdate)
        {
            Account foundAccount = _repo.GetById(accountToUpdate.Id, accountToUpdate.UserId);
            if(_repo.Edit(accountToUpdate))
            {
                return accountToUpdate;
            }
            throw new Exception("You cannot edit this Account");
        }

        internal string Delete(int id, string userId)
        {
            Account foundAccount = _repo.GetById(id, userId);
            if(foundAccount.UserId != userId)
            {
                throw new Exception("That is not your account");
            }
            if(_repo.Delete(id, userId))
            {
                return "Account removed";
            }
            throw new Exception("Something went wrong");
        }
    }
}