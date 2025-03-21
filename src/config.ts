import pkg from "../package.json";
import type { IConfig } from "./types/config";

const config: IConfig = {
  siteInfo: {
    name: "React Input Tags",
  },
  version: pkg.version,
};

export default config;
