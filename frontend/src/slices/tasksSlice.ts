import { TASKS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const tasksApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addTask: builder.mutation({
      query: () => ({
        url: `${TASKS_URL}`,
        method: 'POST',
      }),
      invalidatesTags: ['Tasks'],
    }),
    getTasks: builder.query({
      query: () => ({
        url: TASKS_URL,
      }),
      providesTags: ['Tasks'],
      keepUnusedDataFor: 5,
    }),
    getTask: builder.query({
      query: (taskId) => ({
        url: `${TASKS_URL}/${taskId}`,
      }),
    }),
    deleteTask: builder.mutation({
      query: (taskId) => ({
        url: `${TASKS_URL}/${taskId}`,
        method: 'DELETE',
      }),
    }),
    updateTask: builder.mutation({
      query: (data) => ({
        url: `${TASKS_URL}/${data.taskId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Tasks'],
    }),
  }),
});

export const {
  useAddTaskMutation,
  useGetTasksQuery,
  useGetTaskQuery,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} = tasksApiSlice;