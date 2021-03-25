import { useEffect, useState } from 'react';

const url = 'https://nodejs-express-app-cxlkb-2020-11-30.eu-gb.mybluemix.net/ai';

export const getSession = () => {
  const [data, setData] = useState([]);
  fetch(`${url}/session`)
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error));
  return data.response;
};

export const postMessage = (message, session) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sessionId: session,
        reqText: message,
      }),
    })
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);
  return data.response;
};

export const delSession = (session) => {
  fetch(`${url}/session`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      sessionId: session,
    }),
  })
    .catch((error) => console.error(error));
};
