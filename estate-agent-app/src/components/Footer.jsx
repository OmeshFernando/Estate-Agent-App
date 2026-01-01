import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <p className="copyright">
        © {new Date().getFullYear()} TrustHome. All rights reserved.
      </p>
    </footer>
  );
}
