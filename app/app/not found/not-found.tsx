import { notFound } from 'next/navigation'

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
 
 
 
  return <div> This Is 404 Error Back To Login Home </div>
}