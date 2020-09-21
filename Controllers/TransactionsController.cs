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
    }
}