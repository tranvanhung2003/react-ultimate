import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Table } from "antd";
import UpdateModalUser from "./UpdateModal.user";

const UserTable = ({ dataUsers }) => {
  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
      key: "_id",
      render: (text) => <a href={"#"}>{text}</a>,
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
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "20px" }}>
          <a>
            <EditOutlined style={{ cursor: "pointer", color: "orange" }} />
          </a>
          <a>
            <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
          </a>
        </div>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
      <UpdateModalUser />
    </>
  );
};

export default UserTable;
