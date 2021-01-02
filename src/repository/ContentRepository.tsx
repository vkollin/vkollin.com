import {BaseRepository} from "./BaseRepository";
import {AxiosResponse} from "axios";

export class ContentRepository extends BaseRepository {

    getContentFromGithub = (files: string[]): Promise<{ [_: string]: string }> => {
        const promises: Promise<AxiosResponse<string>>[] = [];

        for (const file of files) {
            promises.push(this.axios.get(file));
        }

        return new Promise(((resolve, reject) => {
            Promise.allSettled(promises)
                .then((settledResults) => {
                        const content = {} as { [_: string]: string };

                        for (const r of settledResults) {
                            if (r.status === 'fulfilled') {
                                const fulfilledResult = r as PromiseFulfilledResult<AxiosResponse<string>>
                                const url = fulfilledResult.value.config.url as unknown as string;

                                content[url] = fulfilledResult.value.data;
                            }
                        }

                        resolve(content)
                    }
                )
                .catch(e => {
                    reject(e)
                })
        }))
    }
}
