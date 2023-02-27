import { useState } from "react";
import { useForm } from "react-hook-form";
import InputWrap from "../../../../component/inputWraper";
import { RadioWraper } from "../../../../component/radioWraper";
import { JobSteperFooter } from "../jobSteperFooter";

export const CreateJobStepTwo = ({
  onSecondStepSubmit,
  oncloseModal,
  formInitialData,
  isLoading
}) => {
  const {
    minimumExperience,
    maximumExperience,
    minimumSalary,
    maximumSalary,
    employeeCount,
    applyType,
  } = formInitialData;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      minimumExperience,
      maximumExperience,
      minimumSalary,
      maximumSalary,
      employeeCount,
      applyType,
    },
  });

  const [radioOptionList] = useState([
    {
      id: "quick-apply",
      label: "Quick apply",
      value: "Quick apply",
      form: register("applyType"),
      inputClass: "mr-4x",
    },
    {
      id: "external-apply",
      label: "External apply",
      value: "External apply",
      form: register("applyType"),
      inputClass: "mr-4x ml-16x",
    },
  ]);

  return (
    <form onSubmit={handleSubmit(onSecondStepSubmit)}>
      <div className="d-flex column-gap-24">
        <InputWrap
          required={false}
          label={"Experience"}
          aditionalClass="w-50"
          placeholder="Minimum"
          {...register("minimumExperience", { required: false })}
        />
        <InputWrap
          required={false}
          label={""}
          inputConClass="b-0 position-absolute"
          aditionalClass="position-relative w-50"
          placeholder="Maximum"
          {...register("maximumExperience", { required: false })}
        />
      </div>

      <div className="d-flex column-gap-24">
        <InputWrap
          required={false}
          label={"Salary"}
          aditionalClass="w-50"
          placeholder="Minimum"
          {...register("minimumSalary", { required: false })}
        />
        <InputWrap
          required={false}
          label={""}
          inputConClass="b-0 position-absolute"
          aditionalClass="position-relative w-50"
          placeholder="Maximum"
          {...register("maximumSalary", { required: false })}
        />
      </div>
      <InputWrap
        required={true}
        label={"Total employee"}
        errorMessage={errors.employeeCount}
        placeholder="ex. 100"
        {...register("employeeCount", { required: true })}
      />

      <legend className="contents text-sm font-semibold text-gray-900">
        Apply type
      </legend>

      <div className="flex items-center mt-4x space-y-4">
        <RadioWraper optionList={radioOptionList} />
      </div>

      <JobSteperFooter buttonName={"Save"} oncloseModal={oncloseModal} isLoading={isLoading} />
    </form>
  );
};
