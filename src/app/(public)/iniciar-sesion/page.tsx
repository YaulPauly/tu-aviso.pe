import LoginForm from "@/src/components/features/auth/login-form";

const LoginPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 1rem",
        height: "calc(100vh - 10rem)",
      }}
    >
      <LoginForm />
    </div>
  );
};

export default LoginPage;
