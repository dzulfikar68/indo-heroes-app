import Link from "next/link"
import { useRouter } from "next/router"
import styles from "./Login.module.scss"

const LoginViews = () => {
    const { push } = useRouter()
    const handlerLogin = () => {
        push('/product')
    }
    return (
        <div className={styles.login}>
            <h1>login page</h1>
            <button onClick={() => handlerLogin()}>login</button>
            <p style={{ color: "red", border: "1px solid red", borderRadius: "10px" }}>belum punya akun? regist <Link href={'/auth/register'}>here</Link></p>
        </div>
    )
}

export default LoginViews