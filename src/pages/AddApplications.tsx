import { ApplicationForm } from "../components/formComponents/ApplicationForm";
import { MainLayout } from "../components/layout/MainLayout";

const AddApplications = () => {
  const handleSubmit = async (formData: any) => {
    console.log("Submitting new application:", formData);
    // Make API request to create a new application
  };

  return (
    <MainLayout>
      <ApplicationForm onSubmit={handleSubmit} buttonValue='Submit' />
    </MainLayout>
  );
};

export default AddApplications;
