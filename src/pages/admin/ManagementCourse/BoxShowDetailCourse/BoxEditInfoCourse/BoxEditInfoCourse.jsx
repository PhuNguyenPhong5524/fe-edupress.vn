import { useEffect, useState } from "react";
import { Modal, Form, Input, Button, Alert } from "antd";
import axios from "axios";
import EditCourseIcon from "../../../../../components/icons/EditCourseIcon";

// const API_URL =
//   "https://mindx-mockup-server.vercel.app/api/resources/users";

const BoxEditInfoCourse = ({ }) => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [message, setMessage] = useState({ type: "", content: "" });
  const [loading, setLoading] = useState(false);

  const showModal = () => {
    setMessage({ type: "", content: "" });
    setOpen(true);
  };

  // 👉 Fill data khi mở modal
  // useEffect(() => {
  //   if (record && open) {
  //     form.setFieldsValue({
  //       email: record.email,
  //       username: record.username,
  //       password: record.password,
  //     });
  //   }
  // }, [record, open, form]);

  // const handleUpdate = async (values) => {
  //   setLoading(true);
  //   setMessage({ type: "", content: "" });

  //   try {
  //     await axios.put(
  //       `${API_URL}/${record._id}?apiKey=6957348a9dda81df11d0c527`,
  //       {
  //         ...record,
  //         ...values,
  //       }
  //     );

  //     setMessage({
  //       type: "success",
  //       content: "Cập nhật thành công!",
  //     });

  //     refetch();        // reload table
  //     setTimeout(() => {
  //       setOpen(false); // đóng modal
  //       form.resetFields();
  //     }, 800);
    
  //   } catch (error) {
  //     setMessage({
  //       type: "error",
  //       content: "Cập nhật thất bại!",
  //     });
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <>
      <button 
          onClick={showModal}
          className="
              bg-[#FF7D35] text-white rounded text-sm flex items-center
              hover:bg-[#d44700] hover:shadow-lg transition px-4 py-[8px]
              duration-300 ease-in-out cursor-pointer hover:scale-105
          "
      >   
          <EditCourseIcon size={16} className="inline-block mr-1" />
          <p className="inline-block">Chỉnh sửa khóa học</p>
      </button>
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
      >
        <h1 className="text-[20px] font-semibold mb-4">
          Chỉnh sửa khóa học
        </h1>

        <Form
          form={form}
          layout="vertical"
          // onFinish={handleUpdate}
          disabled={loading}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập email!" },
              { type: "email", message: "Email không hợp lệ!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Tên người dùng"
            name="username"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, min: 6 }]}
          >
            <Input.Password />
          </Form.Item>

          {/* {message.content && (
              <Alert
                  type={message.type}
                  showIcon
                  className="mb-3"
                  description={<span className="text-[12px]">{message.content}</span>}
              />
          )} */}

          <Form.Item className="custom-form-item">
              <Button
                  htmlType="submit"
                  // loading={loading}
                  className="custom-btn w-full"
              >
                  Xác nhận lưu thông tin 
              </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default BoxEditInfoCourse;
