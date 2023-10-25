import React, { useRef } from "react";
import "../../styles/footer/newsletter.scss";

function Newsletter() {
  const email = useRef();

  return (
    <div className="newsletter">
      <h1>Newsletter</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo
        ante.
      </p>
      <form>
        <input ref={email} type="text" placeholder="Your mail" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}

export default Newsletter;
