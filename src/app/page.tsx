import PageContainer from "@/components/core/PageContainer";
import SlideUpText from "@/components/ui/SlideUpText";

export default function Home() {
    return (
        <PageContainer>
            <div className="hero text-4xl md:text-6xl lg:text-8xl h-[60dvh] w-full flex items-center justify-center relative">
                <div>
                    <SlideUpText>Samiul Basir Fahim</SlideUpText>
                    <p className="font-semibold text-xl text-center mt-4 uppercase">
                        Svelte | NextJS | React | Tailwind | Rust | Tauri
                    </p>
                </div>

            </div>
        </PageContainer>
    );
}
