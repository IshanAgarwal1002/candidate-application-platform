import React, { FC } from "react";
import { Card } from '@mui/material';
import { CustomBadge } from "../../Atoms";
import { JobCardHeader, JobCardContent, JobCardActions } from "../../Molecules";
import { JobData } from "../../../Shared/Types";
import { CONSTANTS } from "../../../Shared/Constants";
import './JobCard.scss';

interface Props {
  jobData: JobData;
  daysPassed: number;
}

/**
 * Job Card
 * @param jobData
 * @param daysPassed
 */
const JobCard: FC<Props> = ({ jobData, daysPassed }) => {
  return (
    <Card className="job-card">
      <CustomBadge customCls="primary job-date-info">
        {`${CONSTANTS.POSTED} ${daysPassed} ${CONSTANTS.DAYS_AGO}`}
      </CustomBadge>
      <JobCardHeader
        jdLink={jobData.jdLink}
        maxJdSalary={jobData.maxJdSalary}
        minJdSalary={jobData.minJdSalary}
        salaryCurrencyCode={jobData.salaryCurrencyCode}
        location={jobData.location}
        jobRole={jobData.jobRole}
        companyName={jobData.companyName}
        logoUrl={jobData.logoUrl}
      />
      <JobCardContent
        jdLink={jobData.jdLink}
        jobDetailsFromCompany={jobData.jobDetailsFromCompany}
        minExp={jobData.minExp}
        maxExp={jobData.maxExp}
      />
      <JobCardActions applyLink="" referralLink="" />
    </Card>
  );
};

export default JobCard;