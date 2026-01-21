import { useState } from "react";
import { Container, Row, Col, Navbar, Nav, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

import GlbViewer from "./components/GlbViewer";
import Wave from "./components/Wave";

import { PRODUCTS } from "./constants";
import ShoppingCard from "./components/ShoppingCard";
import VideoCard from "./components/VideoCard";

const STORAGE_BOX_CLOSED_MODEL = "/models/liquorice_allsort_box_and_lid_100_v7.glb";
const STORAGE_BOX_OPEN_MODEL = "/models/liquorice_allsort_box_and_lid_100_v7_exploded.glb";
const TISSUE_BOX_CLOSED_MODEL = "/models/liquorice_allsort_tissue_box.glb";
const TISSUE_BOX_OPEN_MODEL = "/models/liquorice_allsort_tissue_box_exploded.glb";

export default function App() {
  const [isBoxOpen, setIsBoxOpen] = useState(false);

  return (
    <>
      <div className="swatch-light">
        {/* NAV */}
        <Navbar expand="lg" sticky="top" className="nav-glass">
          <Container>
            <Navbar.Brand className="fw-bold" href="#top">
              Awkward Minds
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="nav" />

            <Navbar.Collapse id="nav">
              <Nav className="ms-auto gap-lg-2 align-items-lg-center">
                <Nav.Link href="#storage-boxes">Storage Boxes</Nav.Link>
                <Nav.Link href="#tissue-box-covers">Tissue Box Covers</Nav.Link>
                <Nav.Link href="#about">About Me</Nav.Link>
                <Nav.Item>
                  <a className="btn btn-dark" href="#buy">
                    Where to buy
                  </a>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* HERO */}
        <header id="top" className="section section-hero">
          <Container className="py-5">
            <Row className="align-items-center g-4">
              <Col lg={7}>
                <h2 className="display-6 lh-1">3D Printed</h2>
                <h1 className="display-4 fw-bold lh-1">
                  <span className="accent">Liquorice Allsort</span> Boxes
                </h1>
                <p className="lead mt-3 mb-4">Bright, tidy, and irresistible. Made in New Zealand.</p>

                <div className="d-flex gap-2 flex-wrap">
                                    <a className="btn btn-lg btn-dark" href="#storage-boxes">
                    Sizes & prices
                  </a>
                  <a className="btn btn-lg btn-outline-dark" href="#buy">
                    Where to buy
                  </a>
                  <a className="btn btn-lg btn-danger" onClick={() => setIsBoxOpen((v) => !v)}>
                    {isBoxOpen ? "Close the lid" : "Lift the lid!"}
                  </a>
                </div>
              </Col>

              <Col lg={5}>
                <div className="mb-2 p-4">
                  <GlbViewer key={isBoxOpen ? "open" : "closed"} src={isBoxOpen ? STORAGE_BOX_OPEN_MODEL : STORAGE_BOX_CLOSED_MODEL} height={400} scale={0.1} />
                </div>
              </Col>
            </Row>
          </Container>

          <div style={{ height: "35px" }} />
        </header>
      </div>

      <Wave topColor="var(--swatch-light)" bottomColor="var(--swatch-pink)" />

      {/* DESCRIPTION */}
      <section id="description" className="swatch-pink">
        <Container className="py-5">
          <div className="d-flex align-items-end justify-content-between flex-wrap gap-2 mb-4">
            <div>
              <h2 className="h1 fw-bold mb-5">What are they?</h2>
              <p className="lead">
                These liquorice allsort–inspired plastic boxes are for use as practical storage or a playful ornamental piece. Use them to organise items, or
                simply display them as a colourful object in their own right. Each box is 3D printed in New Zealand from sturdy, plant-based PLA, making it
                lightweight and durable. The lid is a snap-fit design, ensuring your items stay securely inside.
              </p>
              <p className="lead">
                Also offered are tissue box covers that neatly enclose cube-shaped tissue boxes, with tissues dispensing cleanly from the top while adding a fun
                decorative touch. They're essentially the same as the storage boxes, but scaled and with an open top.
              </p>
              <Alert variant="danger" className="mt-5">
                <p id="buy" className="lead mt-3">
                  <FontAwesomeIcon icon={faCircleExclamation} /> These items are not currently sold through an online shop. Orders are available via{" "}
                  <a href="https://www.facebook.com/marketplace/item/1907424590168700">Facebook Marketplace</a>.
                </p>
              </Alert>
            </div>
          </div>
        </Container>

        <div style={{ height: "50px" }} />
      </section>

      <Wave topColor="var(--swatch-pink)" bottomColor="var(--swatch-dark)" />

      {/* STORAGE BOXES */}
      <section id="storage-boxes" className="swatch-dark text-light">
        <Container className="py-5">
          <div className="d-flex align-items-end justify-content-between flex-wrap gap-2 mb-0">
            <div>
              <h2 className="h1 fw-bold mb-2">Storage Boxes</h2>
              <p className="lead">
                Choose a size. Pick a colour. Order on <a href="https://www.facebook.com/marketplace/item/1907424590168700">Facebook Marketplace</a>.
              </p>
            </div>
          </div>

          <Row className="g-3">
            {PRODUCTS.map((item) => (
              <Col xs={12} md={6} lg={3}>
                <GlbViewer key={item.size} src={item.glbSrc} height={400} scale={0.08} className="mb-3" />
              </Col>
            ))}
          </Row>
          <Row className="g-3">
            {PRODUCTS.map((item) => (
              <Col xs={12} md={6} lg={3}>
                <ShoppingCard size={item.size} price={item.price} />
              </Col>
            ))}
          </Row>

          <Row className="mt-4">
            <p>* Colours here may not exactly match the actual printed items.</p>
          </Row>
        </Container>

        <div style={{ height: "55px" }} />
      </section>

      <Wave topColor="var(--swatch-dark)" bottomColor="var(--swatch-light)" />

      {/* TISSUE BOX COVERS */}
      <section id="tissue-box-covers" className="swatch-light">
        <Container className="py-5">
          <Row className="g-3 align-items-stretch">
            <Col lg={6}>
              <h2 className="h1 fw-bold mb-2">Tissue Box Covers</h2>
              <p className="lead">
                One size. Pick a colour. Order on <a href="https://www.facebook.com/marketplace/item/1910999832878490">Facebook Marketplace</a>.
              </p>

              <Row>
                <Col lg={8}>
                  <div className="mt-4">
                    <ShoppingCard size="11cm × 11cm × 13cm" price="$25" />
                  </div>
                </Col>
                <Col lg={9}>
                  <div className="mt-4">
                    <p>* The best compatible brand of tissues is "Paseo".</p>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col lg={3}>
              <div className="mb-2 p-4">
                <GlbViewer key="tissue-closed" src={TISSUE_BOX_CLOSED_MODEL} height={400} scale={0.07} />
              </div>
            </Col>
            <Col lg={3}>
              <div className="mb-2 p-4">
                <GlbViewer key="tissue-open" src={TISSUE_BOX_OPEN_MODEL} height={400} scale={0.07} />
              </div>
            </Col>
          </Row>
        </Container>

        <div style={{ height: "45px" }} />
      </section>

      <Wave topColor="var(--swatch-light)" bottomColor="var(--swatch-pink)" />

      {/* TIMELAPSE */}
      <section id="timelapse" className="swatch-pink">
        <Container className="py-5">
          <h2 className="h1 fw-bold mb-2">How it's made</h2>

          <Row className="g-3 align-items-stretch">
            <Col lg={4}>
              <p className="lead">
                Each item is 3D printed using either a Bambu Lab P1S or P2S printer and high-quality Bambu Lab PLA filament, chosen for its consistency,
                strength, and clean finish. Depending on size, printing can take anywhere from two to 24 hours. All orders are printed on demand, reducing waste
                and ensuring each piece is made specifically for its owner.
              </p>
              <p className="lead">PLA (Polylactic Acid) is a type of non-toxic thermoplastic made from renewable resources.</p>
              <p>⚠️ WARNING: Keep out of direct sunlight or high heat, as PLA can soften or warp. Not dishwasher-safe.</p>
            </Col>
            <Col lg={1}></Col>

            <Col lg={7}>
              <VideoCard src="/timelapse.mp4" autoPlay loop muted controls={false} />
            </Col>
          </Row>
        </Container>

        <div style={{ height: "40px" }} />
      </section>

      <Wave topColor="var(--swatch-pink)" bottomColor="var(--swatch-dark)" />

      {/* ABOUT */}
      <section id="about" className="swatch-dark text-light">
        <Container className="py-5">
          <Row className="align-items-center g-4">
            {/* Photo */}
            <Col xs={12} md={4} className="text-center">
              <img src="/avatar.jpg" alt="The maker" className="img-fluid rounded-circle shadow-lg" style={{ maxWidth: "200px" }} />
            </Col>

            {/* Text */}
            <Col xs={12} md={8}>
              <h2 className="h1 fw-bold mb-3">About the Maker</h2>
              <p className="lead">
                I’m a 3D printing enthusiast based in Auckland, designing and making inspired pieces as a side hustle. Each item is printed locally using
                plant-based PLA, with a focus on simple, colourful, and practical design.
              </p>
            </Col>
          </Row>
        </Container>

        <div style={{ height: "40px" }} />
      </section>

      <Wave topColor="var(--swatch-dark)" bottomColor="var(--swatch-dark)" />

      {/* FOOTER */}
      <footer className="swatch-dark text-light border-top border-secondary">
        <Container className="py-4">
          <Row className="align-items-center gy-3">
            {/* Left */}
            <Col xs={12} md={6} className="text-center text-md-start">
              <div className="fw-semibold">Awkward Minds &copy; {new Date().getFullYear()}</div>
            </Col>

            {/* Right */}
            <Col xs={12} md={6} className="text-center text-md-end">
              <div className="d-flex justify-content-center justify-content-md-end gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61586949897558"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-light"
                >
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </a>

                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-light">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
