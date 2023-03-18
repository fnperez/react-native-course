import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { AddTodo, EditTodo } from './types'

export const todoApi = createApi({
	reducerPath: 'todoApi',
	baseQuery: fetchBaseQuery({ 
		baseUrl:' http://localhost:3000/api/v1/todos'
	}),
	endpoints: (builder) => ({
		browse: builder.query({
			query: () => '/'
		}),
		read: builder.query({
			query: (id: string) => `/${id}`
		}),
		edit: builder.mutation({
			query:( payload: EditTodo) => ({
				url: `/${payload._id}`,
				method: 'PUT',
				body: payload
			})
		}),
		add: builder.mutation({
			query:( payload: AddTodo ) => ({
				url: '/',
				method: 'POST',
				body: payload
			})
		}),
		delete: builder.mutation({
			query:( id: string ) => ({
				url: `/${id}`,
				method: 'DELETE'
			})
		}),
		complete: builder.mutation({
			query: ( id: string ) => ({
				url: `/${id}`,
				method: 'PATCH'
			})
		})
	})
})

export const {
	 useAddMutation,
	 useCompleteMutation,
	 useDeleteMutation,
	 useEditMutation,
	 useLazyBrowseQuery,
	 useLazyReadQuery,
	 useBrowseQuery,
	 useReadQuery
} = todoApi