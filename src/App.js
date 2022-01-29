import React from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import Navbar from "./components/Navbar";
import CatMenu from "./components/CatMenu";
import ProductList from "./components/ProductList";
import ProductCard from "./components/ProductCard";

function App() {
    return (
        <>
            <Navbar />
            <MDBContainer>
                <CatMenu />
                <ProductList />
            </MDBContainer>
        </>
    );
}

export default App;
