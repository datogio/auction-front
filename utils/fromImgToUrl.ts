import { API_URL } from './urls';

const fromImgToUrl = (image: image.Response) => {
  if (!image) {
    // return
    return '';
  }

  if (image.url.indexOf('/') === 0) {
    return `${API_URL}${image.url}`;
  }

  return image.url;
};

export default fromImgToUrl;
