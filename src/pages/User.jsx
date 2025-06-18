import { useEffect, useState } from "react";
import UserForm from "../components/user/Form.user";
import UserTable from "../components/user/Table.user";
import { fetchAllUsersAPI } from "../services/api.service";

const UserPage = () => {
  const [dataUsers, setDataUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const response = await fetchAllUsersAPI();
    setDataUsers(response?.data || []);
  };

  return (
    <div style={{ padding: "20px" }}>
      <UserForm loadUsers={loadUsers} />
      <UserTable dataUsers={dataUsers} />
    </div>
  );
};

export default UserPage;
