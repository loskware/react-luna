import React, { useState } from "react";
import { Card, FlatButton, FlipView, Image } from "../../lib";
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
        <FlatButton
          variant="accent"
          outlined
          onClick={() => setFlippedX(!flippedX)}
        >
          FLIP VERTICALLY
        </FlatButton>
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
        <FlatButton
          variant="accent"
          outlined
          onClick={() => setFlippedY(!flippedY)}
        >
          FLIP HORIZONTALLY
        </FlatButton>
      </div>
    </section>
  );
}
