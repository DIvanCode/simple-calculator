using Calculator.Application.Dto;
using Calculator.Domain.Services;
using Calculator.Infrastructure.Db;
using FluentResults;
using MediatR;

namespace Calculator.Application.UseCase.Calculate;

public sealed class CalculateHandler(Context context, ICalculateService calculateService)
    : IRequestHandler<CalculateCommand, Result<CalculationResultDto>>
{
    public async Task<Result<CalculationResultDto>> Handle(CalculateCommand request, CancellationToken cancellationToken)
    {
        var calcResult = calculateService.Calculate(request.Expr);
        
        if (calcResult.IsFailed)
        {
            return Result.Fail<CalculationResultDto>(calcResult.Errors);
        }

        await context.Calculations.AddAsync(calcResult.Value, cancellationToken);
        await context.SaveChangesAsync(cancellationToken);

        var resultDto = new CalculationResultDto()
        {
            Res = calcResult.Value.Res
        };
        
        return Result.Ok(resultDto);
    }
}