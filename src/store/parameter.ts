import { signal } from "@preact/signals-react";

export const parameter = signal({
  language: "en-US",
  with_original_language: "ko",
  sort_by: "popularity.desc",
  genres: "",
  air_date_year: "",
  page: 1,
  include_null_first_air_dates: false,
  with_type: 4,
  without_genres: "10767, 16, 10762"
});