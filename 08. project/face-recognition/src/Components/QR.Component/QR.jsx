import React from "react";

const QR = () => {
  return (
    <footer>
      <div className="pa4">
        <img
          src="http://api.qrserver.com/v1/create-qr-code/?color=B5B5B5&amp;bgcolor=ABFFF7&amp;data=cayorch.me&amp;qzone=0&amp;margin=0&amp;size=225x225&amp;ecc=H"
          alt="qr code"
        />
      </div>
    </footer>
  );
};

export default QR;
