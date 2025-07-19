import PageContainer from "@/components/core/PageContainer";
import SlideUpText from "@/components/ui/SlideUpText";

export default function Home() {
  return (
    <PageContainer>
      <div className="flex items-end gap-8">
        <span className="text-xl">Hello, I&apos;m</span>
        <div className="text-6xl md:text-8xl lg:text-9xl space-y-4">
          <SlideUpText>Samiul</SlideUpText>
          <SlideUpText>Basir</SlideUpText>
          <SlideUpText>Fahim</SlideUpText>
        </div>
      </div>
    </PageContainer>
  );
}
