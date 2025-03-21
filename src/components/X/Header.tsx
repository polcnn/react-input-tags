import { Container, Flex } from "../Common";
import Logo from "./Logo";
import config from "../../config";

const Header = () => {
  return (
    <header className="x-header">
      <Container>
        <Flex>
          <Logo />

          <h1>{config.siteInfo.name}</h1>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
