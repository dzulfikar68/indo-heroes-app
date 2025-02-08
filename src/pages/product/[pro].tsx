import { useRouter } from "next/router"

const DetailProductPage = () => {
    const route = useRouter()
    console.log(route)
    const { query } = useRouter()
    return (
        <div>
            <h1>Product Detail Page</h1>
            <h1>Product: {query.pro}</h1>
        </div>
    )
}

export default DetailProductPage