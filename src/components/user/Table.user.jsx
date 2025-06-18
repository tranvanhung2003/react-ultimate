import { Table } from "antd";
import { useState } from "react";
import { fetchAllUsersAPI } from "../../services/api.service";

const UserTable = () => {
  const [dataUsers, setDataUsers] = useState([
    {
      _id: "1",
      fullName: "John Doe",
      email: "john.doe@example.com",
    },
    {
      _id: "2",
      fullName: "Jane Smith",
      email: "jane.smith@example.com",
    },
  ]);

  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];

  const loadUsers = async () => {
    const response = await fetchAllUsersAPI();
    return response.data;
  };

  loadUsers();

  return <Table columns={columns} dataSource={dataUsers} />;
};

export default UserTable;
