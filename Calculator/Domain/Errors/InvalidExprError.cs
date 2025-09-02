using FluentResults;

namespace Calculator.Domain.Errors;

public sealed class InvalidExprError : Error
{
    public InvalidExprError(string message) : base(message)
    {
    }
}