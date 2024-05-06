import React, { FC } from "react";
import { CardActions } from '@mui/material';
import { CustomButton } from "../../Atoms";
import { CONSTANTS } from "../../../Shared/Constants";
import './JobCardActions.scss';

interface Props {
  applyLink: string;
  referralLink: string;
}

/**
 * Job Card's actions
 * @param applyLink
 * @param referralLink 
 */
const JobCardActions: FC<Props> = ({
  applyLink,
  referralLink,
}) => {
  return (
    <CardActions className="card-actions-wrapper" disableSpacing>
      <CustomButton customCls="primary apply-button" href={applyLink}>
        {CONSTANTS.EASY_APPLY}
      </CustomButton>
      <CustomButton customCls="secondary referral-button" href={referralLink}>
        {CONSTANTS.UNLOCK_REFERRAL_ASKS}
      </CustomButton>
    </CardActions>
  );
};

export default JobCardActions;