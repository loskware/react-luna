import React from "react";
import { Card, Draggable } from "../../lib";
import "./DraggablePage.scss";

export function DraggablePage() {
  return (
    <section className="DraggablePage theme-dark">
      <Draggable>
        <Card variant="accent" hasBorder hasShadow>
          Drag me
        </Card>
      </Draggable>
      <Draggable>
        <Card variant="danger" hasBorder hasShadow>
          Drag me
        </Card>
      </Draggable>
    </section>
  );
}
