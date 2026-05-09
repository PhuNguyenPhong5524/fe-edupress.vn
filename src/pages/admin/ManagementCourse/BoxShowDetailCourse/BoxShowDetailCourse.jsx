
import React, { useState } from "react";
import { Tabs, Card } from "antd";
import { Link } from "react-router";
import ChevronLeftIcon from "../../../../components/icons/ChevronLeftIcon.jsx";
import EditCourseIcon from "../../../../components/icons/EditCourseIcon.jsx";
import CloseIcon from "../../../../components/icons/CloseIcon.jsx";
import BoxShowCourseInfo from "./BoxShowCourseInfo/BoxShowCourseInfo.jsx";

const course = {
  _id: "69e1a960c87dee8a44fd30d7",
  course_title: "Phân tích Dữ Liệu Bằng SQL Trong 8 Giờ",
  category_name: "Lập trình",
  provider_name: "Nguyễn Văn A",
  price: 2209000,
  price_promotion: 0,
  students: 700,
  duration: "8h35'",
  image_url: "https://img-c.udemycdn.com/course/240x135/5534420_9a20_5.jpg",
  video_url: "https://www.youtube.com/embed/CkreAh5KOx0",
  description: "Khoá học này cung cấp một phương pháp thực hành cho những người muốn trở thành nhà phát triển frontend. Qua các dự án thực hành, người tham gia sẽ đối mặt với các tình huống thực tế, học các kỹ thuật giải quyết vấn đề từ cơ bản đến nâng cao. Cụ thể, khóa học tập trung vào phát triển web sử dụng các công nghệ frontend tiên tiến như: TypeScript, ReactJS 18, Next.js 14, Material UI, Redux Toolkit, Next Auth, Yup, CI-CD, tối ưu SEO, Redux thunks, SocketIo, React Query, Firebase, Storybook, Jest ... Đặc biệt sau khi kết thúc khóa học , mấy bạn sẽ biết được cách tìm ra nguyên nhân của lỗi và biết cách research để giải quyết vấn đề",
  create_At: "2024-06-15",
  update_At: "2024-06-15",
};

const requestList = [
    {
        _id: "1",
        request_name: "Yêu cầu 1: Hiểu biết cơ bản về lập trình web",
    },
    {
        _id: "2",
        request_name: "Yêu cầu 2: Hiểu biết cơ bản về lập trình web",
    },
    {
        _id: "3",
        request_name: "Yêu cầu 3: Hiểu biết cơ bản về lập trình web",   
    },
    {
        _id: "4",
        request_name: "Yêu cầu 4: Hiểu biết cơ bản về lập trình web",
    },
];

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


export default function BoxShowDetailCourse() {
    const [activeTab, setActiveTab] = useState("1");

    const items = [
        {
        key: "1",
        label: "Thông Tin Khóa Học",
        children: (
            <BoxShowCourseInfo />
        ),
        },
        {
            key: "2",
            label: "Yêu cầu",
            children: 
                <div className="tab-content bg-[#F5F5F5] rounded-b-[15px] px-4 mb-4">
                    <div className="flex justify-between items-center mb-3">
                        <div className="border-l-[3px] border-l-[#FF7D35] pl-2">
                            <h2 className="font-semibold text-[#989898] text-[18px]">Yêu cầu về khóa học</h2>
                        </div>
                        <button 
                            className="
                                bg-[#FF7D35] text-white rounded text-sm flex items-center
                                hover:bg-[#d44700] hover:shadow-lg transition px-4 py-[8px]
                                duration-300 ease-in-out cursor-pointer hover:scale-105
                            "
                        >   
                            
                            <p className="inline-block">Thêm yêu cầu khóa học</p>
                        </button>
                    </div>
                    <div
                        className="
                            text-[#000000] text-[12px] 
                            md:text-[14px] lg:text-[16px] font-sans text-justify leading-[40px]
                        "
                    >
                        {
                            requestList && (
                                requestList?.map((item) => (
                                    <div 
                                        key={item._id}
                                        className="
                                            border-b border-b-[#d4d4d4] py-2 
                                        "
                                    >
                                        <div
                                            className="flex justify-between items-center"
                                        >
                                            {item.request_name}
                                            <div
                                                className="flex items-center "
                                            >
                                                <button
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
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )
                        }
                    </div>
                </div>
            ,
        },
        {
            key: "3",
            label: "Tổng Quan",
            children: 
                <div className="tab-content bg-[#F5F5F5] rounded-b-[15px] px-4 mb-4">
                    <div className="flex justify-between items-center mb-3">
                        <div className="border-l-[3px] border-l-[#FF7D35] pl-2">
                            <h2 className="font-semibold text-[#989898] text-[18px]">Tổng quan về khóa học</h2>
                        </div>
                        <button 
                            className="
                                bg-[#FF7D35] text-white rounded text-sm flex items-center
                                hover:bg-[#d44700] hover:shadow-lg transition px-4 py-[8px]
                                duration-300 ease-in-out cursor-pointer hover:scale-105
                            "
                        >   
                            
                            <p className="inline-block">Thêm tổng quan khóa học</p>
                        </button>
                    </div>
                    <div
                        className="
                            text-[#000000] text-[12px] 
                            md:text-[14px] lg:text-[16px] font-sans text-justify leading-[40px]
                        "
                    >
                        {
                                overviewList && (
                                overviewList?.map((item) => (
                                    <div 
                                        key={item._id}
                                        className="
                                            border-b border-b-[#d4d4d4] py-2 
                                        "
                                    >
                                        <div
                                            className="flex justify-between items-center"
                                        >
                                            {item.overview_name}
                                            <div
                                                className="flex items-center "
                                            >
                                                <button
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
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )
                        }
                    </div>
                </div>
            ,
        },
        {
            key: "4",
            label: "Bài học",
            children: <div className="p-4">Nội dung Sections...</div>,
        },
    ];
    return (
        <div className="h-auto bg-gray-100 py-4 px-4 rounded-[5px]">
            <div className=" mx-auto">
                <div className="flex items-center gap-3 mb-2">
                    <Link to="/admin/course" className="text-blue-500 hover:underline text-sm mb-2 inline-block">
                        <button 
                            type="button" 
                            className="
                                flex items-center gap-1
                                bg-gray-200 text-gray-700 p-1 rounded-full transition duration-300 ease-in-out
                                hover:scale-95 hover:opacity-65 cursor-pointer
                            "
                        >
                            <ChevronLeftIcon size={30} />
                        </button>
                    </Link>
                    <h1 className="text-xl md:text-2xl font-semibold mb-4">
                        {course.course_title}
                    </h1>
                </div>
                <Tabs
                    activeKey={activeTab}
                    onChange={setActiveTab}
                    items={items}
                    style={{paddingLeft:"20px", paddingRight:"20px"}}
                    className=" custom-tabs bg-white p-4 rounded-lg shadow"
                />
            </div>
        </div>
    );
}