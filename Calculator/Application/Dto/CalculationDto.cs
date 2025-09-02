using System.Text.Json.Serialization;

namespace Calculator.Application.Dto;

public sealed class CalculationDto
{
    [JsonPropertyName("expr")]
    public required string Expr { get; init; }
    
    [JsonPropertyName("res")]
    public required string Res { get; init; }
}