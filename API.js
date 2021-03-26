const url = 'https://nodejs-express-app-cxlkb-2020-11-30.eu-gb.mybluemix.net/ai';

export const getSession = async () => {
  try {
    const resp = await fetch(
      `${url}/session`,
    );
    const json = await resp.json();
    return json.response;
  } catch (error) {
    console.error(error);
  }
  return false;
};

export const postMessage = async (session, message) => {
  try {
    const resp = await fetch(
      url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId: session,
          reqText: message,
        }),
      },
    );
    const json = await resp.json();
    return json.response;
  } catch (error) {
    console.error(error);
  }
  return false;
};

export const delSession = async (session) => {
  try {
    const resp = await fetch(`${url}/session`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sessionId: session,
      }),
    });
    const json = await resp.json();
    return json.response;
  } catch (error) {
    console.error(error);
  }
  return false;
};
