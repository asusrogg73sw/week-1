import AddToCartButton from "./AddToCartButton";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 150000,
    icon: "💻",
    description: "Powerful performance for work, creativity and productivity.",
  },
  {
    id: 2,
    name: "Mobile",
    price: 80000,
    icon: "📱",
    description: "Stay connected with modern technology and smart features.",
  },
  {
    id: 3,
    name: "Headphones",
    price: 5000,
    icon: "🎧",
    description: "Experience crystal clear sound and premium comfort.",
  },
];

export default function ProductList() {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-24 text-foreground">
      {/* Background Glow Effects */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading with ScrollReveal */}
        <ScrollReveal>
          <div className="mb-16 text-center">
            <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-medium text-primary">
              Our Products
            </span>

            <h2 className="mt-7 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
              Explore Our{" "}
              <span className="bg-linear-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                Collection.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
              Discover our premium collection of products. Quality, innovation and
              performance all in one place.
            </p>

            <div className="mx-auto mt-7 h-1 w-24 rounded-full bg-linear-to-r from-primary to-blue-500" />
          </div>
        </ScrollReveal>

        {/* Products Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 0.15}>
              <Card
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:border-primary/50 hover:shadow-[0_20px_60px_rgba(var(--primary),0.12)] text-card-foreground flex flex-col justify-between h-full"
              >
                {/* Card Glow */}
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-primary/20" />

                <CardHeader className="p-0">
                  <div className="relative flex items-center justify-between">
                    <span className="text-sm font-semibold tracking-widest text-muted-foreground">
                      PRODUCT 0{product.id}
                    </span>
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      Premium
                    </span>
                  </div>

                  <div className="relative mt-8 flex h-32 items-center justify-center rounded-2xl border border-border bg-linear-to-br from-primary/10 to-blue-500/10 transition-all duration-500 group-hover:border-primary/30 group-hover:from-primary/20 group-hover:to-blue-500/20">
                    <span className="text-6xl transition-transform duration-500 group-hover:scale-125">
                      {product.icon}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="p-0 mt-8 flex-1">
                  <CardTitle className="text-2xl font-bold transition-colors group-hover:text-primary">
                    {product.name}
                  </CardTitle>

                  <p className="mt-3 min-h-14 text-sm leading-7 text-muted-foreground">
                    {product.description}
                  </p>

                  <div className="mt-7 border-t border-border pt-6">
                    <p className="text-sm font-medium text-muted-foreground">
                      Starting Price
                    </p>
                    <p className="mt-2 text-3xl font-extrabold text-primary">
                      Rs. {product.price.toLocaleString("en-PK")}
                    </p>
                  </div>
                </CardContent>

                <CardFooter className="p-0 mt-7">
                  <div className="w-full rounded-2xl border border-border bg-muted/50 p-5">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Interactive Counter
                    </p>
                    <AddToCartButton />
                  </div>
                </CardFooter>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Text */}
        <ScrollReveal delay={0.4}>
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground">
              Quality Products. Modern Experience. Better Future.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}