using Calculator.Application.Dto;
using FluentResults;
using MediatR;

namespace Calculator.Application.UseCase.Calculate;

public sealed class CalculateCommand(string Expr) : IRequest<Result<CalculationResultDto>>;