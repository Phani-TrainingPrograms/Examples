using Microsoft.Extensions.Logging;
using System.Runtime;

namespace SampleCoreLib
{
    public interface IDllComponent
    {
        void SaveData(string csvData);
    }

    public class DllComponent : IDllComponent
    {
        private readonly DllSettings _dllSettings;
        private ILogger<DllComponent> _logger;
        public DllComponent(DllSettings settings, ILogger<DllComponent> logger)
        {
            this._logger = logger;
            this._dllSettings = settings;
        }

        public void SaveData(string csvData)
        {
            this._logger.LogInformation($"Data is saved to {this._dllSettings.FileName}");
            File.AppendAllText(this._dllSettings.FileName, csvData);
            this._logger.LogInformation($"Data saved to {this._dllSettings.FileName} by {this._dllSettings.CreatedBy}");
        }
    }
}
