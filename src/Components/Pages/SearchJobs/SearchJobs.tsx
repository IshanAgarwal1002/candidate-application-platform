import React, { FC } from "react";
import './SearchJobs.scss';
import { useGetSearchJobsDataQuery } from "../../../Services/DataHandler";
import { SearchJobsAPIBodyData } from "../../../Shared/Types";

interface Props {}

const bodyData: SearchJobsAPIBodyData = {
  limit: 10,
  offset: 0,
};
const SearchJobs: FC<Props> = () => {
  const { data, isError, isLoading } = useGetSearchJobsDataQuery(bodyData);
  console.log('123 ', data, isError, isLoading);
  return (
    <div>Search Jobs</div>
  );
};

export default SearchJobs;