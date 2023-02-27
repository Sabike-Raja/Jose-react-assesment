import { useEffect, useState } from "react";
import { createJob, getJobListApi, deleteJob, editJob } from "../../api/job";
import Button from "../../component/button";
import JobAddEditModal from "./component/jobAddEditModal";
import { JobCard } from "./component/jobCard";

import "./index.css";

const JobContainer = () => {
  const [showJobAddEditModal, setShowJobAddEditModal] = useState(false);
  const [jobList, setJobList] = useState([]);
  const [formType, setFormType] = useState("");
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadJobList();
  }, []);

  const loadJobList = async () => {
    const response = await getJobListApi();
    setJobList(response.data);
  };

  const showAddModal = () => {
    setShowJobAddEditModal(true);
    setFormType("Create");
    setFormData({});
  };

  const showEditModal = (data) => {
    setShowJobAddEditModal(true);
    setFormType("Edit");
    setFormData(data);
  };

  const oncloseModal = () => {
    setShowJobAddEditModal(false);
  };

  const onSaveJob = async (data) => {
    setIsLoading(true);
    const response =
      formType === "Create"
        ? await createJob(data)
        : await editJob(data, formData.id);
    setIsLoading(false);
    if ([200, 201].includes(response.status)) {
      loadJobList();
      oncloseModal();
    }
  };

  const onDeleteJob = async (id) => {
    const response = await deleteJob(id);
    if (response.status === 200) {
      loadJobList();
    }
  };

  return (
    <div className="app-container">
      <div className="pb-4">
        <Button
          addtionalClass="primary-bg text-white"
          onButtonClick={showAddModal}
          buttonName="Create"
        />
      </div>
      {showJobAddEditModal && (
        <JobAddEditModal
          oncloseModal={oncloseModal}
          isLoading={isLoading}
          formType={formType}
          onSaveJob={onSaveJob}
          formInitialData={formData}
        />
      )}
      <div className="job-card-con">
        {jobList.map((mapData) => (
          <JobCard
            onEditJob={() => showEditModal(mapData)}
            key={mapData.name}
            onDeleteJob={onDeleteJob}
            {...mapData}
          />
        ))}
      </div>
    </div>
  );
};

export default JobContainer;
