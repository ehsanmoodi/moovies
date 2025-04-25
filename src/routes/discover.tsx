import { createFileRoute } from '@tanstack/react-router'
import { Layout } from '../components/layout'

export const Route = createFileRoute('/discover')({
  component: Discover,
})

function Discover() {
  return <Layout>Discover Page</Layout>
}
