import { HttpError } from 'utils';

const notFound = () => {
  throw new HttpError(404, 'Not Found');
};

export default notFound;
