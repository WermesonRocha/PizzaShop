import { api } from '@/lib/axios'

import { Order } from './get-orders'

interface GetOrderDetailsProps {
  orderId: string
}

interface GetOrderDetailsResponse {
  id: string
  createdAt: string
  status: Order['status']
  totalInCents: number
  customer: {
    name: string
    email: string
    phone: string | null
  }
  orderItems: {
    id: string
    priceInCents: number
    quantity: number
    product: { name: string }
  }[]
}

export async function getOrderDetails({ orderId }: GetOrderDetailsProps) {
  const { data } = await api.get<GetOrderDetailsResponse>(`/orders/${orderId}`)
  return data
}
