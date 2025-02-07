# Developing WebAPI with JWT Token Feature
1. Develop a basic Web API project using Visual Studio. 

## Enable CORS in Program.cs
Modify your Program.cs file to allow CORS from specific origins:
```
    //enable cors
    builder.Services.AddCors((options =>
    {
        options.AddPolicy("allowAll", policy =>
        {
            policy.AllowAnyHeader();
            policy.AllowAnyOrigin();
            policy.AllowAnyMethod();
        });
    }));
```
Ensure the CORS middleware are added to the Application:
```
 app.UseCors("allowAll");
```

## Add Jwt Authentication to the Project
1. Add Microsoft.AspNetCore.Authentication.JwtBearer package from the Nuget
2. Modify Program.cs to add JWT authentication:
```
//Add Jwt Authentication
    builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
        .AddJwtBearer(options =>
        {
            options.TokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidateAudience = true,
                ValidateLifetime = true,
                ValidateIssuerSigningKey = true,
                ValidIssuer = builder.Configuration["Jwt:Issuer"],
                ValidAudience = builder.Configuration["Jwt:Audience"],
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:SecretKey"]))
            };
        });
```
3. Ensure that the appsettings.json has the jwt keys
```
"Jwt": {
    "Issuer": "your-issuer",
    "Audience": "your-audience",
    "SecretKey": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  }

```
4. Apply the authentication Middleware to the Application like we did for CORS
```
    app.UseAuthentication();
    app.UseAuthorization();
```
5. Apply Authorize filter to the Service[Authorize]
6. Create a Login Endpoint for UR Controller that allows Anonymous Access and generates the JWT
```
        [AllowAnonymous]
        [HttpPost("login")]
        public IActionResult Login([FromBody] UserLogin user)
        {
            // Validate the user credentials (this is just a dummy check, replace with your logic)
            if(user.Username == "test" && user.Password == "password")
            {
                var token = GenerateJwtToken(user.Username);
                return Ok(new { token });
            }
            else
            {
                return Unauthorized();
            }
        }

        private string GenerateJwtToken(string username)
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(privateKey));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, username),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var token = new JwtSecurityToken(
                issuer: "your-issuer",
                audience: "your-audience",
                claims: claims,
                expires: DateTime.UtcNow.AddHours(1),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
```

## Test the Application
### CORS: 
Try calling your API from the frontend and check if it's blocked.

### JWT Authentication:
- Call the login endpoint to get a JWT token.
- Use the token in the Authorization header (Bearer <your_token>) when calling a protected API.