import { Collapse, Button, Space, Popconfirm } from "antd";
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
import BoxEditCourseSection from "./BoxCourseSection/BoxEditCourseSection";
import BoxAddCourseSection from "./BoxCourseSection/BoxAddCourseSection";
import BoxAddCourseLecture from "./BoxCourseLecture/BoxAddCourseLecture";

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
          px-4 py-2 rounded-md
          
        "
      >
        {/* LEFT */}
        <div className="flex flex-col gap-1 text-[12px] lg:text-[14px]">
          <span className="font-semibold text-white">
            {section.chapter_title}
          </span>

          <div className="flex items-center gap-3 text-white text-[12px] opacity-90">
            <span>{section.lectures?.length || 0} bài giảng</span>
            <span>{section.duration}</span>
          </div>
        </div>

        {/* RIGHT */}
        <Space size="small" style={{paddingRight:"15px"}}>
            
            < BoxEditCourseSection

            />
            <Popconfirm
                title="Bạn chắc chắn muốn xóa khóa học?"
                // onConfirm={}
            >
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
            </Popconfirm>
        </Space>
      </div>
    ),

    children: (
      <div
        className="
          flex flex-col gap-2
          px-5 py-3
        "
      >
        {/* LIST LECTURES */}
          {section.lectures && section.lectures.length > 0 ? (
            section.lectures.map((lecture) => (
              <BoxLesson
                key={lecture._id}
                title={lecture.title}
                time={lecture.duration}
                preview={lecture.preview}
                onEdit={() => onEditLecture?.(lecture, section)}
                onDelete={() => onDeleteLecture?.(lecture._id, section)}
              />
            ))
          ) : (
            <div className="text-sm text-gray-400 italic py-2">
              Chưa có bài giảng! 
            </div>
          )}

        {/* ADD LECTURE BUTTON */}
          <BoxAddCourseLecture />
      </div>
    ),
  }));

  return (
    <div>
      <div
        className="flex justify-between items-center py-2 "
      >
        <div></div>
        <BoxAddCourseSection />
      </div>
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
    </div>
  );
};

export default BoxShowCourseSection;
