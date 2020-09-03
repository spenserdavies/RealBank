using Microsoft.AspNetCore.Mvc;
using realbank.Services;

namespace realbank.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountsController : ControllerBase
    {
        private readonly AccountsService _acs;
        public AccountsController(AccountsService acs)
        {
            _acs = acs;
        }

    }
}