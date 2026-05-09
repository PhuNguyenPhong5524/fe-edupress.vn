
import { useState } from "react";
import { Modal, Form, Input, Button, Alert } from "antd";
import axios from "axios";
import { Select } from "antd";
import EditCourseIcon from "../../../../../../components/icons/EditCourseIcon";

const { Option } = Select;
  
const BoxEditCourseSection = ({ }) => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };


  return (
    <>
      <button
        onClick={showModal}
        className="
                text-blue-500 hover:text-blue-700 transition p-2 group
            duration-300 ease-in-out hover:bg-[#ffd5bf] rounded-[5px]
            hover:scale-105 hover:opacity-65 cursor-pointer 
        " 
      >
          <EditCourseIcon 
              size={18}
              className="
                  group-hover:scale-125 group-hover:fill-blue-500
              "
          />
      </button>
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
      >
        <div>
            <h1 className="text-[20px] font-semibold text-[#000000">Chỉnh sửa bài học</h1>
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
                  label={<span className="text-[12px]">Tên bài học</span>}
                  name="chapter_title"
                  rules={[
                      { required: true, message: "Vui lòng nhập bài học!" },
                  ]}
                >
                      <Input className="custom-input" placeholder="Nhập bài học" />
                </Form.Item>

                <Form.Item className="custom-form-item">
                    <Button
                        htmlType="submit"
                        // loading={loading}
                        className="custom-btn w-full"
                    >
                        Xác nhận cập nhật
                    </Button>
                </Form.Item>
            </Form>
        </div>
      </Modal>
    </>
  );
};
export default BoxEditCourseSection;