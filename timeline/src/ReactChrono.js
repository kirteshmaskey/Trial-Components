import React from "react";
import { Chrono } from "react-chrono";

const ReactChrono = () => {
  const items = [
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to Men of the British Expeditionary Force (BEF) wade out to Men of the British Expeditionary Force (BEF) wade out to",
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to Men of the British Expeditionary Force (BEF) wade out to Men of the British Expeditionary Force (BEF) wade out to",
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to Men of the British Expeditionary Force (BEF) wade out to Men of the British Expeditionary Force (BEF) wade out to",
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to Men of the British Expeditionary Force (BEF) wade out to Men of the British Expeditionary Force (BEF) wade out to",
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to Men of the British Expeditionary Force (BEF) wade out to Men of the British Expeditionary Force (BEF) wade out to",
    },
  ];
  return (
    <div style={{ width: "500px", height: "100vh" }}>
      <Chrono items={items} mode="VERTICAL" />
    </div>
  );
};

export default ReactChrono;
