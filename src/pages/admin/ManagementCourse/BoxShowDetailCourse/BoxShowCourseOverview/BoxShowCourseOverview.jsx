
import { Popconfirm } from "antd";
import CloseIcon from "../../../../../components/icons/CloseIcon";
import EditCourseIcon from "../../../../../components/icons/EditCourseIcon";
import BoxAddCourseOverview from "./BoxAddCourseOverview/BoxAddCourseOverview";
import BoxEditCourseOverview from "./BoxEditCourseOverview/BoxEditCourseOverview";


const overviewList = [
    {
        _id: "1",
        overview_name: "Tổng quan 1: Hiểu biết cơ bản về lập trình web",
    },
    {
        _id: "2",
        overview_name: "Tổng quan 2: Hiểu biết cơ bản về lập trình web",
    },
    {
        _id: "3",
        overview_name: "Tổng quan 3: Hiểu biết cơ bản về lập trình web",   
    },
    {
        _id: "4",
        overview_name: "Tổng quan 4: Hiểu biết cơ bản về lập trình web",
    },
];


const BoxShowCourseOverview = ({ showCourse }) => {
    return (
        <div className="tab-content rounded-b-[15px] px-4 mb-4 overflow-hidden">
            <div className="flex justify-between items-center mb-3">
                <div className="border-l-[3px] border-l-[#FF7D35] pl-2">
                    <h2 className="font-semibold text-[#989898] text-[18px]">Tổng quan về khóa học</h2>
                </div>
                <BoxAddCourseOverview   />
            </div>
            <div
                className="
                    text-[#000000] text-[12px] 
                    md:text-[14px] lg:text-[16px] font-sans text-justify 
                "
            >
                {
                    showCourse && (
                        showCourse.map((item) => (
                            <div 
                                key={item._id}
                                className="
                                  border-dashed border-[1px] border-[#d4d4d4] py-2 my-2 px-8 rounded-[10px] transform
                                  transition duration-300 ease-in-out 
                                  hover:border-[#FF7D35] hover:text-[#FF7D35]
                                "
                            >
                                <div
                                    className="
                                        flex justify-between items-center py-2 
                                    "
                                >
                                    {item.overview_name}
                                    <div
                                        className="flex items-center "
                                    >
                                        <BoxEditCourseOverview  />
                                        <Popconfirm
                                            title="Bạn chắc chắn muốn xóa khóa học?"
                                            // onConfirm={}
                                        >
                                            <button
                                                className="
                                                    text-red-500 hover:text-red-700 transition p-2 group
                                                    duration-300 ease-in-out hover:bg-[#ffd5bf] rounded-[5px]
                                                    hover:scale-95 hover:opacity-65 cursor-pointer
                                                "
                                            >
                                                <CloseIcon 
                                                    size={18} 
                                                    className="
                                                        group-hover:scale-125 group-hover:fill-red-500
                                                    "
                                                />
                                            </button>
                                        </Popconfirm>
                                    </div>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    );
}

export default BoxShowCourseOverview;