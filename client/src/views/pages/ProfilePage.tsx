import { useAuthStore } from "../../store/authStore";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const { logout, profile } = useAuthStore();
  const navigate = useNavigate();
  return (
    <div>
      <div>{JSON.stringify(profile)}</div>
      <button
        onClick={() => {
          logout();
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
};
export default ProfilePage;
