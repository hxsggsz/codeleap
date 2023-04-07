import { useQuery } from "react-query"
import { api } from "./api/api"

export const useGetAllPosts = () => {
  const posts = useQuery<IPosts>({
    queryFn: async () => {
      const response = await api.get<IPosts>(`/careers/?limit=10&offset=10&username=`)
      
      return response.data
    },
    queryKey: ["getAllposts"],
    refetchOnWindowFocus: false,
    keepPreviousData: true
  })

  return posts
}