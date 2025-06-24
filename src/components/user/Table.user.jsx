import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Table } from "antd";
import { useState } from "react";
import UpdateUserModal from "./UpdateModal.user";
import ViewUserDetail from "./ViewDetail.user";

const UserTable = ({ dataUsers, loadUsers }) => {
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [dataUpdate, setDataUpdate] = useState(null);

  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [dataDetail, setDataDetail] = useState(null);

  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
      key: "_id",
      render: (text, record) => (
        <a
          href={"#"}
          onClick={() => {
            setDataDetail(record);
            setIsDetailOpen(true);
          }}
        >
          {text}
        </a>
      ),
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
            <EditOutlined
              style={{ cursor: "pointer", color: "orange" }}
              onClick={() => {
                setDataUpdate(record);
                setIsModalUpdateOpen(true);
              }}
            />
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
      <UpdateUserModal
        isModalUpdateOpen={isModalUpdateOpen}
        setIsModalUpdateOpen={setIsModalUpdateOpen}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
        loadUsers={loadUsers}
      />
      <ViewUserDetail
        isDetailOpen={isDetailOpen}
        setIsDetailOpen={setIsDetailOpen}
        dataDetail={dataDetail}
        setDataDetail={setDataDetail}
      />
    </>
  );
};

export default UserTable;
