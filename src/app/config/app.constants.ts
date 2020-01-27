import { SourceModel } from "../models/source-model";
export const Constants = {
    sources: [
        new SourceModel("custom-news", "Custom Articles"),
        new SourceModel("all-sources", "All Articles")
    ],
    messages: [
        (id: string) => `Article with id = ${id} was added successfully.`,
        (id: string) => `Article with id = ${id} was updated successfully`,
        (id: string) => `No padding changes for id = ${id}`,
        (id: string) => `Article for update with id = ${id} wasn't found.`,
        (id: string) => `Article with id = ${id} was deleted successfully.`,
        (id: string) => `Article for delete with id = ${id} wasn't found.`,
        () => `Internal server error`
    ]
}