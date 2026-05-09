import {
  PlayCircleOutlined,
  LockOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import CloseIcon from "../../../../../components/icons/CloseIcon";
import EditCourseIcon from "../../../../../components/icons/EditCourseIcon";

export default function BoxLesson({
  title,
  time,
  preview,
  onEdit,
  onDelete,
}) {
  return (
    <div className="
        group flex items-center justify-between py-3 rounded px-[28px]
        transform transition duration-300 ease-in-out hover:bg-[#e0e0e0d8]">
      {/* LEFT */}
      <div className="flex items-center gap-2">
        {preview ? (
          <PlayCircleOutlined className="text-green-400" />
        ) : (
          <LockOutlined className="text-gray-400" />
        )}
        <span className="text-[#000000] text-[14px]">{title}</span>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">
        <span className="text-[#000000] text-[14px]">{time}</span>

        <button
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
      </div>
    </div>
  );
}