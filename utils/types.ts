export interface Post {
  title: string;
  publishedAt: string;
  updatedAt: string;
  description: string;
  image: {
    filePath: string;
    relativeFilePath: string;
    format: string;
    height: number;
    width: number;
    aspectRatio: number;
    blurhasDataUrl: string;
    blurDataURL: string;
    alt: string;
    blurhashDataUrl: string;
  };
  isPublished: boolean;
  tags: string[];
  url: string;
}
