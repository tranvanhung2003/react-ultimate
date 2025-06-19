// import "./Header.css";
import { BookOutlined, HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const items = [
    {
      label: <Link to="/">Home</Link>,
      key: "/",
      icon: <HomeOutlined />,
    },
    {
      label: <Link to="/users">Users</Link>,
      key: "/users",
      icon: <UserOutlined />,
    },
    {
      label: <Link to="/books">Books</Link>,
      key: "/books",
      icon: <BookOutlined />,
    },
  ];

  return (
    <Menu
      // onClick={onClick}
      selectedKeys={[location.pathname]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Header;
