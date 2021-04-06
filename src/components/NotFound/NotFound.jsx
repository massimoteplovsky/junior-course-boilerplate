import React from "react";
import s from "./NotFound.module.css";
import {NotFoundIcon} from '../Icons';

const NotFound = () => {
  return (
    <>
      <NotFoundIcon/>
      <h2 className={s.title}>404</h2>
    </>
  );
};

export default NotFound;
