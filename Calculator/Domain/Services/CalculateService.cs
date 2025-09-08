using Calculator.Domain.Errors;
using Calculator.Domain.Models;
using FluentResults;
using IronPython.Hosting;

namespace Calculator.Domain.Services;

public interface ICalculateService
{
    Result<Calculation> Calculate(string expr);
}

public sealed class CalculateService : ICalculateService
{
    public Result<Calculation> Calculate(string expr)
    {
        var engine = Python.CreateEngine();
        var scope = engine.CreateScope();

        try
        {
            var res = engine.Execute(expr, scope).ToString();
            return new Calculation(expr, res);
        }
        catch (Exception ex)
        {
            return new InvalidExprError(ex.Message);
        }
    }
}