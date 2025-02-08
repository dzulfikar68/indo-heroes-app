// import Link from "next/link"
// import { useRouter } from "next/router"
// import styles from "./Login.module.css"

import LoginViews from "@/views/Auth/Login"

const LoginPage = () => {
    return (
        <>
        <LoginViews/>
        </>
    )
    // const { push } = useRouter()
    // const handlerLogin = () => {
    //     push('/product')
    // }
    // return (
    //     <div className={styles.login}>
    //         <h1>login page</h1>
    //         <button onClick={() => handlerLogin()}>login</button>
    //         <p>belum punya akun? regist <Link href={'/auth/register'}>here</Link></p>
    //     </div>
    // )
}

export default LoginPage