import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaHackerrank } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsGithub />
    </div>
    <div>
      <BsLinkedin />
    </div>
    <div>
      <FaHackerrank />
    </div>
  </div>
);

export default SocialMedia;
