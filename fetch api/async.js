const creatTodo = async (todo) => {
  let options = {
    headers: {
      "Content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(todo),
  };
  let p = await fetch("https://jsonplaceholder.typicode.com/posts", options);
  let response = await p.json();
  return response;
};

const getTodo = async (id) => {
  let response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + id
  );
  let r = await response.json();
  return r;
};

const mainFunc = async () => {
  let todo = {
    title: "keshav",
    body: "bhai",
    userId: 2004,
  };
  let todor = await creatTodo(todo);
  console.log(todor);
  console.log(await getTodo(85));
};

mainFunc();
