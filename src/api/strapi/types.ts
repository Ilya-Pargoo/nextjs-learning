import { BasicResponse } from '../common/types';

export type StrapiBasicResponse<T> = BasicResponse<T> & {
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export type StrapiImage = {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    large: StrapiFormatImage;
    small: StrapiFormatImage;
    medium: StrapiFormatImage;
    thumbnail: StrapiFormatImage;
  };
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
  publishedAt: string;
};

export type StrapiFormatImage = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
};

export type DreamStory = {
  slug: string;
  excerpt: string;
  createdAt: string;
  date: string;
  description: string;
  documentId: string;
  id: number;
  publishedAt: string;
  title: string;
  updatedAt: string;
  image: StrapiImage;
};
