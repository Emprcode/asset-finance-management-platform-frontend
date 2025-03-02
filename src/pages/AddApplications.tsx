import { toast } from "react-toastify";
import { ApplicationForm } from "../components/formComponents/ApplicationForm";
import { postApplication } from "../components/helper/axiosHelper";
import { MainLayout } from "../components/layout/MainLayout";

const AddApplications = () => {
  const handleSubmit = async (formData: any) => {
    console.log("Submitting new application:", formData);
    const { status, message } = await postApplication(formData);
    if (status === "success") {
      toast.success(message);
    } else {
      toast.error(message);
    }
  };

  return (
    <MainLayout>
      <ApplicationForm onSubmit={handleSubmit} buttonValue='Submit' />
    </MainLayout>
  );
};

export default AddApplications;
