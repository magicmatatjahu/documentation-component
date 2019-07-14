import React from "react";
import createUseContext from "constate";
import { runSystem, extractSources } from "./system";
import { runRender } from "./render";
import { Context, Options, Source, Sources } from "../interfaces";

const Container = (options: Options): Context => {
  const sources = runSystem(options);
  const pureSources = extractSources(sources);

  return {
    sources,
    pureSources,
  };
};

const { Provider, Context } = createUseContext(Container);
const DC = { Provider, Context };

export { DC, Provider as DCProvider, Context as DCContext };
