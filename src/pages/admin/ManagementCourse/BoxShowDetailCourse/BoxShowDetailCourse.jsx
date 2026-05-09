
import React, { useState } from "react";
import { Tabs, Card } from "antd";
import { Link, useParams } from "react-router";
import ChevronLeftIcon from "../../../../components/icons/ChevronLeftIcon.jsx";
import EditCourseIcon from "../../../../components/icons/EditCourseIcon.jsx";
import BoxShowCourseInfo from "./BoxShowCourseInfo/BoxShowCourseInfo.jsx";
import BoxShowCourseRequest from "./BoxShowCourseRequest/BoxShowCourseRequest.jsx";
import BoxShowCourseOverview from "./BoxShowCourseOverview/BoxShowCourseOverview.jsx";
import useFetchCourseDetail from "../../../../hooks/useFetchCourseDetail.js";


export default function BoxShowDetailCourse() {
    const [activeTab, setActiveTab] = useState("1");
    const { _id: courseId } = useParams();
    const { data: showCourse, isLoading, error } = useFetchCourseDetail(courseId);

    if (isLoading) return <>Loading...</>;
    if (error) return <>Error: {error.message}</>;
    if (!showCourse) return null;

    const items = [
        {
        key: "1",
        label: "Thông Tin Khóa Học",
        children: (
            <BoxShowCourseInfo 
                showCourse={showCourse?.course}
            />
        ),
        },
        {
            key: "2",
            label: "Yêu cầu",
            children: 
                <BoxShowCourseRequest 
                    showCourse={showCourse?.requests}
                /> 
            ,
        },
        {
            key: "3",
            label: "Tổng Quan",
            children: 
                <BoxShowCourseOverview 
                    showCourse={showCourse?.overviews}
                />
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
                        {showCourse?.course?.course_title}
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