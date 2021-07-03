import React from "react";
import * as Styled from "./Header.style";
import www from "../../assets/www.svg";

function Header() {
  return (
    <Styled.Container>
      <Styled.HeadingContainer>
        <Styled.LogoContainer>
          <Styled.Header>Domain Sorter</Styled.Header>
          <Styled.Logo src={www} alt="www icon" />
        </Styled.LogoContainer>
        <Styled.MainP>
          Domain Sorter is an organizations tool for sorting domains by
          priority. below are two input fields: configuration & input
        </Styled.MainP>
        <Styled.ListItem>
          Configuration - put your main domains here, and give them your
          priority.
        </Styled.ListItem>
        <Styled.ListItem>
          Domains - put your individual domains or IP here for them to be sorted
          by priority.
        </Styled.ListItem>
        <Styled.SecondP>
          Notice Domain Sorter currently works only with IPV4 addresses
        </Styled.SecondP>
      </Styled.HeadingContainer>
      <Styled.Image src="https://www.imperva.com/blog/wp-content/uploads/sites/9/2018/09/Python-2.jpg" />
    </Styled.Container>
  );
}

export default Header;
