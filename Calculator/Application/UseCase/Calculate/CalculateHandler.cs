using Calculator.Application.Dto;
using Calculator.Domain.Models;
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
        throw new NotImplementedException();
    }
}