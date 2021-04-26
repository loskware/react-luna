import React, { useState } from "react";
import { Card, FlatButton, FlipView, Image } from "../lib";

export function FlipExample() {
  const [flippedX, setFlippedX] = useState(false);
  const [flippedY, setFlippedY] = useState(false);

  return (
    <section className="FlipExample theme-dark">
      {/*  FLIPVIEW WITH X AXIS */}
      <FlipView
        frontFace={
          <Card hasShadow>
            <Image width={480} src={process.env.PUBLIC_URL + "/mando.jpg"} />
          </Card>
        }
        backFace={
          <Card hasShadow>
            <Image width={480} src={process.env.PUBLIC_URL + "/grogu.jpg"} />
          </Card>
        }
        flipped={flippedX}
      />
      <FlatButton
        variant="accent"
        size="large"
        outlined
        onClick={() => setFlippedX(!flippedX)}
      >
        FLIP VERTICALLY
      </FlatButton>

      {/*  FLIPVIEW WITH Y AXIS */}
      <FlipView
        axis="y"
        frontFace={
          <Card hasShadow>
            <Image width={480} src={process.env.PUBLIC_URL + "/mando.jpg"} />
          </Card>
        }
        backFace={
          <Card hasShadow>
            <Image width={480} src={process.env.PUBLIC_URL + "/grogu.jpg"} />
          </Card>
        }
        flipped={flippedY}
      />
      <FlatButton
        variant="accent"
        size="large"
        outlined
        onClick={() => setFlippedY(!flippedY)}
      >
        FLIP HORIZONTALLY
      </FlatButton>
    </section>
  );
}
