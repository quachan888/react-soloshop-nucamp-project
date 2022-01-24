import React, { useState } from "react";
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBIcon, MDBCollapse } from "mdb-react-ui-kit";
import { categories } from "../shared/data";

export default function CatMenu() {
    const [showNavSecond, setShowNavSecond] = useState(false);

    return (
        <header>
            <MDBNavbar expand="lg" dark bgColor="primary mb-3">
                <MDBContainer fluid>
                    <MDBNavbarToggler aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
                        <MDBIcon fas icon="bars" />
                    </MDBNavbarToggler>
                    <div className="collapse navbar-collapse" id="navbarExample01">
                        <MDBNavbarNav right className="mb-2 mb-lg-0">
                            {categories.map((e) => {
                                if (e.parent === null) {
                                    return (
                                        <MDBNavbarLink key={e.cat_id} href="#">
                                            {e.title}
                                        </MDBNavbarLink>
                                    );
                                }
                            })}
                        </MDBNavbarNav>
                    </div>
                </MDBContainer>
            </MDBNavbar>
        </header>
    );
}
