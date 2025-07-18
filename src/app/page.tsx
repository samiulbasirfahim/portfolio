import FIrstLoading from "@/components/core/FirstLoading";
import PageContainer from "@/components/core/PageContainer";

export default async function Home() {
  await new Promise((res) => setTimeout(res, 3000));
  return (
    <PageContainer>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
      praesentium quibusdam? Quas ad dicta voluptates perspiciatis consectetur,
      ducimus placeat suscipit similique, officia adipisci accusantium deserunt
      modi vitae dolor magnam. Doloribus.
    </PageContainer>
  );
}
