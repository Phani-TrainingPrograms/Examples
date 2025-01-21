# Example on creating a DLL and consuming it Web API with Config sections taken from Web API
### 1. **Define the Configuration POCO in the DLL**
Create a POCO class in your library that matches the configuration section:

```csharp
namespace MyClassLibrary
{
    public class LibrarySettings
    {
        public string FileName { get; set; }
        public string CreatedBy { get; set; }
    }
}
```

---

### 2. **Update the DLL to Use the Configuration**
Modify your DLL to accept the settings through dependency injection and utilize them in the `SaveData` function:

```csharp
namespace MyClassLibrary
{
    public interface IDataSaver
    {
        void SaveData(string data);
    }

    public class DataSaver : IDataSaver
    {
        private readonly LibrarySettings _settings;

        public DataSaver(LibrarySettings settings)
        {
            _settings = settings;
        }

        public void SaveData(string data)
        {
            if (string.IsNullOrWhiteSpace(_settings.FileName))
            {
                throw new InvalidOperationException("FileName cannot be null or empty.");
            }

            File.WriteAllText(_settings.FileName, data);
            Console.WriteLine($"Data saved to {_settings.FileName} by {_settings.CreatedBy}");
        }
    }
}
```

---

### 3. **Register the Configuration and Service in the Web API**
In the Web API project, bind the configuration to `LibrarySettings` and register the library service (`IDataSaver`):

#### Modify `Program.cs`:
```csharp
using MyClassLibrary;

var builder = WebApplication.CreateBuilder(args);

// Bind the LibrarySettings section from appsettings.json
builder.Services.Configure<LibrarySettings>(
    builder.Configuration.GetSection("LibrarySettings"));

// Register the DataSaver service
builder.Services.AddSingleton<IDataSaver>(provider =>
{
    // Resolve the LibrarySettings instance from DI
    var settings = provider.GetRequiredService<IOptions<LibrarySettings>>().Value;
    return new DataSaver(settings);
});

var app = builder.Build();

app.MapControllers();
app.Run();
```

---

### 4. **Use the Service in the Web API**
Inject the `IDataSaver` service into a controller and use it to call `SaveData`:

```csharp
using Microsoft.AspNetCore.Mvc;
using MyClassLibrary;

namespace MyWebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestController : ControllerBase
    {
        private readonly IDataSaver _dataSaver;

        public TestController(IDataSaver dataSaver)
        {
            _dataSaver = dataSaver;
        }

        [HttpPost("save")]
        public IActionResult SaveData([FromBody] string data)
        {
            _dataSaver.SaveData(data);
            return Ok("Data saved successfully.");
        }
    }
}
```

---

### 5. **Example `appsettings.json` File**
Your `appsettings.json` in the Web API project should look like this:

```json
{
  "LibrarySettings": {
    "FileName": "output.txt",
    "CreatedBy": "WebAPI User"
  }
}
```

---

### How This Works:
1. **Configuration Binding**: The `LibrarySettings` section from `appsettings.json` is bound to the `LibrarySettings` class.
2. **Dependency Injection**: The `DataSaver` service uses the injected configuration settings to perform its tasks.
3. **Separation of Concerns**: The Web API provides configuration, while the library focuses on functionality.

---

### Benefits:
- **Reusability**: The `DataSaver` service and `LibrarySettings` class are reusable across different projects.
- **Centralized Configuration**: The configuration remains in the Web API's `appsettings.json`.
- **Flexibility**: You can change the file name or creator without modifying the library code.

---

Would you like me to assist in testing this setup or extending it with additional functionality?

To configure **Log4Net** in a .NET application for logging, follow these steps. Log4Net is a powerful logging library that can write logs to various targets, such as files, databases, or remote systems.

---

### Step-by-Step Guide to Configure Log4Net in .NET

#### 1. **Install Log4Net NuGet Package**
Install the Log4Net package in your project:
```bash
dotnet add package log4net
```

---

#### 2. **Add a Log4Net Configuration File**
Create a configuration file named `log4net.config` in your project root.

##### Example `log4net.config` for File Logging:
```xml
<log4net>
  <root>
    <level value="ALL" />
    <appender-ref ref="FileAppender" />
  </root>

  <appender name="FileAppender" type="log4net.Appender.RollingFileAppender">
    <file value="logs/app.log" />
    <appendToFile value="true" />
    <rollingStyle value="Date" />
    <datePattern value="yyyyMMdd'.log'" />
    <staticLogFileName value="false" />
    <layout type="log4net.Layout.PatternLayout">
      <conversionPattern value="%date [%thread] %-5level %logger - %message%newline" />
    </layout>
  </appender>
</log4net>
```

---

#### 3. **Update `Program.cs` to Use Log4Net**
Configure Log4Net as the logging provider in your application.

##### Update `Program.cs`:
```csharp
using log4net;
using log4net.Config;
using Microsoft.Extensions.Logging;

var builder = WebApplication.CreateBuilder(args);

// Configure Log4Net
var log4NetConfigFile = "log4net.config";
var logRepository = LogManager.GetRepository(System.Reflection.Assembly.GetEntryAssembly());
XmlConfigurator.Configure(logRepository, new FileInfo(log4NetConfigFile));

// Add Log4Net as the logging provider
builder.Logging.ClearProviders();
builder.Logging.AddLog4Net(log4NetConfigFile);

builder.Services.AddControllers();

var app = builder.Build();
app.MapControllers();
app.Run();
```

---

#### 4. **Inject and Use Logger in Your Application**
Inject the `ILogger<T>` service and use it in your controllers or classes.

##### Example Controller:
```csharp
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace MyWebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestController : ControllerBase
    {
        private readonly ILogger<TestController> _logger;

        public TestController(ILogger<TestController> logger)
        {
            _logger = logger;
        }

        [HttpGet("log")]
        public IActionResult LogMessage()
        {
            _logger.LogInformation("This is an informational log message.");
            _logger.LogWarning("This is a warning log message.");
            _logger.LogError("This is an error log message.");
            return Ok("Log written.");
        }
    }
}
```

---

#### 5. **Verify Logs**
After running your application:
- Logs will be written to the `logs` directory, as specified in the `log4net.config` file.
- The log file will have a daily rolling pattern with the name format `app-yyyyMMdd.log`.

---
