import PageContainer from "@/components/core/PageContainer";
import ExternalLink from "@/components/ui/ExternalLink";
import SlideUpText from "@/components/ui/SlideUpText";

export default function Home() {
  return (
    <PageContainer>
      <h1 className="text-8xl font-black">ABOUT</h1>

      <ExternalLink href="https://github.com/samiulbasirfahim">
        GITHUB
      </ExternalLink>
      <SlideUpText>SAMIUL BASIR FAHIM</SlideUpText>
    </PageContainer>
  );
}
