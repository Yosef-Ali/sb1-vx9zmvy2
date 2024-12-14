import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container py-12">
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Modern Next.js Application
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            A production-ready template with the latest features and best practices
          </p>
          <div className="space-x-4">
            <Button asChild size="lg">
              <Link href="/dashboard">
                Get Started <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <feature.icon className="h-8 w-8 text-primary" />
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}

const features = [
  {
    title: "TypeScript",
    description: "Built with full TypeScript support for better development experience",
    icon: ArrowRightIcon,
  },
  {
    title: "Tailwind CSS",
    description: "Beautiful and responsive designs with utility-first CSS framework",
    icon: ArrowRightIcon,
  },
  {
    title: "Components",
    description: "Pre-built components using shadcn/ui for rapid development",
    icon: ArrowRightIcon,
  },
];