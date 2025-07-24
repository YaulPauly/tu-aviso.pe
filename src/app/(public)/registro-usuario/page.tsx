"use client";

import RegisterForm from "@/src/components/auth/register-form";

const RegisterUserPage = () => {
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
      <RegisterForm />
    </div>
  );
};

export default RegisterUserPage;
