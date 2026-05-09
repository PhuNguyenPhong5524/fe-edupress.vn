import { Collapse, Button, Space } from "antd";
import {
  CaretDownOutlined,
  ClockCircleOutlined,
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import BoxLesson from "./BoxLesson";
import EditCourseIcon from "../../../../../components/icons/EditCourseIcon";
import CloseIcon from "../../../../../components/icons/CloseIcon";

const BoxShowCourseSection = ({
  showCoure,
  onEditSection,
  onDeleteSection,
  onAddLecture,
  onEditLecture,
  onDeleteLecture,
}) => {
  const sections = showCoure;

  if (!Array.isArray(sections) || sections.length === 0) return null;

  const items = sections.map((section) => ({
    key: section._id,

    label: (
      <div
        className="
          flex justify-between items-start w-full
          px-3 py-2 rounded-md
          
        "
      >
        {/* LEFT */}
        <div className="flex flex-col gap-1 text-[12px] lg:text-[14px]">
          <span className="font-semibold text-white">
            {section.chapter_title}
          </span>

          <div className="flex items-center gap-3 text-white text-[10px] opacity-90">
            <span>{section.lectures?.length || 0} bài giảng</span>
            <span>{section.duration}</span>
          </div>
        </div>

        {/* RIGHT */}
        <Space size="small">
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onEditSection?.(section);
                }}
                className="
                    text-white  transition p-2 
                    duration-300 ease-in-out hover:bg-[#ffd5bf] rounded-[5px]
                    hover:opacity-65 cursor-pointer hover:scale-125
                " 
            >
                <PlusOutlined 
                    size={18}
                    className="
                    
                        group-hover:fill-blue-500
                    "
                />
            </button>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onEditSection?.(section);
                }}
                className="
                    text-blue-500 hover:text-blue-700 transition p-2 
                    duration-300 ease-in-out hover:bg-[#ffd5bf] rounded-[5px]
                    hover:opacity-65 cursor-pointer hover:scale-125
                " 
            >
                <EditCourseIcon 
                    size={18}
                    className="
                    
                        group-hover:fill-blue-500
                    "
                />
            </button>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onDeleteSection?.(section._id);
                }}
                className="
                    text-red-500 hover:text-red-700 transition p-2 
                    duration-300 ease-in-out hover:bg-[#ffd5bf] rounded-[5px]
                    hover:opacity-65 cursor-pointer hover:scale-125
                "
            >
                <CloseIcon 
                    size={18} 
                    className="
                        
                    "
                />
            </button>
        </Space>
      </div>
    ),

    children: (
      <div
        className="
          flex flex-col gap-1
          px-2 py-2
          transition-all duration-300 ease-in-out
        "
      >
        {section.lectures?.map((lecture) => (
          <BoxLesson
            key={lecture._id}
            title={lecture.title}
            time={lecture.duration}
            preview={lecture.preview}
            onEdit={() => onEditLecture?.(lecture, section)}
            onDelete={() => onDeleteLecture?.(lecture._id, section)}
          />
        ))}
      </div>
    ),
  }));

  return (
    <Collapse
      accordion
      items={items}
      defaultActiveKey={[items[0].key]}
      expandIconPlacement="start"
      expandIcon={({ isActive }) => (
        <CaretDownOutlined
          rotate={isActive ? 180 : 0}
          style={{ color: "white" }}
          className="
            transition-transform duration-300 ease-in-out
          "
        />
      )}
      style={{backgroundColor:"#1F2937", color:"white"}}
    />
  );
};

export default BoxShowCourseSection;
