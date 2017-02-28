require IEx
defmodule StringSeries do
  @doc """
  Given a string `s` and a positive integer `size`, return all substrings
  of that size. If `size` is greater than the length of `s`, or less than 1,
  return an empty list.
  """
  @spec slices(s :: String.t(), size :: integer) :: list(String.t())
  def slices(s, size) do
    String.graphemes(s)
    |> build_slices(size)
  end

  @spec build_slices(list :: list(String.t), size :: integer, current :: list) :: String.t
  defp build_slices(list, size, current \\ [])
  defp build_slices(_list, size, current) when size <= 0 do current end
  defp build_slices(list, size, current) when size > length(list) do current end
  defp build_slices(list, size, current) when length(list) < size do current end
  defp build_slices(list, size, current) do
    set = Enum.join(Enum.take(list, size), "")
    build_slices(List.delete_at(list, 0), size, current ++ [set])
  end
end

