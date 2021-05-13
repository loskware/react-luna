import React, { useState } from "react";
import { Card, Button, FlipView, Image } from "../../lib";
import "./FlipViewPage.scss";

export function FlipViewPage() {
  const [flippedX, setFlippedX] = useState(false);
  const [flippedY, setFlippedY] = useState(false);

  return (
    <section className="FlipViewPage">
      {/*  FLIPVIEW WITH X AXIS */}
      <div>
        <FlipView
          frontFace={
            <Card hasShadow padding="0">
              <Image
                width={480}
                src={process.env.PUBLIC_URL + "/mando.jpg"}
                alt="The Mandalorian"
              />
            </Card>
          }
          backFace={
            <Card hasShadow padding="0">
              <Image
                width={480}
                src={process.env.PUBLIC_URL + "/grogu.jpg"}
                alt="The Child"
              />
            </Card>
          }
          flipped={flippedX}
        />
        <Button
          theme="accent"
          outlined
          onClick={() => setFlippedX(!flippedX)}
        >
          FLIP VERTICALLY
        </Button>
      </div>

      {/*  FLIPVIEW WITH Y AXIS */}
      <div>
        <FlipView
          axis="y"
          frontFace={
            <Card hasShadow padding="0">
              <Image
                width={480}
                src={process.env.PUBLIC_URL + "/mando.jpg"}
                alt="The Mandalorian"
              />
            </Card>
          }
          backFace={
            <Card hasShadow padding="0">
              <Image
                width={480}
                src={process.env.PUBLIC_URL + "/grogu.jpg"}
                alt="The Child"
              />
            </Card>
          }
          flipped={flippedY}
        />
        <Button
          theme="accent"
          outlined
          onClick={() => setFlippedY(!flippedY)}
        >
          FLIP HORIZONTALLY
        </Button>
      </div>
    </section>
  );
}
