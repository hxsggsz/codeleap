import { useQueryClient, useMutation, useQuery, useInfiniteQuery } from "react-query";
import { api } from "./api/api";

type NewPostTypes = {
  username: string
  title: string
  content: string
}
type ChangePostTypes = {
  title: string
  content: string
}

export const useGetAllPosts = () => {
  const posts = useInfiniteQuery<IPosts>({
    queryFn: async ({ pageParam = 0 }) => {
      const response = await api.get<IPosts>(`/careers/?limit=10&offset=${pageParam}0`)
      return response.data
    },
    queryKey: ["getAllposts"],
    refetchOnWindowFocus: false,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1
      return nextPage 
    }
  })

  return posts
}

export const useGetUniquePosts = (username: string) => {
  const posts = useQuery<IPosts>({
    queryFn: async () => {
      const response = await api.get<IPosts>(`/careers/?username=${username}`)
      return response.data
    },
    queryKey: ["getUniqueposts", username],
    refetchOnWindowFocus: false,
  })

  return posts
}

export const useNewPost = () => {
  const query = useQueryClient()
  const mutate = useMutation({
    mutationFn: async (data: NewPostTypes) => {
      return await api.post(`/careers/`, data);
    },
    onSuccess: () => {
      //refetch with the new query
      query.invalidateQueries(["getAllposts"])
    },
  })

  return mutate
}

export const useDeletePost = () => {
  const query = useQueryClient()
  const mutate = useMutation({
    mutationFn: (id: string) => {
      return api.delete(`/careers/${id}/`)
    },
    onSuccess: () => {
      query.invalidateQueries(["getAllposts"])
    },
  })

  return mutate
}

export const useChangePost = (id: string) => {
  const query = useQueryClient()
  const mutate = useMutation({
    mutationFn: (changePost: ChangePostTypes) => {
      return api.patch(`/careers/${id}/`, changePost)
    },
    mutationKey: "changeOption",
    onSuccess: () => {
      query.invalidateQueries(["getAllposts"])
    },
  })

  return mutate
}
