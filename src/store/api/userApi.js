import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { nanoid } from "@reduxjs/toolkit";

const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://horse-joyous-lasagna.glitch.me",
  }),

  endpoints(builder) {
    return {
      fetchUser: builder.query({
        providesTags: (result, error, data) => {
          const tags = [{ type: "UsersLogInfo" }];
          return tags;
        },
        query: (username) => {
          return {
            url: "/user-info",
            method: "GET",
            params: {
              username: username,
            },
          };
        },
      }),

      searchUser: builder.query({
        query: ({ username, password }) => {
          return {
            url: "/user-info",
            method: "GET",
            params: {
              username: username,
              password: password,
            },
          };
        },
      }),

      addUser: builder.mutation({
        invalidatesTags: (result, error, data) => {
          return [{ type: "UsersLogInfo" }];
        },
        query: (obj) => {
          return {
            url: "/user-info",
            method: "POST",
            body: {
              firstName: obj.firstName,
              lastName: obj.lastName,
              username: obj.username,
              password: obj.password,
              id: nanoid(),
            },
          };
        },
      }),
    };
  },
});

export const { useAddUserMutation, useFetchUserQuery, useSearchUserQuery } =
  userApi;
export { userApi };
