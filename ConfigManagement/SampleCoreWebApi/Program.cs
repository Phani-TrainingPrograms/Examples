using Microsoft.Extensions.Options;
using SampleCoreLib;
using Microsoft.Extensions.Logging;
namespace SampleCoreWebApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            
            // Add services to the container.
            builder.Services.Configure<DllSettings>(builder.Configuration.GetSection("DllSettings"));
            builder.Services.AddSingleton<IDllComponent>((provider) =>
            {
                var settings = provider.GetRequiredService<IOptions<DllSettings>>().Value;
                var logger = provider.GetRequiredService<ILogger<DllComponent>>();   
                return new DllComponent(settings, logger);
            });
            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Logging.AddLog4Net();
            var app = builder.Build();
            
            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
