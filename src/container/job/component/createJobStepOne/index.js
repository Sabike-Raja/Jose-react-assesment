import { useForm } from "react-hook-form";
import InputWrap from "../../../../component/inputWraper";
import { JobSteperFooter } from "../jobSteperFooter";
import { CreateJob } from "./constant";

export const CreateJobStepOne = ({
  onFirstStepSubmit,
  oncloseModal,
  formInitialData,
  isLoading,
}) => {
  const { name, companyName, industry, location, remoteType } = formInitialData;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name,
      companyName,
      industry,
      location,
      remoteType,
    },
  });
  return (
    <form onSubmit={handleSubmit(onFirstStepSubmit)}>
      <InputWrap
        required={true}
        label={CreateJob.name.label}
        placeholder={CreateJob.name.placeholder}
        errorMessage={errors.name}
        {...register("name", { required: true })}
      />
      <InputWrap
        required={true}
        label={CreateJob.companyName.label}
        errorMessage={errors.companyName}
        placeholder={CreateJob.companyName.placeholder}
        {...register("companyName", { required: true })}
      />
      <InputWrap
        required={true}
        label={CreateJob.indutry.label}
        errorMessage={errors.industry}
        placeholder={CreateJob.indutry.placeholder}
        {...register("industry", { required: true })}
      />
      <div className="d-flex column-gap-24">
        <InputWrap
          required={false}
          label={CreateJob.location.label}
          aditionalClass="w-50"
          placeholder={CreateJob.location.placeholder}
          {...register("location", { required: false })}
        />
        <InputWrap
          required={false}
          label={CreateJob.remoteType.label}
          placeholder={CreateJob.remoteType.placeholder}
          aditionalClass="w-50"
          {...register("remoteType", { required: false })}
        />
      </div>
      <JobSteperFooter
        buttonName={"Next"}
        oncloseModal={oncloseModal}
        isLoading={isLoading}
      />
    </form>
  );
};
