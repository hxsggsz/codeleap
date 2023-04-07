interface IPosts {
  count: number
  results: IResults[]
}

interface IResults {
  id: number
  username: string
  created_datetime: datetime
  title: string
  content: string
}