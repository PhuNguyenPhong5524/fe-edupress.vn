
import { useState } from "react";
import { Modal, Form, Input, Button, Alert } from "antd";
import axios from "axios";
import { Select } from "antd";
import {
  PlusOutlined,
} from "@ant-design/icons";


const { Option } = Select;
  
const BoxAddCourseLecture = ({ }) => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };


  return (
    <>
      <button
        onClick={showModal}
        className="
          mt-2 w-full
          flex items-center justify-center gap-2
          border border-dashed border-gray-500 transform transition duration-300 esease-in-out
          text-gray-300 hover:text-blue-500 hover:scale-95
          hover:border-blue-500 cursor-pointer
          rounded-md py-2
        "
      >
        <PlusOutlined />
        <span>Thêm bài giảng</span>
      </button>
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
      >
        <div>
            <h1 className="text-[20px] font-semibold text-[#000000">Thêm bài giảng</h1>
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
                  label={<span className="text-[12px]">Tên bài giảng</span>}
                  name="chapter_title"
                  rules={[
                      { required: true, message: "Vui lòng nhập tên bài học!" },
                  ]}
                >
                      <Input className="custom-input" placeholder="Nhập tên bài học" />
                </Form.Item>
                
                <Form.Item
                  className="custom-form-item w-full"
                  label={<span className="text-[12px]">Video bài giảng</span>}
                  name="vid_lectures_url"
                  rules={[
                      { required: true, message: "Vui lòng nhập url video bài giảng!" },
                  ]}
                >
                      <Input className="custom-input" placeholder="Nhập url video bài giảng" />
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
export default BoxAddCourseLecture;