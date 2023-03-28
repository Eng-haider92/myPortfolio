import {RxDropdownMenu} from "react-icons/rx";
import { useState } from "react";
import { content } from "../Content";
import { createElement } from "react";

const Nav = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <div className="nav">
      <div
        className="nav-menu"
        onClick={() => setShowMenu(!showMenu)}
      >
        <RxDropdownMenu size={38} />
      </div>
      <nav
        className={`nav-item ${
          showMenu ? "show" : "hide"
        }`}
      >
        {nav.map((item, i) => (
          <a
            href={item.link}
            onClick={() => setActive(i)}
            className={`nav-link 
     ${i === active && "active"} `}
          >
            {createElement(item.icon)}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Nav;
