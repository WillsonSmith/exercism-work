require IEx
defmodule Raindrops do
  @raindrops %{
    "3" => "Pling",
    "5" => "Plang",
    "7" => "Plong"
  }
  @doc """
  Returns a string based on raindrop factors.

  - If the number contains 3 as a prime factor, output 'Pling'.
  - If the number contains 5 as a prime factor, output 'Plang'.
  - If the number contains 7 as a prime factor, output 'Plong'.
  - If the number does not contain 3, 5, or 7 as a prime factor,
    just pass the number's digits straight through.
  """
  @spec convert(pos_integer) :: String.t
  def convert(number) do
    string = Enum.reduce([3, 5, 7], "", &assemble_string(number, &1, &2))
    if (String.length(string) > 0), do: string, else: to_string(number)
  end

  @spec assemble_string(integer, integer, String.t) :: String.t
  defp assemble_string(number, factor, string) when rem(number, factor) == 0 do
    factor_word = @raindrops[to_string(factor)]
    "#{string}#{factor_word}"
  end
  defp assemble_string(_number, _factor, string) do string end
end
