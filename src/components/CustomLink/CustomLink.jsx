import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  let unactiveStyle = {
    color: "black",
    paddingBottom: "5px",
    marginRight: "8px",
    borderBottom: "4px solid gray",
  };

  let activeStyle = {
    color: "rgb(187, 77, 77)",
    paddingBottom: "5px",
    marginRight: "8px",
    borderBottom: "4px solid rgb(163, 44, 44)",
    fontWeight: "700",
  };

  return (
    <div>
      <Link style={match ? activeStyle : unactiveStyle} to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;
