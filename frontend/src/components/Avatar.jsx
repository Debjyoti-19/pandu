import { useAuthStore } from "../store/useAuthStore";

const user = useAuthStore();

const userAvatar = ({ user }) =>{
    return <>{user.fristName}</>;
}

export default userAvatar;