using Calculator.Application.Dto;
using Calculator.Application.UseCase.History;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Calculator.Infrastructure.Api;

[ApiController]
[Route("/api")]
public sealed class Controller(IMediator mediator) : ControllerBase
{
    [HttpPost("calculate")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<ActionResult<CalculationResultDto>> CalculateAsync(
        CalculateRequest request,
        CancellationToken cancellationToken)
    {
        var command = request.ToCommand();
        var result = await mediator.Send(command, cancellationToken);
        return this.HandleResult(result);
    }
    
    [HttpGet("history")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<ActionResult<List<CalculationDto>>> CalculateAsync(CancellationToken cancellationToken)
    {
        var query = new HistoryQuery();
        var result = await mediator.Send(query, cancellationToken);
        return this.HandleResult(result);
    }
}