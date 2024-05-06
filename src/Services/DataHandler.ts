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
      serializeQueryArgs: ({ queryArgs }) => {
        const newQueryArgs = { limit: queryArgs.limit };
        return newQueryArgs;
      },
      merge: (currentCache, newItems) => {
        console.log('123 currentCache', currentCache);
        if (currentCache) {
          return {
            jdList: [...currentCache.jdList, ...newItems.jdList],
            totalCount: newItems.totalCount,
          };
        }
        return newItems;
      },
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