import React, { FC } from "react";
import { Box } from '@mui/material';
import { CustomTypography, CustomLink } from "../../Atoms";
import { CONSTANTS } from "../../../Shared/Constants";
import './JobCardContent.scss';

interface Props {
  jdLink: string;
  jobDetailsFromCompany: string;
  minExp: number | null;
  maxExp: number | null;
}

/**
 * Job Card's content
 * @param jdLink
 * @param jobDetailsFromCompany 
 * @param minExp 
 * @param maxExp 
 */
const JobCardContent: FC<Props> = ({
  jdLink,
  jobDetailsFromCompany,
  minExp,
  maxExp,
}) => {
  return (
    <Box className="card-content" component='div'>
      <Box className="about-job-wrapper" component='div'>
        <CustomTypography customCls="heading about-company">
          {CONSTANTS.ABOUT_COMPANY}
        </CustomTypography>
        <CustomTypography customCls="type-normal about-us">
          {CONSTANTS.ABOUT_US}
        </CustomTypography>
        <Box className="about-job" component='div'>
          {jobDetailsFromCompany}
        </Box>
        <Box className="view-job-wrapper" component='div'>
          <CustomLink customCls="link-blue job-link" href={jdLink}>
            {CONSTANTS.VIEW_JOB}
          </CustomLink>
        </Box>
      </Box>
      <Box className="job-experience-wrapper" component='div'>
        <CustomTypography customCls="title">
          {CONSTANTS.MINIMUM_EXPERIENCE}
        </CustomTypography>
        <CustomTypography customCls="sub-title">
          {minExp ? `${minExp} ${CONSTANTS.YEARS}` : CONSTANTS.NOT_SPECIFIED}
        </CustomTypography>
      </Box>
    </Box>
  );
};

export default JobCardContent;