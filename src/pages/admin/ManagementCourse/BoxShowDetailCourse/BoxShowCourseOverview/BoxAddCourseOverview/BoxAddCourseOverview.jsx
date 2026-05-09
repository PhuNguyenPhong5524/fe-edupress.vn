
import { useState } from "react";
import { Modal, Form, Input, Button, Alert } from "antd";
import axios from "axios";
import { Select } from "antd";

const { Option } = Select;
  
const BoxAddCourseOverview = ({ }) => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };


  const handleChange = (value) => {
    setCategory(value);
    console.log("Selected:", value);
  };
  const handleChangeProvider = (value) => {
    setProvider(value);
    console.log("Selected:", value);
  };

  return (
    <>
      <button 
        onClick={showModal}
        className="
          bg-[#FF7D35] text-white px-4 py-2 rounded transition duration-300 ease-in-out 
          hover:scale-95 hover:opacity-65 cursor-pointer
        " 
      >
        + Thêm tổng quan khóa học
      </button>
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
      >
        <div>
            <h1 className="text-[20px] font-semibold text-[#000000">Thêm tổng quan khóa học</h1>
            <Form
                layout="vertical"
                // onFinish={handleAdd}
                autoComplete="off"
                // disabled={loading}
                className=""
            >   
                <Form.Item
                    className="custom-form-item w-full"
                    label={<span className="text-[12px]">Mã</span>}
                    name="_id"
                    rules={[
                        { required: true, message: "Vui lòng nhập nhà cung cấp!" },
                    ]}
                >
                  <Input className="custom-input" disabled  defaultValue={`121212121212313343535`}/>
                </Form.Item>

                <Form.Item
                  className="custom-form-item w-full"
                  label={<span className="text-[12px]">Yêu cầu khóa học</span>}
                  name="request_name"
                  rules={[
                      { required: true, message: "Vui lòng nhập yêu cầu khóa học!" },
                  ]}
                >
                      <Input className="custom-input" placeholder="Nhập yêu cầu khóa học" />
                </Form.Item>


{/* 
                {message.content && (
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
                        Xác nhận thêm
                    </Button>
                </Form.Item>
            </Form>
        </div>
      </Modal>
    </>
  );
};
export default BoxAddCourseOverview;