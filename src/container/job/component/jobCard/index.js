import AppLogo from "../../../../assets/netflix-logo.png";
import EditIcon from "../../../../assets/edit-icon.png";
import DeleteIcon from "../../../../assets/delete-icon.png";
import Button from "../../../../component/button";

import "./index.css";

export const JobCard = ({
  name,
  companyName,
  industry,
  location,
  remoteType,
  minimumExperience,
  maximumExperience,
  minimumSalary,
  maximumSalary,
  employeeCount,
  applyType,
  experienceType,
  onDeleteJob,
  onEditJob,
  id,
}) => {
  return (
    <div className="job-card flex justify-space-between">
      <div className="flex">
        <img className="job-logo" src={AppLogo} alt="Job Logo" />
        <div className="card-description">
          <h1 className="heading">{name}</h1>
          <p className="font-medium">{`${companyName} - ${industry}`}</p>
          <p className="pt-5 font-medium">{`${location}(${remoteType})`}</p>
          <p className="pb-8x font-medium">{`Part-Time (9.00 am - 5.00 pm IST)`}</p>
          <p className="pb-8x font-medium">{`Experience (${minimumExperience} - ${maximumExperience} ${experienceType})`}</p>
          <p className="pb-8x font-medium">{`INR (₹) (${minimumSalary} - ${maximumSalary} /Month)`}</p>
          <p className="font-medium">{`${employeeCount} employees`}</p>
          <div className="pt-5">
            <Button
              buttonName={
                applyType === "Quick apply" ? "Apply Now" : "External Apply"
              }
              addtionalClass={
                applyType === "Quick apply" ? "primary-bg text-white" : "bg-white text-primary"
              }
              buttonType="button"
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <img
          onClick={onEditJob}
          className="app-icon"
          src={EditIcon}
          alt="Edit Icon"
        />
        <img
          onClick={() => onDeleteJob(id)}
          className="app-icon"
          src={DeleteIcon}
          alt="Delete Icon"
        />
      </div>
    </div>
  );
};
