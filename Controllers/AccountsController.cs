using System;
using System.Collections.Generic;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using realbank.Models;
using realbank.Services;

namespace realbank.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountsController : ControllerBase
    {
        private readonly AccountsService _acs;
        private readonly TransactionsService _ts;
        public AccountsController(AccountsService acs, TransactionsService ts)
        {
            _acs = acs;
            _ts = ts;
        }

        [HttpGet]
        [Authorize]
        public ActionResult<IEnumerable<Account>> Get()
        {
            try
            {
                string userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
                return Ok(_acs.Get(userId));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("{id}")]
        [Authorize]
        public ActionResult<Account> GetById(int id)
        {
            try
            {
                var claim = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier);
                string userId = "";
                if(claim != null){
                    userId = claim.Value;
                }
                return Ok(_acs.GetById(id, userId));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        [Authorize]
        public ActionResult<Account> Post([FromBody] Account newAccount)
        {
            try
            {
                string userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
                newAccount.UserId = userId;
                return Ok(_acs.Create(newAccount));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut("{id}")]
        [Authorize]
        public ActionResult<Account> Edit(int id, [FromBody] Account accountToUpdate)
        {
            try
            {
                accountToUpdate.Id = id;
                return Ok(_acs.Edit(accountToUpdate));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpDelete("{id}")]
        [Authorize]
        public ActionResult<string> Delete(int id)
        {
            try
            {
                string userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
                return Ok(_acs.Delete(id, userId));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        
        [HttpDelete("{id}/transactions")]
        [Authorize]
        public ActionResult<string> DeleteTransactions(int id)
        {
            try
            {
                string userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
                var foundAccount = _acs.GetById(id, userId);
                if(foundAccount != null)
                {
                    var accountNumber = foundAccount.AccountNumber;
                    return Ok(_ts.DeleteAllTransactions(accountNumber, userId));
                }
                return "Account Not Found";
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
            
        }
    }
}