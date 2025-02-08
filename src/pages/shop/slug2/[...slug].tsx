import { useRouter } from "next/router"

const DetailShopPage = () => {
    const { query } = useRouter()
    console.log(query)
    return (
        <div>
            <h1>Shop Detail Page</h1>
            <h1>Product: {query.slug ? query.slug[0] : ""} - {query.slug && query.slug[1]}</h1>
        </div>
    )
}

export default DetailShopPage