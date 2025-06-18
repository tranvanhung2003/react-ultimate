import { Table } from "antd";
import { useLayoutEffect, useState } from "react";
import { fetchAllUsersAPI } from "../../services/api.service";

const UserTable = () => {
  const [dataUsers, setDataUsers] = useState([]);

  useLayoutEffect(() => {
    loadUsers();
  }, [dataUsers]);

  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
  ];

  const loadUsers = async () => {
    const response = await fetchAllUsersAPI();
    setDataUsers(response?.data || []);
  };

  return <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />;
};

export default UserTable;
