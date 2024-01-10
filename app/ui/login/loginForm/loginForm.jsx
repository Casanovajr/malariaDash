"use client";

import { authenticate } from "@/app/lib/actions";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import Image from "next/image";

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);

  return (
    <form action={formAction} className={styles.form}>
      <h1>Login</h1>
      <Image
                    src={"/mosquito.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
      <input type="text" placeholder="e-mail" name="email" />
      <input type="password" placeholder="senha" name="password" />
      <button>Login</button>
      {state && state}
    </form>
  );
};

export default LoginForm;