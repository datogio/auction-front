declare namespace image {
  interface Response {
    id: number;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null | string;
    provider: string;
    provider_metadata: null | string;
    createdAt: string;
    updatedAt: string;
  }
}
