import Button from "../../../../component/button";

export const JobSteperFooter = ({ oncloseModal, buttonName, isLoading }) => {
  return (
    <>
      <Button
        buttonType="button"
        addtionalClass="border border-gray-300 mt-4 text-gray-700 shadow-sm"
        buttonName="Cancel"
        onButtonClick={oncloseModal}
      />
      <Button
        buttonType="submit"
        addtionalClass="primary-bg text-white ml-16x"
        buttonName={isLoading ? 'Loading...' : buttonName}
      />
    </>
  );
};
