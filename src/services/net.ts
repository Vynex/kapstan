export async function GetRequest(endpoint: URL | string) {
  const result = await fetch(endpoint);

  try {
    const json = await result.json();
    if (result.status !== 200) throw json;
    else return json;

  } catch(error) {
    console.error("GetRequest:", endpoint, error);
  }
}
