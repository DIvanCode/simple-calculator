using Calculator.Domain.Models;

namespace Calculator.Domain.Services;

public interface ICalculateService
{
    Calculation Calculate(string expr);
}

public sealed class CalculateService : ICalculateService
{
    public Calculation Calculate(string expr)
    {
        throw new NotImplementedException();
    }
}