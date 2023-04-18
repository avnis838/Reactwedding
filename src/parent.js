import React, { useState } from "react";
import MyForm from "./registerationPage";
import SubmittedData from "./homepage";

function ParentComponent() {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (formData) => {
    setSubmittedData(formData);
  };

  return (
    <>
      {submittedData ? (
        <SubmittedData data={submittedData} />
      ) : (
        <MyForm onSubmit={handleFormSubmit} />
      )}
    </>
  );
}

export default ParentComponent;
