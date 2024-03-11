import { api } from '@/lib/axios'

interface CancelOrderProps {
  orderId: string
}

export async function cancelOrder({ orderId }: CancelOrderProps) {
  return await api.patch(`/orders/${orderId}/cancel`)
}
