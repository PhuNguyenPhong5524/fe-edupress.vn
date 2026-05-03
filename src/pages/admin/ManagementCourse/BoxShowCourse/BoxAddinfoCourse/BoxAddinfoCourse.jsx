import { useState } from "react";
import { Modal, Form, Input, Button, Alert } from "antd";
import axios from "axios";
import { Select } from "antd";

const { Option } = Select;
  
const BoxAddinfoCourse = ({ refetch }) => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const [category, setCategory] = useState(null);
  const [provider, setProvider] = useState(null);

  const categories = [
    { id: "1", name: "Lập trình" },
    { id: "2", name: "Thiết kế" },
    { id: "3", name: "Marketing" },
    { id: "4", name: "Kinh doanh" },
  ];
  const providers = [
    { id: "1", name: "Nguyễn Văn A" },
    { id: "2", name: "Trần Văn B" },
    { id: "3", name: "Lê Văn C" },
    { id: "4", name: "Phạm Văn D" },
  ];
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
        + Thêm khóa học
      </button>
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
      >
        <div>
            <h1 className="text-[20px] font-semibold text-[#000000">Thêm khóa học mới</h1>
            <Form
                layout="vertical"
                // onFinish={handleAdd}
                autoComplete="off"
                // disabled={loading}
                className=""
            >   
                <div 
                  className="w-full flex justify-between items-center gap-2"
                >
                  <Form.Item
                      className="custom-form-item"
                      label={<span className="text-[12px]">Danh mục</span>}
                      name="category"
                      className="w-full"
                      rules={[
                          { required: true, message: "Vui lòng nhập danh mục!" },
                      ]}
                  >
                    <Select
                      placeholder="Chọn danh mục"
                      onChange={handleChange}
                      value={category}
                      style={{ 
                        outline: "none", border: "1.5px solid #CBCBCB", borderRadius: "10px" }}
                      className="
                        w-full h-[40px] 
                      "
                    >
                      {categories.map((item) => (
                        <Option key={item.id} value={item.id}>
                          {item.name}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>

                  <Form.Item
                      className="custom-form-item"
                      label={<span className="text-[12px]">Nhà cung cấp</span>}
                      name="provider"
                      className="w-full"
                      rules={[
                          { required: true, message: "Vui lòng nhập nhà cung cấp!" },
                      ]}
                  >
                    <Select
                      placeholder="Chọn Nhà cung cấp"
                      onChange={handleChangeProvider}
                      value={provider}
                      style={{ 
                        outline: "none", border: "1.5px solid #CBCBCB", borderRadius: "10px" }}
                      className="
                        w-full h-[40px] 
                      "
                    >
                      {providers.map((item) => (
                        <Option key={item.id} value={item.id}>
                          {item.name}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </div>
                
                <div
                  className="w-full flex justify-between items-center gap-2"
                >
                  <Form.Item
                      className="custom-form-item"
                      label={<span className="text-[12px]">Tên khóa học</span>}
                      name="courseName"
                      className="w-full"
                      rules={[
                          { required: true, message: "Vui lòng nhập tên khóa học!" },
                      ]}
                  >
                      <Input className="custom-input" placeholder="Nhập tên khóa học"/>
                  </Form.Item>

                  <Form.Item
                      className="custom-form-item"
                      label={<span className="text-[12px]">Giá khóa học</span>}
                      name="price"
                      className="w-full"
                      rules={[
                          { required: true, message: "Vui lòng nhập giá khóa học!" },
                      ]}
                  >
                      <Input className="custom-input" placeholder="Nhập giá khóa học"/>
                  </Form.Item>

                </div>

                <div
                  className="w-full flex justify-between items-center gap-2"
                >
                  <Form.Item
                      className="custom-form-item"
                      label={<span className="text-[12px]">Ảnh khóa học</span>}
                      name="image_url"
                      className="w-full"  
                      rules={[
                          { required: true, message: "Vui lòng nhập URL ảnh khóa học!" },
                      ]}
                  >
                      <Input className="custom-input" placeholder="Nhập URL ảnh khóa học" />
                  </Form.Item>

                  <Form.Item
                        className="custom-form-item"
                        label={<span className="text-[12px]">Video khóa học</span>}
                        name="video_url"
                        className="w-full"
                        rules={[
                            { required: true, message: "Vui lòng nhập URL video khóa học!" },
                        ]}
                    >
                        <Input className="custom-input" placeholder="Nhập URL video khóa học" />
                  </Form.Item>
                </div>
                <Form.Item
                  className="custom-form-item"
                  label={<span className="text-[12px]">Thời gian khóa học</span>}
                  name="duration"
                  className="w-full"
                  rules={[
                      { required: true, message: "Vui lòng nhập thời gian khóa học!" },
                  ]}
                >
                      <Input className="custom-input" placeholder="Nhập thời gian khóa học" />
                </Form.Item>

                <Form.Item
                    className="custom-form-item"
                    label={<span className="text-[12px]">Mô tả khóa học</span>}
                    name="description"
                    className="w-full"
                    rules={[
                        { required: true, message: "Vui lòng nhập mô tả khóa học!" },
                    ]}
                  >
                      <Input.TextArea className="" placeholder="Nhập mô tả khóa học" rows={4}  />
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
export default BoxAddinfoCourse;