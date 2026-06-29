import { AdSpace } from "@/components/ads/AdSpace";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Advertising | AI Directory",
};

export default function AdvertisingPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Advertise with AI Directory</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Reach thousands of founders, developers, and early adopters actively looking for AI solutions to improve their workflows.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="bg-card/30 border border-white/10 rounded-2xl p-8 glass">
          <h2 className="text-2xl font-bold mb-4">Display Banners</h2>
          <p className="text-muted-foreground mb-6">
            Get premium placement on our homepage, category pages, and individual tool listings. We offer standard display formats including 728x90 and 300x250.
          </p>
          <Button variant="outline" className="w-full">Contact Sales</Button>
        </div>

        <div className="bg-card/30 border border-white/10 rounded-2xl p-8 glass">
          <h2 className="text-2xl font-bold mb-4">Sponsored Listings</h2>
          <p className="text-muted-foreground mb-6">
            Pin your AI tool to the top of our trending feed and relevant category pages to drive immediate, high-intent traffic to your product.
          </p>
          <Button variant="outline" className="w-full">Contact Sales</Button>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6">Sample Banner Placement</h2>
        <div className="flex justify-center">
          <AdSpace format="banner320x50" />
        </div>
      </div>
    </div>
  );
}
