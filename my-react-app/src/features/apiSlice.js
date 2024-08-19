import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => 'posts',
        }),
        addPost: builder.mutation({
            query: (newPost) => ({
                url: 'posts',
                method: 'POST',
                body: newPost,
            }),
        }),
        updatePost: builder.mutation({
            query: (post) => ({
                url: `posts/${post.id}`,
                method: 'PUT',
                body: post,
            }),
        }),
        deletePost: builder.mutation({
            query: (postId) => ({
                url: `posts/${postId}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const { useGetPostsQuery, useAddPostMutation, useUpdatePostMutation, useDeletePostMutation } = apiSlice;
