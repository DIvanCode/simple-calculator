using System.Reflection;
using Calculator.Infrastructure.Db;
using EnsureThat;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Migrations;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddMvc();
builder.Services.AddControllers();

builder.Services.AddMediatR(config => config.RegisterServicesFromAssembly(Assembly.GetExecutingAssembly()));

var dbConnectionOptions = builder.Configuration.GetSection(DbOptions.SectionName).Get<DbOptions>();
EnsureArg.IsNotNull(dbConnectionOptions, nameof(dbConnectionOptions));

builder.Services.AddDbContext<Context>(options =>
{
    options.UseNpgsql(
        dbConnectionOptions.ConnectionString,
        providerOptions =>
        {
            providerOptions.MigrationsHistoryTable(HistoryRepository.DefaultTableName);
        });
});

builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.MapControllers();

app.Run();
