import moment from "moment";
import { Container, Flex } from "../Common";
import config from "../../config";

const Footer = () => {
  return (
    <footer className="x-footer">
      <Container>
        <Flex justifyContent="space-between">
          <p className="-copyright">
            Copyright © <strong>{config.siteInfo.name}</strong>{" "}
            {moment().format("YYYY")}.
          </p>

          <div className="-version">Version: {config.version}</div>
        </Flex>
      </Container>
    </footer>
  );
};

export default Footer;
