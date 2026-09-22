export const metadata = {
  title: "Business | DineX Ecopack",
  description:
    "Official business profile of DineX Ecopack. Connect with founder Mr. Deep R Gediya.",
  alternates: {
    canonical: "https://dinexecopack.com/business",
  },
  openGraph: {
    title: "Business | DineX Ecopack",
    description:
      "Official business profile of DineX Ecopack. Connect with founder Mr. Deep R Gediya.",
    url: "https://dinexecopack.com/business",
    siteName: "DineX Ecopack",
  },
};

export default function BusinessPage() {
  return (
    <div className="w-full bg-[#050505] pt-16 flex flex-col items-center min-h-[calc(100vh-64px)]">
      <iframe
        src="https://tapmo.io/dinexecopack"
        title="DineX Ecopack Business"
        className="w-full h-[1650px] sm:h-[1550px] border-0 block"
        allow="clipboard-write; web-share; accelerometer; autoplay; encrypted-media"
      />
    </div>
  );
}
