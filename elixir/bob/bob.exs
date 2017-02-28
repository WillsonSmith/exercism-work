defmodule Bob do
  def hey(input) do
    cond do
      empty?(input) ->
        "Fine. Be that way!"
      question?(input) ->
        "Sure."
      shouting?(input) ->
        "Whoa, chill out!"
      true ->
        "Whatever."
    end
  end

  defp question?(input) do
    String.equivalent?(String.last(input), "?")
  end
  
  defp shouting?(input) do
    !String.equivalent?(String.downcase(input), input) && String.equivalent?(String.upcase(input), input)
  end
  
  defp empty?(input) do
    string = String.trim(input)
    String.length(string) < 1
  end
end
