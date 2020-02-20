import React from "react";
import styled from "styled-components";
import { remote } from "electron";
import useEnvironment from "../configuration/useEnvironment.hook";
const fs = remote.require("fs");
const path = remote.require("path");

const Portrait = styled.img`
  position: absolute;
  right: 50vw;
  bottom: 0;
  height: 100vh;
  transform: translateX(100%) scaleX(-1);
`;


export default function PortraitPlayerTwo({ character }) {
  const environment = useEnvironment();

  if (!character || !character.portrait) {
    return null;
  }
  const imagePath = path.resolve(environment.currentDirectory, character.portrait);
  if (!fs.existsSync(imagePath)) {
    return null;
  }

  return <Portrait src={imagePath} />;
}
