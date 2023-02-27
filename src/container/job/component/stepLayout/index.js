import "./index.css";

const StepLayout = ({ stepNumber, children, formType }) => {
  return (
    <div className="step-layout">
      <div className="step-header">
        <p className="heading"><span>{formType}</span> a job</p>
        <p className="font-semibold">{`Step ${stepNumber}`}</p>
      </div>
      {children}
    </div>
  );
};

export default StepLayout;
