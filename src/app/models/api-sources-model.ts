import { SourcesModel } from "./sources-model";

export class ApiSourcesModel {
    constructor(
        public status: string,
        public sources: SourcesModel[]
    ) {}
}