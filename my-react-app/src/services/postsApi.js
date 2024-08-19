import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => 'posts',
        }),
        getPostById: builder.query({
            query: (id) => `posts/${id}`,
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
        }),
        deletePost: builder.mutation({
            query: (id) => ({
                url: `posts/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const {
    useGetPostsQuery,
    useGetPostByIdQuery,
    useAddPostMutation,
    useUpdatePostMutation,
    useDeletePostMutation,
} = postsApi;
