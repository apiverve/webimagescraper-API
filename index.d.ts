declare module '@apiverve/webimagescraper' {
  export interface webimagescraperOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface webimagescraperResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class webimagescraperWrapper {
    constructor(options: webimagescraperOptions);

    execute(callback: (error: any, data: webimagescraperResponse | null) => void): Promise<webimagescraperResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: webimagescraperResponse | null) => void): Promise<webimagescraperResponse>;
    execute(query?: Record<string, any>): Promise<webimagescraperResponse>;
  }
}
