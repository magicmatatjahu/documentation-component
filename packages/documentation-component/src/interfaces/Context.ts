import { Sources, PureSources } from "./Source";
import { RenderEngineWithOptions } from "./RenderEngine";

export interface Context {
  sources: Sources;
  pureSources: PureSources;
}
