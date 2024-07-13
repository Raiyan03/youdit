import AuthForm from "@/components/auth/auth-form"
import EditorFormLogin from "@/components/auth/login/editor-form-login"
import YoutuberForm from "@/components/auth/register/youtuber-form"

const Login = () => {
  return (
    <AuthForm YoutuberForm={YoutuberForm} EditorForm={EditorFormLogin} />
  )
}

export default Login