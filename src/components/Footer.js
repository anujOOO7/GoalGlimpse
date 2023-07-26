import React from "react";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className="footer">
      <h6> Copyright &copy; {year} </h6>
    </div>
  );
};

export default Footer;
