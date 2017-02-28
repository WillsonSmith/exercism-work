defmodule RunLengthEncoder do
  @doc """
  Generates a string where consecutive elements are represented as a data value and count.
  "AABBBCCCC" => "2A3B4C"
  For this example, assume all input are strings, that are all uppercase letters.
  It should also be able to reconstruct the data into its original form.
  "2A3B4C" => "AABBBCCCC"
  """
  @spec encode(String.t) :: String.t
  def encode(string) do
    do_encode(String.graphemes(string))
    |> Enum.reduce("", fn(current_item, string_output) ->
      {letter, amount} = current_item
      filtered_amount = if amount > 1 do
        amount
      else
        ""
      end
      "#{string_output}#{filtered_amount}#{letter}"
    end)
  end

  @spec decode(String.t) :: String.t
  def decode(string) do
  end

  defp do_encode(list, built \\ [])
  defp do_encode(list, built) when length(built) < 1 do
    do_encode(List.delete_at(list, 0), [{List.first(list), 1}])
  end

  defp do_encode(list, built) when length(list) > 0 do
    new_list = List.delete_at(list, 0)
    first_item = List.first(list)
    last_built = List.last(built)

    cond do
      equal?(first_item, last_built) ->
        do_encode(new_list, Enum.drop(built, -1) ++ [{first_item, elem(last_built, 1) + 1}])
      !equal?(first_item, last_built) ->
        do_encode(new_list, built ++ [{first_item, 1}])
    end
  end

  defp do_encode(_list, built) do
    built
  end

  defp equal?(first_item, last_built) do
    first_item == elem(last_built, 0)
  end
end
