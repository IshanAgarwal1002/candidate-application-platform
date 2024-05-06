import React, { FC } from "react";
import { Box } from '@mui/material';
import { CustomTypography, CustomLink } from "../../Atoms";
import { CONSTANTS, CURRENCY_MAP } from "../../../Shared/Constants";
import './JobCardHeader.scss';

interface Props {
  jdLink: string;
  maxJdSalary: number | null;
  minJdSalary: number | null,
  salaryCurrencyCode: string;
  location: string;
  jobRole: string;
  companyName: string;
  logoUrl: string;
}

/**
 * Job Card's actions
 * @param jdLink
 * @param maxJdSalary 
 * @param minJdSalary 
 * @param salaryCurrencyCode 
 * @param location 
 * @param jobRole 
 * @param companyName 
 * @param logoUrl 
 */
const JobCardHeader: FC<Props> = ({
  jdLink,
  maxJdSalary,
  minJdSalary,
  salaryCurrencyCode,
  location,
  jobRole,
  companyName,
  logoUrl,
}) => {
  return (
    <Box className="job-card-header" component='div'>
      <Box className="company-details-wrapper" component='div'>
        <Box className="company-logo" component='img' src={logoUrl} alt={'logo'} />
        <Box className="company-details" component='div'>
          <CustomLink href={jdLink}>
            <CustomTypography customCls="title company-name">
              {companyName}
            </CustomTypography>
          </CustomLink>
          <CustomTypography customCls="sub-title job-role">
            {jobRole}
          </CustomTypography>
          <CustomTypography customCls="type-tiny job-location">
            {location}
          </CustomTypography>
        </Box>
      </Box>
      <CustomTypography customCls="type-normal salary-details">
        {`${CONSTANTS.ESTIMATED_SALARY}: ${CURRENCY_MAP[salaryCurrencyCode]}${minJdSalary ? `${minJdSalary} - ` : ''}${maxJdSalary ? maxJdSalary : ''} LPA ✅`}
      </CustomTypography >
    </Box>
  );
};

export default JobCardHeader;