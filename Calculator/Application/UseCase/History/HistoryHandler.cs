using Calculator.Application.Dto;
using Calculator.Infrastructure.Db;
using FluentResults;
using MediatR;

namespace Calculator.Application.UseCase.History;

public sealed class HistoryHandler(Context context) : IRequestHandler<HistoryQuery, Result<List<CalculationDto>>>
{
    public async Task<Result<List<CalculationDto>>> Handle(HistoryQuery request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}