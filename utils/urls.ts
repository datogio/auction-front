export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';
export const CLIENT_URL =
  process.env.NEXT_PUBLIC_CLIENT_URL || 'http://localhost:3000';

export const fromImgToUrl = (image: image.Response) => {
  if (!image) {
    return '';
  }

  if (image.url.indexOf('/') === 0) {
    return `${API_URL}${image.url}`;
  }

  return image.url;
};
