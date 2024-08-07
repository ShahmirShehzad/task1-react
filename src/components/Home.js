import { useEffect, useRef, useState } from "react";
import User from "./User";
import { faker } from "@faker-js/faker";

const total = 10;

function generateData() {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

function Home() {
  const myref = useRef(null);
  const [data, setData] = useState(Array.from({ length: total }, generateData));

  function handleClick() {
    console.log("Clicked");
    setData(Array.from({ length: total }, generateData));
  }

  useEffect(() => {
    const button = myref.current;
    button.addEventListener("click", handleClick);
    return () => {
      button.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <h1>Information about people</h1>
      <button ref={myref}>Add information</button>
      {data.map((item) => (
        <User key={item.userId} data={item} />
      ))}
    </>
  );
}

export default Home;
