using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OwnerApi.Models;
using OwnerApi.Services;

namespace OwnerApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OwnerController : ControllerBase
    {
        private IOwnerService _service;
        private ILogger<OwnerController> _logger;
        public OwnerController(IOwnerService service, ILogger<OwnerController> logger)
        {
            this._logger = logger;
            this._service = service;
        }

        [HttpGet("allOwners")]
        public async Task<ActionResult<List<Owner>>> GetOwners()
        {
            return await _service.GetAllOwners();
        }

        [HttpGet("owners/{id}")]
        public async Task<ActionResult<Owner>> GetOwner(int id)
        {
            var result = await _service.GetOwner(id);
            if(result == null)
                return BadRequest(new { message = "Owner not found" });
            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult<Owner>> AddOwner([FromBody]Owner owner)
        {
            var result = await _service.AddOwner(owner);
            if(result == null)
                return BadRequest(new { message = "Owner posting failed" });
            return Ok(result);
        }

        [HttpDelete("remove/{id}")]
        public async Task<ActionResult<bool>> RemoveOwner(int id)
        {
            var status = await _service.DeleteOwner(id);
            if(status == true)
                return Ok(status);
            else
                return BadRequest(status);
        }
    }
}
