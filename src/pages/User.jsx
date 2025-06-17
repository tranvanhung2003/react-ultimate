import UserForm from "../components/user/Form.user";
import UserTable from "../components/user/Table.user";

const UserPage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <UserForm />
      <UserTable />
    </div>
  );
};

export default UserPage;
