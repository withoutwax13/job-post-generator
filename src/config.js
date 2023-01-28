import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "org-keCuqZeSUswQlivZ2cKHnzP3",
    apiKey: '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',
});

const openai = new OpenAIApi(configuration);

export default openai