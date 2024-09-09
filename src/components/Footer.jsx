import React from "react";
import IconVercel from "./icon/IconVercel";
import IconTMDB from "./icon/IconTMDB";

const Footer = () => {
  return (
    <footer className="p-[3.75rem] flex flex-col gap-4">
      <div className="flex flex-row gap-2 items-center my-2">
        <div className="text-xl"><strong>Ciniverse</strong></div>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <div className="opacity-50 text-sm">Made with</div>
        <a
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
          title="React"
        >
          <img src="/R.webp" width="100" alt="React logo" />
        </a>
      </div>

      <div className="flex items-center text-sm">
        <span className="opacity-50 me-1"> Data Provided by&nbsp;</span>
        <IconTMDB />
      </div>

      <div className="opacity-50 text-sm">
        <p>
          This project uses the TMDB API but is not endorsed or certified by
          TMDB.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
