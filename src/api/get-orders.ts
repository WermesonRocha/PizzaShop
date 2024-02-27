import { api } from '@/lib/axios'

export type Order = {
  orderId: string
  createdAt: string
  status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
  customerName: string
  total: number
}

export interface GetOrdersQuery {
  customerName?: string | null
  orderId?: string | null
  status?: Order['status'] | null
  pageIndex?: number | null
}

export interface GetOrdersResponse {
  orders: Order[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export async function getOrders({
  customerName,
  orderId,
  pageIndex,
  status,
}: GetOrdersQuery) {
  const { data } = await api.get<GetOrdersResponse>('/orders', {
    params: { customerName, orderId, pageIndex: pageIndex ?? 0, status },
  })
  return data
}
