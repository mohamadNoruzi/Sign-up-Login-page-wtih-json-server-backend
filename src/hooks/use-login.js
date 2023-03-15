import { useSearchUserQuery } from "../store";

export function useLogin({ username, password }) {
  const { data, error, isFetching } = useSearchUserQuery({
    username,
    password,
  });
  return { data, error, isFetching };
}
