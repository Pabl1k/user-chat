import React, { FC } from "react";

import { AvatarType } from "./Avatar.type";
import "./Avatar.scss";

/**
 *
 * @param path is the path to the user icon
 * @param companyName used from Avatar description
 */

const Avatar: FC<AvatarType> = ({ path, companyName = "alt" }) => {
  return <img src={path} alt={`${companyName} avatar`} className="avatar" />;
};

export default Avatar;
