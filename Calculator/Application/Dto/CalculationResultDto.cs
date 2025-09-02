using System.Text.Json.Serialization;

namespace Calculator.Application.Dto;

public sealed class CalculationResultDto
{
    [JsonPropertyName("res")]
    public required string Res { get; init; }
}