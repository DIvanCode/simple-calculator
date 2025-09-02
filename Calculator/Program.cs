var builder = WebApplication.CreateBuilder(args);

builder.Services.AddMvc();
builder.Services.AddControllers();

builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.MapControllers();

app.Run();
