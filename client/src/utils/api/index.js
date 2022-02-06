import apisauce from 'apisauce';

const BASE_URI = 'http://localhost:8000';

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

const Api = (token, baseURL = BASE_URI) => {
  const api = apisauce.create({
    baseURL,
    headers,
  });

  const Authorization = `Bearer ${token}`;
  api.setHeaders({ Authorization, ...headers });
  return {
    getEvents: (categories) =>
      api.get(
        categories.length > 0 ? `/api/v1/events${categories}` : `/api/v1/events`
      ),
  };
};

export default Api;
