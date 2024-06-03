import React, { useState } from "react";
import { Block } from "./style";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdHeart } from "react-icons/io";
import { FaGripLines } from "react-icons/fa6";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <Block open={open}>
      <img src={require("../../assets/logo.png")} />
      <div className="line">
        <div className="links">
          <Link to="/apartments">Apartments</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contacts">Contacts</Link>
        </div>
        <div className="socials">
          <Link to="https://t.me" target="_blank">
            Telegram
          </Link>
          <Link to="https://instagram.com" target="_blank">
            Instagram
          </Link>
          <Link to="https://youtube.com" target="_blank">
            Youtube
          </Link>
        </div>
        <div className="services">
          <Link to="/">
            Request Call <GoArrowUpRight />
          </Link>
          <Link to="/">
            Choose an apartment <GoArrowUpRight />
          </Link>
        </div>
        <div className="languages">
          <span>EN</span>
          <span>UZ</span>
        </div>
      </div>
      <div className="icons">
        <IoMdHeart />
        <FaGripLines onClick={() => setOpen(!open)} />
      </div>
    </Block>
  );
}
