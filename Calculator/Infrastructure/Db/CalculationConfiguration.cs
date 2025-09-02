using Calculator.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Calculator.Infrastructure.Db;

public sealed class CalculationEntityConfiguration : IEntityTypeConfiguration<Calculation>
{
    public void Configure(EntityTypeBuilder<Calculation> builder)
    {
        builder.ToTable("Calculations");

        builder.HasKey(c => c.Id);

        builder.Property(c => c.Id)
            .ValueGeneratedOnAdd()
            .UseIdentityByDefaultColumn();

        builder
            .Property(calculation => calculation.Expr)
            .HasColumnName("expr")
            .HasColumnType("text");

        builder
            .Property(calculation => calculation.Res)
            .HasColumnName("res")
            .HasColumnType("text");
    }
}