defmodule Acronym do
  @space_captial_regex ~r/((\s|[-])|(?=[A-Z]))/
  @doc """
  Generate an acronym from a string.
  "This is a string" => "TIAS"
  """
  @spec abbreviate(String.t()) :: String.t()
  def abbreviate(string) do
    String.split(string, @space_captial_regex, trim: true)
    |> Enum.map(&upcase_first_char/1)
    |> Enum.join("")
  end

  @spec upcase_first_char(String.t) :: String.t
  defp upcase_first_char(string) do
    String.upcase(string)
    |> String.first
  end
end
