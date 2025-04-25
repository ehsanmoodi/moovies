import { createFileRoute } from '@tanstack/react-router'
import { Layout } from '../components/layout'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return <Layout>Home Page</Layout>
}
