namespace Calculator.Infrastructure.Db;

public sealed class DbOptions
{
    public const string SectionName = "Db";

    public required string ConnectionString { get; init; }
}