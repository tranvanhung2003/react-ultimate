import { Input, Modal, notification } from "antd";
import { useEffect, useState } from "react";
import { updateUserAPI } from "../../services/api.service";

const UpdateUserModal = ({
  isModalUpdateOpen,
  setIsModalUpdateOpen,
  dataUpdate,
  setDataUpdate,
  loadUsers,
}) => {
  const [id, setId] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (dataUpdate) {
      setId(dataUpdate._id);
      setFullName(dataUpdate.fullName);
      setPhone(dataUpdate.phone);
    }
  }, [dataUpdate]);

  const handleSubmitButton = async () => {
    const res = await updateUserAPI(id, fullName, phone);

    if (res?.data) {
      notification.success({
        message: "User Updated Successfully",
        description: `User ${res?.data?.fullName} updated successfully!`,
      });

      resetAndCloseModal();
      await loadUsers();
    } else {
      notification.error({
        message: "User Update Failed",
        description: Array.isArray(res?.message)
          ? res?.message.join(", ")
          : res?.message,
      });
    }
  };

  const resetAndCloseModal = () => {
    setDataUpdate(null);
    setId("");
    setFullName("");
    setPhone("");
    setIsModalUpdateOpen(false);
  };

  return (
    <Modal
      title="Update User"
      open={isModalUpdateOpen}
      closable={{ "aria-label": "Custom Close Button" }}
      okText="Update"
      onOk={() => handleSubmitButton()}
      onCancel={() => resetAndCloseModal()}
    >
      <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
        <div>
          <span>Id</span>
          <Input value={id} disabled />
        </div>
        <div>
          <span>FullName</span>
          <Input
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
        </div>
        <div>
          <span>Phone Number</span>
          <Input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default UpdateUserModal;
