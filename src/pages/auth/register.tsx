import Link from "next/link"

const Register = () => {
    return (
        <div>
            <h1>register page</h1>
            <p>sudah punya akun? login <Link href={'/auth/login'}>here</Link></p>
        </div>
    )
}

export default Register