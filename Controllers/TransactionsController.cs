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
    public class TransactionsController : ControllerBase
    {
        private readonly TransactionsService _ts;
        public TransactionsController(TransactionsService ts)
        {
            _ts = ts;            
        }

        [HttpGet]
        [Authorize]
        public ActionResult<IEnumerable<Transaction>> Get()
        {
            try
            {
                string userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
                return Ok(_ts.Get(userId));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("{id}")]
        [Authorize]
        public ActionResult<Transaction> GetById(int id)
        {
            try
            {
                var claim = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier);
                string userId = "";
                if(claim != null)
                {
                    userId = claim.Value;
                }
                return Ok(_ts.GetById(id, userId));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }            
        }

        [HttpPost]
        [Authorize]
        public ActionResult<Transaction> Create([FromBody] Transaction newTransaction)
        {
            try
            {
                string userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
                newTransaction.UserId = userId;
                return Ok(_ts.Create(newTransaction));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut("{id}")]
        [Authorize]
        public ActionResult<Transaction> Edit(int id, [FromBody] Transaction transactionToUpdate)
        {
            try
            {
                string userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
                transactionToUpdate.UserId = userId;
                transactionToUpdate.Id = id;
                return Ok(_ts.Edit(transactionToUpdate));
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
                return Ok(_ts.Delete(id, userId));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}