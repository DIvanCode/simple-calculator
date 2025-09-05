using Calculator.Application.Dto;
using Calculator.Infrastructure.Db;
using FluentResults;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Calculator.Application.UseCase.History;

public sealed class HistoryHandler(Context context) : IRequestHandler<HistoryQuery, Result<List<CalculationDto>>>
{
    public async Task<Result<List<CalculationDto>>> Handle(HistoryQuery request, CancellationToken cancellationToken)
    {
        var calculations = await context.Calculations
            .OrderByDescending(c => c.Id)
            .Select(c => new CalculationDto { Expr = c.Expr, Res = c.Res })
            .ToListAsync();
        return Result.Ok(calculations);

    }
}