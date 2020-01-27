import { IUrlBuilder } from "../../../interfaces/IUrlBuilder";
import { Config } from "../../../config/app.config";

export class SourcesUrlBuilderService implements IUrlBuilder {

  build() {
    return `${Config.URL_SOURCES}apiKey=${Config.API_KEY}`;
  }
}
