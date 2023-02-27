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
        addtionalClass="primary-bg text-white sm:ml-3"
        buttonName={isLoading ? 'Loading...' : buttonName}
      />
    </>
  );
};
