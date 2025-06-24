import { Drawer } from "antd";

const ViewUserDetail = ({
  isDetailOpen,
  setIsDetailOpen,
  dataDetail,
  setDataDetail,
}) => {
  return (
    <Drawer
      title="Chi tiết User"
      closable={{ "aria-label": "Close Button" }}
      onClose={() => {
        setDataDetail(null);
        setIsDetailOpen(false);
      }}
      open={isDetailOpen}
    >
      {dataDetail ? (
        <>
          <p>Id: {dataDetail._id}</p>
          <br />
          <p>Full Name: {dataDetail.fullName}</p>
          <br />
          <p>Email: {dataDetail.email}</p>
          <br />
          <p>Phone: {dataDetail.phone}</p>
        </>
      ) : (
        <p>Không có dữ liệu</p>
      )}
    </Drawer>
  );
};

export default ViewUserDetail;
