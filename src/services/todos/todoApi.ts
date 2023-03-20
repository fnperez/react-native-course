import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'
import { AddTodo, EditTodo, BrowseResponse } from './types'

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: retry(
    fetchBaseQuery({
      baseUrl: 'http://10.0.2.2:3000/api/v1/todo',
    }),
    {
      maxRetries: 10,
      backoff(attempt, maxRetries) {
        return new Promise((resolve, reject) => {
          if (attempt <= maxRetries) {
            setTimeout(resolve, 5000)

            return
          }

          reject()
        })
      },
    },
  ),
  endpoints: builder => ({
    browse: builder.query({
      query: () => '/',
      transformResponse: (response: BrowseResponse) => response.todos,
    }),
    read: builder.query({
      query: (id: string) => `/${id}`,
    }),
    edit: builder.mutation({
      query: (payload: EditTodo) => ({
        url: `/${payload._id}`,
        method: 'PUT',
        body: payload,
      }),
    }),
    add: builder.mutation({
      query: (payload: AddTodo) => ({
        url: '/',
        method: 'POST',
        body: payload,
      }),
    }),
    delete: builder.mutation({
      query: (id: string) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
    }),
    complete: builder.mutation({
      query: (id: string) => ({
        url: `/${id}`,
        method: 'PATCH',
      }),
    }),
  }),
})

export const {
  useAddMutation,
  useCompleteMutation,
  useDeleteMutation,
  useEditMutation,
  useLazyBrowseQuery,
  useLazyReadQuery,
  useBrowseQuery,
  useReadQuery,
} = todoApi
