export const metadata = {
  title: "Privacy Policy | AI Directory",
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl prose prose-invert">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-lg text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
      <p className="text-muted-foreground mb-4">
        We collect information you provide directly to us when you subscribe to our newsletter, submit a tool, or communicate with us. This may include your name, email address, and any other information you choose to provide.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
      <p className="text-muted-foreground mb-4">
        We use the information we collect to operate, maintain, and improve our services, communicate with you, and send you newsletters and promotional materials.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">3. Cookies and Tracking</h2>
      <p className="text-muted-foreground mb-4">
        We use cookies and similar tracking technologies to track activity on our service and hold certain information. We may partner with third-party ad networks (like Adsterra) to either display advertising on our Website or to manage our advertising on other sites.
      </p>
    </div>
  );
}
