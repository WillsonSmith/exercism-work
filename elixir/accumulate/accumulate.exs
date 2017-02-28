defmodule Accumulate do
  @doc """
    Given a list and a function, apply the function to each list item and
    replace it with the function's return value.

    Returns a list.

    ## Examples

      iex> Accumulate.accumulate([], fn(x) -> x * 2 end)
      []

      iex> Accumulate.accumulate([1, 2, 3], fn(x) -> x * 2 end)
      [2, 4, 6]

  """

  @spec accumulate(list, (any -> any)) :: list
  def accumulate(list, fun) do
    assemble_list([], list, fun)
  end

  defp assemble_list(current, list, fun) when length(list) == 0 do current end
  defp assemble_list(current, list, fun) do
    new = current ++ [fun.(List.first(list))]
    assemble_list(new, List.delete_at(list, 0), fun)
  end

end
