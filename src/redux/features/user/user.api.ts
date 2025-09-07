import { baseApi } from "@/redux/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userInfo: builder.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),
    allUserInfo: builder.query({
      query: () => ({
        url: "/user/all-users",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),
    allAgentInfo: builder.query({
      query: () => ({
        url: "/user/all-agents",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),
    updateProfile: builder.mutation({
      query: (payload) => ({
        url: "/user/update-profile",
        method: "PATCH",
        data: payload,
      }),
    }),
    updateUserByAdmin: builder.mutation({
      query: ({ userId, payload }) => ({
        url: `/user/update/${userId}`,
        method: "PATCH",
        data: payload,
      }),
      invalidatesTags: ["USER"],
    }),
  }),
});

export const {
  useUserInfoQuery,
  useAllUserInfoQuery,
  useAllAgentInfoQuery,
  useUpdateProfileMutation,
  useUpdateUserByAdminMutation,
} = authApi;
