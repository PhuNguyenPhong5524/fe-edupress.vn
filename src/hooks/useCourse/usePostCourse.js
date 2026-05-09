import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const usePostCourse = () => {
  return useMutation({
    mutationKey: ["Course"],
    mutationFn: async (data) => {
      const res = await axios.post(
        "http://localhost:8080/courses",
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      return res.data;
    },
  });
};
  
export default usePostCourse;
