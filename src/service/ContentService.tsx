import {ContentRepository} from "../repository/ContentRepository";
import axios from "axios";

export class ContentService {

    static githubApiBaseUrl = 'https://raw.githubusercontent.com';
    static repo = 'vkollin/vkollin.com';

    private contentRepository: ContentRepository;

    constructor() {
        this.contentRepository = new ContentRepository(axios);
    }

    private static getPrefix(): string {
        return `${ContentService.githubApiBaseUrl}/${ContentService.repo}/master/content/`;
    }

    getFiles(files: string[]): Promise<{ [_: string]: string }> {
        return new Promise<{ [p: string]: string }>(((resolve, reject) => {
            this.contentRepository
                .getContentFromGithub(files.map(f => `${ContentService.getPrefix()}${f}`))
                .then(response => {
                    const cleanResponse = {} as { [_: string]: string };

                    for (const [filename, markdown] of Object.entries(response)) {
                        const cleanKey = filename.replace(ContentService.getPrefix(), '');

                        cleanResponse[cleanKey] = markdown;
                    }

                    resolve(cleanResponse)
                })
                .catch(e => {
                    reject(e)
                })
        }))
    }
}
