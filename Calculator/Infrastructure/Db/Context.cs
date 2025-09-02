using System.Reflection;
using Calculator.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace Calculator.Infrastructure.Db;

public sealed class Context : DbContext
{
    public DbSet<Calculation> Calculations => Set<Calculation>();
    
    public Context(DbContextOptions<Context> options) : base(options)
    {
    }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
    }
}