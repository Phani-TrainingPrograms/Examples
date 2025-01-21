using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SampleCoreLib;

namespace SampleCoreWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FileStorageController : ControllerBase
    {
        private readonly IDllComponent dllComponent;
        public FileStorageController(IDllComponent component)
        {
            this.dllComponent = component;
        }
        [HttpPost]
        public void PostData(string data)
        {
            this.dllComponent.SaveData(data);
        }
    }
}
