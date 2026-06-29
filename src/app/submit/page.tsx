import { AdSpace } from "@/components/ads/AdSpace";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const metadata = {
  title: "Submit a Tool | AI Directory",
  description: "Submit your AI tool to our directory.",
};

export default function SubmitPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Submit Your AI Tool</h1>
        <p className="text-xl text-muted-foreground">
          Get your tool in front of thousands of early adopters and founders.
        </p>
      </div>

      <div className="bg-card/30 border border-white/10 rounded-2xl p-8 glass mb-12">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Tool Name</label>
              <Input placeholder="e.g. Acme AI" className="bg-background/50 border-white/10" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Website URL</label>
              <Input placeholder="https://..." className="bg-background/50 border-white/10" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Category</label>
            <select className="w-full h-10 px-3 rounded-md bg-background/50 border border-white/10 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50">
              <option value="">Select a category...</option>
              <option value="Coding">Coding</option>
              <option value="Marketing">Marketing</option>
              <option value="Design">Design</option>
              <option value="Video">Video Editing</option>
              <option value="Productivity">Productivity</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Description</label>
            <textarea 
              rows={4}
              className="w-full p-3 rounded-md bg-background/50 border border-white/10 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              placeholder="What does your tool do?"
            ></textarea>
          </div>

          <Button type="button" className="w-full" size="lg">Submit for Review</Button>
        </form>
      </div>

      <AdSpace format="banner320x50" className="mx-auto" />
    </div>
  );
}
