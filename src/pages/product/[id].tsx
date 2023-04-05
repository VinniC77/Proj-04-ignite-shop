import { useRouter } from "next/router"

export default function Product() {

    const { query } = useRouter();

    return (
        <h1>
            Página do produto: {JSON.stringify(query)}
        </h1>
    )
}