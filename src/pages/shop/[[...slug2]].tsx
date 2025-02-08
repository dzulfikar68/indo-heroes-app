import { useRouter } from "next/router"

const DetailShopPage = () => {
    const { query } = useRouter()
    console.log(query)
    return (
        <div>
            <h1>Shop Detail Page 2</h1>
            <h1>Product 2: {query.slug2 && query.slug2[0]}</h1>
        </div>
    )
}

export default DetailShopPage