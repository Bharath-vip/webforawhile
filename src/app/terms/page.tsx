export const metadata = {
  title: "Terms of Service | AI Directory",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl prose prose-invert">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <p className="text-lg text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
      <p className="text-muted-foreground mb-4">
        By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">2. Use License</h2>
      <p className="text-muted-foreground mb-4">
        Permission is granted to temporarily download one copy of the materials (information or software) on AI Directory for personal, non-commercial transitory viewing only.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">3. Disclaimer</h2>
      <p className="text-muted-foreground mb-4">
        The materials on AI Directory&apos;s website are provided on an &apos;as is&apos; basis. AI Directory makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
      </p>
    </div>
  );
}
