defmodule Words do
  @doc """
  Count the number of words in the sentence.

  Words are compared case-insensitively.
  """

  @spec count(String.t) :: map
  def count(sentence) do
    words = String.downcase(sentence)
    |> String.split(~r/[^[:alpha:][:digit:]-]/u, trim: true)
    |> Enum.reduce(%{}, &create_map/2)
  end

  @spec create_map(String.t, map) :: map
  defp create_map(word, map) do
    Map.update(map, word, 1, fn count -> count + 1 end)
  end
end