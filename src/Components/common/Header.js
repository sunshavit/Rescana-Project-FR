import React from "react";
import * as Styled from "./Header.style";
import www from "../../assets/www.svg";

function Header() {
  return (
    <Styled.Container>
      <Styled.HeadingContainer>
        <Styled.Header>Domain Sorter</Styled.Header>
        <Styled.Image src={www} alt="www icon" />
      </Styled.HeadingContainer>
      <Styled.MainP>
        Domain Sorter is an organizations tool for sorting domains by priority.
        below are two input fields: configuration & input
      </Styled.MainP>
      <Styled.ListItem>
        Configuration - put your main domains here, and give them your priority.
      </Styled.ListItem>
      <Styled.ListItem>
        Domains - put your individual domains or IP here for them to be sorted
        by priority.
      </Styled.ListItem>
      <Styled.SecondP>
        Notice Domain Sorter currently works only with IPV4 addresses
      </Styled.SecondP>
    </Styled.Container>
  );
}

export default Header;
