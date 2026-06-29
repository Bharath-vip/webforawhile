export const metadata = {
  title: "About Us | AI Directory",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl prose prose-invert">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Welcome to AI Directory. Our mission is to help professionals discover the best AI tools, automation workflows, and productivity systems used by top Silicon Valley startups.
      </p>
      <p className="text-lg text-muted-foreground mb-6">
        With the rapid advancement of Artificial Intelligence, it can be overwhelming to know which tools are actually worth your time. We cut through the noise, manually reviewing and organizing the best platforms so you can focus on building and creating.
      </p>
      <h2 className="text-2xl font-bold mt-12 mb-4">Our Methodology</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Every tool in our directory is vetted for quality, usability, and value. We categorize them logically and provide unbiased information on pricing and capabilities so you can make informed decisions.
      </p>
    </div>
  );
}
