import React, { useState } from "react";
import { MDBNavbar, MDBContainer, MDBNavbarBrand, MDBNavbarToggler, MDBNavbarItem, MDBNavbarLink, MDBCollapse, MDBBtn, MDBIcon, MDBNavbarNav } from "mdb-react-ui-kit";

export default function Navbar() {
    const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);

    return (
        <MDBNavbar expand="md" className="mb-4">
            <MDBContainer>
                <MDBNavbarBrand href="#" className="text-primary fw-bold">
                    SoloShop
                </MDBNavbarBrand>
                <MDBNavbarToggler type="button" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}>
                    <MDBIcon icon="bars" fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showNavNoTogglerSecond}>
                    <form className="d-flex input-group w-50 ms-5">
                        <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                        <MDBBtn color="primary">
                            <MDBIcon fas icon="search" />
                        </MDBBtn>
                    </form>
                    <MDBNavbarNav className=" mb-2 mb-lg-0 justify-content-end">
                        <MDBNavbarItem>
                            <MDBNavbarLink href="#" className="text-dark">
                                <MDBIcon fas icon="heart" /> Saved
                            </MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink href="#" className="text-dark">
                                <MDBIcon fas icon="inbox" /> Inbox
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href="#" className="text-dark">
                                <MDBIcon fas icon="tags" /> Selling
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}
