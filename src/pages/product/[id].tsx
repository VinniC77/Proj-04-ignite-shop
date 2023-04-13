import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../product";

export default function Product() {

    const { query } = useRouter();

    return (
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>
            <ProductDetails>
                <h1>Camiseta X</h1>
                <span>R$ 79,90</span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore deleniti consequatur obcaecati at aut? Voluptas voluptates reiciendis consequatur ipsum quas quidem quo praesentium, nostrum animi laudantium earum laborum, magnam sequi?</p>
                <button>Comprar agora</button>
            </ProductDetails>
        </ProductContainer>
    )
}