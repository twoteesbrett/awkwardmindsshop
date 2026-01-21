import React from "react";
import { Card, OverlayTrigger } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";

import { SWATCHES, type Swatch } from "../constants";

type Props = {
  size: string;
  price: string;
};

function ColorSwatches() {
  return (
    <div className="d-flex gap-2 flex-wrap">
      {SWATCHES.map((c: Swatch) => (
        <OverlayTrigger
          key={c.name}
          placement="top"
          overlay={<Tooltip id={`tooltip-${c.name}`}>{c.name}</Tooltip>}
        >
          <span
            className={c.className}
            style={{
              display: "inline-block",
              width: 24,
              height: 24,
              borderRadius: "50%"
            }}
          />
        </OverlayTrigger>
      ))}
    </div>
  );
}

const ShoppingCard: React.FC<Props> = ({ size, price }) => {
  return (
      <Card className="shadow-lg rounded-4 hover-lift cursor-pointer">
        <Card.Body>
          <div className="text-muted small">Size</div>
          <div className="h3 fw-bold">{size}</div>

          <div className="mt-3 d-flex align-items-baseline gap-2">
            <div className="display-6 fw-bold mb-0">{price}</div>
            <div className="text-muted">NZD</div>
          </div>

          <hr />

          <div className="small text-muted mb-2">Colours</div>
          <ColorSwatches />
        </Card.Body>
      </Card>
  );
};

export default ShoppingCard;
