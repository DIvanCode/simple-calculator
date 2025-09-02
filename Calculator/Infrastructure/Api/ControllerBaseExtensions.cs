using Calculator.Domain.Errors;
using FluentResults;
using Microsoft.AspNetCore.Mvc;

namespace Calculator.Infrastructure.Api;

public static class ControllerBaseExtensions
{
    public static ActionResult<TResult> HandleResult<TResult>(this ControllerBase controllerBase, Result<TResult> result)
        => result.IsSuccess ? new OkObjectResult(result.Value) : controllerBase.HandleError(result.Errors);
    
    private static ObjectResult HandleError(this ControllerBase controllerBase, IEnumerable<IError> errors)
    {
        var error = errors.FirstOrDefault();
        
        var statusCode = error switch
        {
            InvalidExprError => StatusCodes.Status400BadRequest,
            _ => StatusCodes.Status500InternalServerError
        };
        
        return controllerBase.StatusCode(statusCode, error?.Message ?? "An error has occurred.");
    }
}