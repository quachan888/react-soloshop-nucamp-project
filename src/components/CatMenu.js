import React, { useState } from "react";
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBIcon, MDBCollapse } from "mdb-react-ui-kit";
import { categories } from "../shared/data";

export default function CatMenu() {
    const [showNavSecond, setShowNavSecond] = useState(false);

    return (
        <MDBNavbar expand="lg" dark bgColor="primary" className="text-white mb-3">
            <MDBContainer>
                <MDBNavbarNav right className="p-0 m-0">
                    {categories.map((e) => {
                        if (e.parent === null) {
                            return (
                                <MDBNavbarItem key={e.cat_id}>
                                    <MDBNavbarLink href="#">{e.title}</MDBNavbarLink>
                                </MDBNavbarItem>
                            );
                        }
                    })}
                </MDBNavbarNav>
            </MDBContainer>
        </MDBNavbar>
    );
}
