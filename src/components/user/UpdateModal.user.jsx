import { Input, Modal, notification } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";

const UpdateModalUser = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmitButton = async () => {
    const res = await createUserAPI(fullName, email, password, phone);

    if (res?.data) {
      notification.success({
        message: "User Created Successfully",
        description: `User ${res?.data?.fullName} created successfully!`,
      });

      resetAndCloseModal();
      await loadUsers();
    } else {
      notification.error({
        message: "User Creation Failed",
        description: Array.isArray(res?.message)
          ? res?.message.join(", ")
          : res?.message,
      });
    }
  };

  const resetAndCloseModal = () => {
    setIsModalOpen(false);
    setFullName("");
    setEmail("");
    setPassword("");
    setPhone("");
  };

  return (
    <Modal
      title="Update User"
      open={isModalOpen}
      closable={{ "aria-label": "Custom Close Button" }}
      maskClosable={false}
      okText="Update"
      onOk={() => handleSubmitButton()}
      onCancel={() => resetAndCloseModal()}
    >
      <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
        <div>
          <span>FullName</span>
          <Input
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
        </div>
        <div>
          <span>Email</span>
          <Input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <span>Password</span>
          <Input.Password
            value={password}
            onChange={(event) => setPassword(event.target.value)}
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

export default UpdateModalUser;
