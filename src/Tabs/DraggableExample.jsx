import React from "react";
import { Card, Draggable } from "../lib";

export function DraggableExample() {
  return (
    <section className="DraggableExample theme-dark">
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
