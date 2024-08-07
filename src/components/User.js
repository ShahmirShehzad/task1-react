import { Avatar, Flex } from "antd";
import React from "react";
import { Space } from "antd";

const justifyOptions = [
  "flex-start",
  "center",
  "flex-end",
  "space-between",
  "space-around",
  "space-evenly",
];

const alignOptions = ["flex-start", "center", "flex-end"];

function User(props) {
  const [justify, setJustify] = React.useState(justifyOptions[1]);
  const [alignItems, setAlignItems] = React.useState(alignOptions[1]);

  return (
    <>
      <Flex
        justify={justify}
        align={alignItems}
        gap="large"
        style={{ margin: 25 }}
      >
        <Flex justify={justify} align={alignItems} gap="small" vertical>
          <div>Username : {props.data.username}</div>
          <div>Email : {props.data.email}</div>
        </Flex>
        <Space wrap size={16}>
          <Avatar size={64}>
            <img src={props.data.avatar} alt="Avatar" />
          </Avatar>
        </Space>
      </Flex>
    </>
  );
}

export default User;
