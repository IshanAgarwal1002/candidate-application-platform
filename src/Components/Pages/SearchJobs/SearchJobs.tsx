import React, { FC } from "react";
import './SearchJobs.scss';
import { RootState, useAppSelector } from "../../../Store";

interface Props {}

const SearchJobs: FC<Props> = () => {
  const searchJobsData = useAppSelector((state: RootState) => state.searchJobsData);
  return (
    <div>Search Jobs</div>
  );
};

export default SearchJobs;