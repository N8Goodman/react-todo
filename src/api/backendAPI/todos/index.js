export const fetchTodos = async values => {
  const url = "https://jsonplaceholder.typicode.com/todos?userId=1";

  const response = await fetch(url);

  let responseBody;
  if (response.ok) {
    responseBody = await response.json();
    return responseBody;
  } else {
    await response.json();
    console.log("Bad request");
  }
};