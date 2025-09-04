using Calculator.Application.Dto;
using FluentResults;
using MediatR;

namespace Calculator.Application.UseCase.Calculate;

public sealed class CalculateCommand : IRequest<Result<CalculationResultDto>>
{
    public required string Expr { get; init; }
}