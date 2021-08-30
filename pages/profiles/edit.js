import AuthRequired from "../../components/auth-required";
import ProfileForm from "../../components/profile-form";

const EditProfile = () => {
  return (
    <AuthRequired>
      <ProfileForm />
    </AuthRequired>
  );
};

export default EditProfile;
