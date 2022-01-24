import React, { useState } from "react";
import { MDBNavbar, MDBContainer, MDBNavbarBrand, MDBNavbarToggler, MDBNavbarItem, MDBNavbarLink, MDBCollapse, MDBBtn, MDBIcon, MDBNavbarNav } from "mdb-react-ui-kit";

export default function Navbar() {
    const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);

    return (
        <>
            <MDBNavbar expand="md">
                <MDBContainer>
                    <MDBNavbarBrand href="#" className="text-primary fw-bold">
                        SoloShop
                    </MDBNavbarBrand>
                    <MDBNavbarToggler type="button" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}>
                        <MDBIcon icon="bars" fas />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar show={showNavNoTogglerSecond}>
                        <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
                            <MDBNavbarItem>
                                <MDBNavbarLink href="#">Home</MDBNavbarLink>
                            </MDBNavbarItem>

                            <MDBNavbarItem>
                                <MDBNavbarLink href="#">Login</MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                        <form className="d-flex input-group w-auto">
                            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                            <MDBBtn color="primary">
                                <MDBIcon fas icon="search" />
                            </MDBBtn>
                        </form>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
}
