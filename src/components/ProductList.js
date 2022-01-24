import ProductCard from "./ProductCard";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { sampleProduct } from "../shared/data";

export default function ProductList() {
    return (
        <MDBRow>
            {sampleProduct.map((e) => {
                if (e.type === "item") {
                    return <ProductCard key={e.tile.id} product={e} />;
                }
            })}
        </MDBRow>
    );
}
