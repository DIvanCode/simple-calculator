using System.Text.Json.Serialization;
using Calculator.Application.UseCase.Calculate;

namespace Calculator.Infrastructure.Api;

public sealed class CalculateRequest
{
    [JsonPropertyName("expr")]
    public required string Expr { get; init; }

    public CalculateCommand ToCommand() => new CalculateCommand(Expr);
}