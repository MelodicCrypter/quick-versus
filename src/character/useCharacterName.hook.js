import ini from "ini";
import { remote } from "electron";
import useEnvironment from "../configuration/useEnvironment.hook";
const fs = remote.require("fs");
const path = remote.require("path");

export default function useCharacterName(character) {
  const environment = useEnvironment();

  if (!character || !character.definition) {
    return "Unknown";
  }

  const definitionPath = path.resolve(environment.currentDirectory, character.definition);
  if (!fs.existsSync(definitionPath)) {
    return "Unknown";
  }

  const definition = ini.parse(fs.readFileSync(definitionPath, "utf-8"));

  return definition.Info.displayname || definition.Info.name;
}
