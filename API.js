const IBMUrl = 'https://nodejs-express-app-cxlkb-2020-11-30.eu-gb.mybluemix.net/ai';
const heroku = 'https://ibmuserver.herokuapp.com';

export const getSession = async () => {
  try {
    const resp = await fetch(
      `${IBMUrl}/session`,
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
      IBMUrl, {
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
    const resp = await fetch(`${IBMUrl}/session`, {
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

export const getPiNumber = async (piDecimals) => {
  try {
    const resp = await fetch(
      `${heroku}/pinumber/?searchnext=${piDecimals}`,
    );
    const json = await resp.json();
    return json.value;
  } catch (error) {
    console.error(error);
  }
  return false;
};
