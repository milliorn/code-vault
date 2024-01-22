import React from "react";
import {
  IconFacebook,
  IconTwitter,
  IconGoogle,
  IconInstagram,
  IconLinkedin,
  IconGithub,
} from "./Icons";

export function SocialMedia() {
  return (
    <div
      className="flex items-center justify-center p-8 border-b lg:justify-between border-orange-50"
      id="social"
    >
      <div className="hidden mr-12 cursor-default lg:block">
        <p>get connected with us to receive the latest news:</p>
      </div>
      <div className="flex justify-center">
        <IconFacebook />
        <IconTwitter />
        <IconGoogle />
        <IconInstagram />
        <IconLinkedin />
        <IconGithub />
      </div>
    </div>
  );
}
