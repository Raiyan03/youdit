import EditorForm from "@/components/auth/register/form";
import YoutuberForm from "@/components/auth/register/youtuber-form";
// import RegisterForm from "@/components/auth/register/register";
import AuthForm from "@/components/auth/auth-form";
const Register = () => {
    return (
        <AuthForm EditorForm={EditorForm} YoutuberForm={YoutuberForm}/>
    );
}

export default Register;