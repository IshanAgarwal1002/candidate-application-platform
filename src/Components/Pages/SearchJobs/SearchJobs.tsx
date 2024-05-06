import React, { FC, useCallback, useState } from "react";
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Dropdown } from "../../Atoms";
import { useGetSearchJobsDataQuery } from "../../../Services/DataHandler";
import { JobData, SearchJobsAPIBodyData } from "../../../Shared/Types";
import { JobCard } from "../../Organisms";
import { CONSTANTS, LOCATION_TYPE_LIST, ROLES_LIST, TOTAL_EMPLOYEE_LIST, YEARS_EXPERIENCE_LIST, SALARY_LIST } from "../../../Shared/Constants";
import { useInfiniteScroll } from "../../../Hooks";
import './SearchJobs.scss';

interface Props {}

const SearchJobs: FC<Props> = () => {
  const [apiBodyData, setApiBodyData] = useState<SearchJobsAPIBodyData>({
    limit: 10,
    offset: 0,
  });
  const { data, isError, isLoading } = useGetSearchJobsDataQuery(apiBodyData);

  const updateApiBodyData = useCallback((): void => {
    setApiBodyData((prev) => ({ limit: prev.limit, offset: prev.offset + 10 }));
  }, [setApiBodyData]);

  const ref = useInfiniteScroll(updateApiBodyData);

  console.log('123 ', data, isError, isLoading);

  const handleOnSelect = useCallback(() => {}, []);

  if (isError) return <div>Error</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <Box className="search-jobs-wrapper" component="div">
      <Box className="filters-wrapper" component="div">
        <Dropdown label={CONSTANTS.EXPERIENCE} dropdownList={YEARS_EXPERIENCE_LIST} handleOnSelect={handleOnSelect} />
        <Dropdown label={CONSTANTS.ROLES} dropdownList={ROLES_LIST} multiSelect handleOnSelect={handleOnSelect} />
        <Dropdown label={CONSTANTS.NUMBER_OF_EMPLOYEES} dropdownList={TOTAL_EMPLOYEE_LIST} multiSelect handleOnSelect={handleOnSelect} />
        <Dropdown label={CONSTANTS.REMOTE} dropdownList={LOCATION_TYPE_LIST} multiSelect handleOnSelect={handleOnSelect} />
        <Dropdown label={CONSTANTS.MINIMUM_BASE_PAY_SALARY} dropdownList={SALARY_LIST} handleOnSelect={handleOnSelect} />

      </Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {data?.jdList.map((job: JobData, index: number) => {
          return (
            <Grid key={`job-${index}`}>
              <JobCard jobData={job} daysPassed={5} />
            </Grid>
          );
        })}
      </Grid>
      <div ref={ref}></div>
    </Box>
  );
};

export default SearchJobs;