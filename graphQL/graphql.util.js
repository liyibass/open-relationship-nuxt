export const graphql = async (query, variables = {}) => {
  return fetch("http://localhost:3000/admin/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      variables,
      query,
    }),
  })
    .then((result) => {
      console.log("Upload success");
      console.log(result);
      return result.json();
    })
    .catch((error) => {
      console.log("Upload failed");
      console.log(error);
      return error.message;
    });
};
