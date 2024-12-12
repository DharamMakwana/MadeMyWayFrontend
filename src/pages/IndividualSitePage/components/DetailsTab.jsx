import styled from "styled-components"
import { Row } from "../../../layout-components/Row"
import { Col } from "../../../layout-components/Col"
import { MapContainer } from "./MapView"
import { NearByPlaces } from "./NearByPlaces"

export const DetailsTab = ({ city, address, coords }) => {
  return (
    <>
      <Row
        style={{
          border: "1px solid #dbdbdb",
          borderRadius: "5px",
          padding: ".5rem 1rem",
        }}
      >
        <Col alignment="start">
          <p
            style={{
              fontSize: "var(--heading-text)",
              fontWeight: "var(--medium)",
            }}
          >
            Address :
          </p>
          <p
            style={{
              fontSize: "var(--title-text)",
            }}
          >
            {address}
          </p>
        </Col>
      </Row>
      <br />
      <Col>
        <MapContainer lat={coords?.[0]} lng={coords?.[1]} />
      </Col>
      <br />
      <NearByPlaces city={city} />
    </>
  )
}

const InfoText = styled.div`
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  padding: 0.5rem 1rem;
`
