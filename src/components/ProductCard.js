import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple, MDBRow, MDBCol } from "mdb-react-ui-kit";

export default function ProductCard(props) {
    // console.log(props.product);

    if (props.product) {
        const titleStyle = {
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
        };

        const cardImgStyle = {
            width: "100%",
            height: "200px",
            objectFit: "cover",
        };

        return (
            <MDBCol lg="3" md="4" sm="6" size="6" className="p-2">
                <MDBCard>
                    <MDBRipple rippleColor="light" rippleTag="div" className="bg-image hover-overlay">
                        <MDBCardImage src={props.product.tile.photos[0].detail.url} fluid alt={props.product.tile.title} style={cardImgStyle} />
                    </MDBRipple>
                    <MDBCardBody>
                        <MDBCardText className="fw-bold" style={titleStyle}>
                            {props.product.tile.title}
                        </MDBCardText>
                        <MDBCardTitle>${props.product.tile.price}</MDBCardTitle>
                        <MDBCardText className="text-black-50">{props.product.tile.locationDetails.locationName}</MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        );
    }
    return <></>;
}
