import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => 'posts',
            providesTags: ['Posts']
        }),
        getPostById: builder.query({
            query: (id) => `posts/${id}`
        }),
        addPost: builder.mutation({
            query: (post) => ({
                url: 'posts',
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Posts']
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
    })
});


export const {
    useGetPostsQuery,
    useGetPostByIdQuery,
    useAddPostMutation,
    useUpdatePostMutation,
    useDeletePostMutation
} = apiSlice;
