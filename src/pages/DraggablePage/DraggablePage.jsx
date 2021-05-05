import React from "react";
import { Card, Draggable } from "../../lib";
import "./DraggablePage.scss";

export function DraggablePage() {
  return (
    <div className="DraggablePage">
      <Card variant="default">
        <Draggable>
          <Card variant="accent" hasBorder>
            Drag me
          </Card>
        </Draggable>
        <Draggable>
          <Card variant="danger" hasBorder>
            Drag me
          </Card>
        </Draggable>
      </Card>
    </div>
  );
}
