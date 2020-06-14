
import React from "react";


import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function AboutUs() {
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
        document.body.classList.add("profile-page");
        return function cleanup() {
            document.body.classList.remove("profile-page");
        };
    });
    return (
        <>
            <IndexNavbar />
            <LandingPageHeader />
            <div className="main">
                <div className="section text-center">
                    <Container>
                        <Row>
                            <Col className="ml-auto mr-auto" md="8">
                                <h2 className="title">What we do</h2>
                                <h5 className="description">
                                    MentApp is a place where you can find appropriate help you need to fight conditions
                                    that decrease quality of your life, to learn how to cope with mental issues,
                                    overcome fears, identify triggers and track your progress over time.
                                </h5>
                                <br />
                                <Button
                                    className="btn-round"
                                    color="info"
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                >
                                    See Details
                                </Button>
                            </Col>
                        </Row>
                        <br />
                        <br />
                        <Row>
                            <Col md="3">
                                <div className="info">
                                    <div className="icon icon-info">
                                        <i className="nc-icon nc-album-2" />
                                    </div>
                                    <div className="description">
                                        <h4 className="info-title">Online Psychotherapy</h4>
                                        <p className="description">
                                            Online psychotherapy provides an opportunity for our users to get matched
                                            with one of many professional psychologists we have in our team.
                                        </p>
                                        <Button className="btn-link" color="info" href="#pablo">
                                            Try it now
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                            <Col md="3">
                                <div className="info">
                                    <div className="icon icon-info">
                                        <i className="nc-icon nc-bulb-63" />
                                    </div>
                                    <div className="description">
                                        <h4 className="info-title">Support groups</h4>
                                        <p>
                                            Additional feature of MentApp are support group meetings that are organized
                                           among users and led by our team of medical professionals. All users can join
                                            any group he/she wants.
                                        </p>
                                        <Button className="btn-link" color="info" href="#pablo">
                                            Try it now
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                            <Col md="3">
                                <div className="info">
                                    <div className="icon icon-info">
                                        <i className="nc-icon nc-chart-bar-32" />
                                    </div>
                                    <div className="description">
                                        <h4 className="info-title">Progress tracking</h4>
                                        <p>
                                            With the help of your private psychologist you can track your progress over
                                            time, identify potential triggers and make improvements.
                                        </p>
                                        <Button className="btn-link" color="info" href="#pablo">
                                            Try it now
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                            <Col md="3">
                                <div className="info">
                                    <div className="icon icon-info">
                                        <i className="nc-icon nc-sun-fog-29" />
                                    </div>
                                    <div className="description">
                                        <h4 className="info-title">Training</h4>
                                        <p>
                                            This option covers anxiety and panic disorder management program, containing
                                            instructional videos with breathing exercises suitable for specific situation.
                                        </p>
                                        <Button className="btn-link" color="info" href="#pablo">
                                            Try it now
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="section section-dark text-center">
                    <Container>
                        <h2 className="title">Available psychologists for you</h2>
                        <Row>
                            <Col md="4">
                                <Card className="card-profile card-plain">
                                    <div className="card-avatar">
                                        <a href="#pablo" onClick={e => e.preventDefault()}>
                                            <img
                                                alt="..."
                                                src={require("assets/img/online-psychologist_1200W-800x500.jpg")}
                                            />
                                        </a>
                                    </div>
                                    <CardBody>
                                        <a href="#pablo" onClick={e => e.preventDefault()}>
                                            <div className="author">
                                                <CardTitle tag="h4">Anna Miller</CardTitle>
                                                <h6 className="card-category">Psychologis</h6>
                                            </div>
                                        </a>
                                        <p className="card-description text-center">
                                           amiller@gmail.com <br/> Hi, my name is Anna, i am 40 years old, and I am a licenced psychologist...
                                        </p>
                                    </CardBody>

                                </Card>
                            </Col>
                            <Col md="4">
                                <Card className="card-profile card-plain">
                                    <div className="card-avatar">
                                        <a href="#pablo" onClick={e => e.preventDefault()}>
                                            <img
                                                alt="..."
                                                src={require("assets/img/portrait-smiling-female-psychologist-her-office_23-2148026254.jpg")}
                                            />
                                        </a>
                                    </div>
                                    <CardBody>
                                        <a href="#pablo" onClick={e => e.preventDefault()}>
                                            <div className="author">
                                                <CardTitle tag="h4">Mia Anderson</CardTitle>
                                                <h6 className="card-category">Psychotherapist</h6>
                                            </div>
                                        </a>
                                        <p className="card-description text-center">
                                           manderson@gmail.com <br/> Hi everyone, my name is Mia, 36, and I am a licenced psychotherapist...
                                        </p>
                                    </CardBody>

                                </Card>
                            </Col>
                            <Col md="4">
                                <Card className="card-profile card-plain">
                                    <div className="card-avatar">
                                        <a href="#pablo" onClick={e => e.preventDefault()}>
                                            <img
                                                alt="..."
                                                src={require("assets/img/doctor.jpg")}
                                            />
                                        </a>
                                    </div>
                                    <CardBody>
                                        <a href="#pablo" onClick={e => e.preventDefault()}>
                                            <div className="author">
                                                <CardTitle tag="h4">Robert Orben</CardTitle>
                                                <h6 className="card-category">Psychologist</h6>
                                            </div>
                                        </a>
                                        <p className="card-description text-center">
                                           rorben@gmail.com <br/> Hello, my name is Robert, and I am here to help you.
                                            I am 27 years old....
                                        </p>
                                    </CardBody>

                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="section landing-section">
                    <Container>
                        <Row>
                            <Col className="ml-auto mr-auto" md="8">
                                <h2 className="text-center">Contact your psychologist</h2>
                                <Form className="contact-form">
                                    <Row>
                                        <Col md="6">
                                            <label>Name</label>
                                            <InputGroup>
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="nc-icon nc-single-02" />
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input placeholder="Name" type="text" />
                                            </InputGroup>
                                        </Col>
                                        <Col md="6">
                                            <label>Email</label>
                                            <InputGroup>
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="nc-icon nc-email-85" />
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input placeholder="Email" type="text" />
                                            </InputGroup>
                                        </Col>
                                    </Row>
                                    <label>Message</label>
                                    <Input
                                        placeholder="Tell us your thoughts and feelings..."
                                        type="textarea"
                                        rows="4"
                                    />
                                    <Row>
                                        <Col className="ml-auto mr-auto" md="4">
                                            <Button className="btn-fill" color="danger" size="lg">
                                                Send Message
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <DemoFooter />
        </>
    );
}

export default AboutUs;
