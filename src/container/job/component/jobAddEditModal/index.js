import StepLayout from "../stepLayout";
import Modal from "../../../../component/modal";
import { useState } from "react";
import { CreateJobStepOne } from "../createJobStepOne";
import { CreateJobStepTwo } from "../createJobStepTwo";

const JobAddEditModal = ({ oncloseModal, onSaveJob, formInitialData, formType, isLoading }) => {
  const [stepNumber, setStepNumber] = useState(1);
  const [formData, setFormData] = useState({});

  const onFirstStepSubmit = (data) => {
    setFormData({ ...formData, ...data });
    setStepNumber(2);
  };
  const onSecondStepSubmit = (data) => {
    setFormData({ ...formData, ...data });
    onSaveJob({ ...formData, ...data });
  };

  const renderSteps = () => (
    <>
      {stepNumber === 1 ? (
        <CreateJobStepOne
          onFirstStepSubmit={onFirstStepSubmit}
          oncloseModal={oncloseModal}
          formInitialData={formInitialData}
          isLoading={isLoading}
        />
      ) : (
        <CreateJobStepTwo
          onSecondStepSubmit={onSecondStepSubmit}
          oncloseModal={oncloseModal}
          isLoading={isLoading}
          formInitialData={formInitialData}
        />
      )}
    </>
  );

  return (
    <Modal>
      <StepLayout formType={formType} stepNumber={stepNumber}>{renderSteps()}</StepLayout>
    </Modal>
  );
};

export default JobAddEditModal;
