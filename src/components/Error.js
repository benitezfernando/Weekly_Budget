import React from "react";
import Proptypes from "prop-types";

const Error = ({ mensaje }) => (
  <p className="alert alert-danger error">{mensaje}</p>
);

Error.prototype = {
  mensaje: Proptypes.string.isRequired 
};
export default Error;
