import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => 'posts',
        }),
        getPost: builder.query({
            query: (id) => `posts/${id}`,
            providesTags: (result, error, id) => [{ type: 'Posts', id }],
        }),

        addPost: builder.mutation({
            query: (newPost) => ({
                url: 'posts',
                method: 'POST',
                body: newPost,
            }),
        }),
        updatePost: builder.mutation({
            query: ({ id, ...rest }) => ({
                url: `posts/${id}`,
                method: 'PUT',
                body: rest,
            }),
            invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
        }),

        deletePost: builder.mutation({
            query: (id) => ({
                url: `posts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
        }),

    }),
});

export const { useGetPostsQuery, useAddPostMutation, useUpdatePostMutation, useDeletePostMutation } = postsApi;
