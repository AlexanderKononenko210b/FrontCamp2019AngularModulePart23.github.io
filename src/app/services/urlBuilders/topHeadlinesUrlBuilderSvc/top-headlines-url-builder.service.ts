import { IUrlBuilder } from "../../../interfaces/IUrlBuilder";
import { Config } from "../../../config/app.config";

export class TopHeadlinesUrlBuilderService implements IUrlBuilder {
  build(sources: string) {
    return sources
      ? `${Config.URL_TOP_HEADLINES}sources=${sources}&apiKey=${Config.API_KEY}`
      : `${Config.URL_TOP_HEADLINES}country=us&apiKey=${Config.API_KEY}`
  }
}
