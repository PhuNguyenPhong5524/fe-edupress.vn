

import BoxEditInfoCourse from "./BoxEditInfoCourse/BoxEditInfoCourse";

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


const BoxShowCourseInfo = ({ showCourse }) => {
    return(
        <div>
            <div className="flex justify-between items-center mb-3">
                <div className="border-l-[3px] border-l-[#FF7D35] pl-2">
                    <h2 className="font-semibold text-[#989898] text-[18px]">Yêu cầu</h2>
                </div>
                <BoxEditInfoCourse />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Video */}
                <div 
                    className="
                        border border-gray-200 rounded-[5px] p-4 h-auto bg-[#ffffff] overflow-hidden
                    "
                    >
                    <div className="aspect-video w-full">
                    <iframe
                        src={showCourse.video_url}
                        title="video"
                        className="w-full h-full rounded"
                        allowFullScreen
                    />
                    </div>
                </div>

            {/* Info */}
            <div 
            className="
                border border-gray-200 rounded-tl-[5px] rounded-tr-[5px] 
                rounded-b-[5px] h-auto bg-[#ffffff] overflow-hidden 
            "
            >
                <p className="bg-[#efefef] text-[#000000] px-2 py-3 text-[16px] font-bold rounded-[5px]">
                    <sup className="text-red-500 font-semibold">*</sup>Thông tin khóa học
                </p>
                <div className="px-4 py-3 space-y-3">
                <p 
                    className=" 
                    border-b border-b-[#d4d4d4]  text-[#000000] text-[14px] pb-3
                    "
                >
                    <strong className="pr-2">
                    #Mã khóa học:
                    </strong> 
                    {showCourse._id}
                </p>
                <div 
                    className="
                    flex justify-between flex-col md:flex-row border-b 
                    border-b-[#d4d4d4] pb-3
                    "
                >
                    <p className="text-[#000000] text-[14px]">
                    <strong className="pr-2">Ngày tạo:</strong> 
                        {new Date(showCourse.createdAt).toLocaleDateString("vi-VN")}
                    </p>
                    <p className="text-[#a7a7a7] text-[14px]">—</p>
                    <p className="text-[#000000] text-[14px]">
                    <strong className="pr-2">Ngày cập nhật:</strong> 
                        {new Date(showCourse.updatedAt).toLocaleDateString("vi-VN")}
                    </p>
                </div>
                <p className="text-[#000000] text-[14px]">
                    <strong className="pr-2">Danh mục:</strong> 
                    {showCourse.category}
                </p>
                <p className="text-[#000000] text-[14px] ">
                    <strong className="pr-2">Giảng viên:</strong> 
                    {showCourse.provider}
                </p>
                <p className="text-[#000000] text-[14px]">
                    <strong className="pr-2">Số học viên:</strong> 
                    {showCourse.students}
                </p>
                <p className="text-[#000000] text-[14px]">
                    <strong className="pr-2">Thời lượng:</strong> 
                    {showCourse.duration}
                </p>
                </div>
                <div className="flex items-center justify-between px-4 pt-2 border-t border-t-[#d4d4d4] ">
                <div className="flex items-center">
                    <p className="pr-2 text-[14px] font-bold text-[#000000] ">Giá khóa học:</p> 
                    <span className="text-[#e70000] text-[18px] font-bold">
                        { showCourse.price === 0 
                            ? <span className="text-green-400 font-semibold">Free</span>
                            : `${Number(showCourse.price).toLocaleString('vi-VN')} VND`
                        }
                    </span>
                </div>
                <div className="flex items-center">
                    <p className="pr-2 text-[14px] font-bold text-[#000000] ">Giá giảm:</p> 
                    <span className="text-[#e70000] text-[18px] font-bold">
                        { showCourse.price_promotion === null || showCourse.price_promotion === 0 
                            ? <span className="text-[#d8d8d8] font-semibold">—</span>
                            : `${Number(showCourse.price_promotion).toLocaleString('vi-VN')} VND`
                        }
                    </span>
                </div>
                </div>
                
            </div>

            {/* Description */}
                <div 
                    className="
                        col-span-2 border border-gray-200 rounded-tl-[5px] rounded-tr-[5px] rounded-b-[5px] bg-[#ffffff] overflow-hidden
                        mb-4 
                    "
                >
                    <p className="bg-[#efefef] text-[#000000] px-2 py-3 text-[16px] font-bold">
                        <sup className="text-red-500 font-semibold">*</sup>Mô tả khóa học
                    </p>
                    <div className="space-y-2 text-sm md:text-base px-4 pt-3 pb-[5px]" >
                        <textarea
                            disabled
                            rows="6"
                            defaultValue={showCourse.description}
                            className="w-full border p-2 border-gray-200 rounded bg-[#F5F5F5]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoxShowCourseInfo;