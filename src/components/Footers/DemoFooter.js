import React from "react";


import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>

          <div className="credits ml-auto">
            <span className="copyright">
               {new Date().getFullYear()} {" "}
              <i className="fa fa-heart heart" /> MentApp
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
