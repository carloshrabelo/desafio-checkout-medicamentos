import React from "react";
import dynamic from "next/dynamic";

const save = ({ jsPDF, title = "A4" }) => () => {
  const doc = new jsPDF("p", "pt", "a4");
  const visibleCanvas = document.getElementsByTagName("canvas");

  for (const canvas of visibleCanvas) {
    const imgData = canvas.toDataURL("image/png");
    doc.addImage(imgData, "PNG", 15, 15, 600, 600);
    doc.addPage();
  }
  doc.deletePage(visibleCanvas.length + 1);
  doc.save(`${title}.pdf`);
};

const ExportButton = dynamic(
  () =>
    import("jspdf").then(({ default: jsPDF }) => ({ children, ...props }) =>
      React.cloneElement(children, { onClick: save({ jsPDF, ...props }) })
    ),
  { ssr: false }
);

export default ExportButton;
