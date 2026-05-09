    import { useQuery } from "@tanstack/react-query";
    import axios from "axios";

    const useFetchCourse = (page, limit, search) => {
    return useQuery({
        queryKey: ["courses", page, limit, search],
        queryFn: async () => {
        const res = await axios.get("http://localhost:8080/courses", {
            params: {
            page,
            limit,
            search
            }
        });
        return res.data;
        },
       keepPreviousData: true
    });
    };

    export default useFetchCourse;