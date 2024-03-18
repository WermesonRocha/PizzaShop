import { api } from '@/lib/axios'

interface DeliverOrderProps {
  orderId: string
}

export async function deliverOrder({ orderId }: DeliverOrderProps) {
  return await api.patch(`/orders/${orderId}/deliver`)
}
