using Calculator.Application.Dto;
using FluentResults;
using MediatR;

namespace Calculator.Application.UseCase.History;

public sealed class HistoryQuery : IRequest<Result<List<CalculationDto>>>;