import { useEffect, useState } from "react";

let url = "https://api.escuelajs.co/api/v1/users";

export default function APIHandler() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  return users;
}
