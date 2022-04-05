import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  let unactiveStyle = {
    color: "white",
    paddingBottom: "7px",
    marginRight: "10px",
    // borderBottom: "4px solid gray",
  };

  let activeStyle = {
    color: "white",
    marginRight: "10px",
    fontWeight: "700",
  };

  return (
    <div>
      <Link
        className={
          match && "bg-blue-500 shadow-blue-500/50 shadow-md rounded-md md:px-3 md:py-2"
        }
        style={match ? activeStyle : unactiveStyle}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;
