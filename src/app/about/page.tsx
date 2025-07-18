import PageContainer from "@/components/core/PageContainer";

export default async function Home() {
  await new Promise((res) => setTimeout(res, 5000));
  return <PageContainer>Home</PageContainer>;
}
