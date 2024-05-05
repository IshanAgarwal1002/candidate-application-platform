import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import EnvUtils from './EnvUtils';
import { SearchJobsAPIBodyData, SearchJobsData } from '../Shared/Types';

export const DataHandler = createApi({
  reducerPath: 'dataHandler',
  baseQuery: fetchBaseQuery({ baseUrl: EnvUtils.getApiHost() }),
  endpoints: (builder) => ({
    // Search Jobs API related
    getSearchJobsData: builder.query<SearchJobsData, SearchJobsAPIBodyData>({
      query: (bodyData: SearchJobsAPIBodyData) => ({
        url: EnvUtils.getSearchJobsApi(),
        method: 'POST',
        body: bodyData,
        headers: {
          "Content-Type": "application/json",
        }
      }),
      // Pick out data and prevent nested properties in a hook or selector
      transformResponse: (response: SearchJobsData, meta, arg) => response,
      transformErrorResponse: (
        response: { status: string | number },
        meta,
        arg,
      ) => response.status,
    }),
  }),
});

export const { useGetSearchJobsDataQuery } = DataHandler;