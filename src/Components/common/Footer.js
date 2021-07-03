import React from "react";
import config from "./config";
import * as Styled from "./Footer.styled";
import linkedin from "../../assets/linkedin.png";

export default function Footer() {
  const renderData = () => {
    return config.map((item, index) => (
      <Styled.User key={index}>
        <Styled.Image src={item.img} />
        <Styled.Name>{item.name}</Styled.Name>
        <Styled.Link href={item.linkedin}>
          <img
            alt="linkdin icon"
            style={{ height: "32px", width: "32px" }}
            src={linkedin}
          />
        </Styled.Link>
      </Styled.User>
    ));
  };
  return (
    <div style={{ width: "80%", margin: "2rem" }}>
      <h3 style={{ textAlign: "center" }}>Made by:</h3>
      <Styled.Container>{renderData()}</Styled.Container>
    </div>
  );
}
