let numberbaseAPI = 'https://ibmuserver.herokuapp.com/pinumber/?searchnext=';

// eslint-disable-next-line import/prefer-default-export
export async function getNumberBaseApi(num) {
  try {
    numberbaseAPI += num;
    const response = await fetch(
      numberbaseAPI,
    );
    const responseJson = await response.json();
    // console.log(responseJson.value);
    return responseJson.value;
  } catch (error) {
    console.error(error);
  }
  return false;
}
