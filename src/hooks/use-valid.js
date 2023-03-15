import { useFetchUserQuery } from "../store";

export function useValid(username) {
  const { data, error, isFetching } = useFetchUserQuery(username);

  return { data, error, isFetching };
}
