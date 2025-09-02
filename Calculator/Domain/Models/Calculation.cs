namespace Calculator.Domain.Models;

public sealed class Calculation
{
    public int Id { get; init; }
    public string Expr { get; init; }
    public string Res { get; init; }

    public Calculation(string expr, string res)
    {
        Expr = expr;
        Res = res;
    }
}