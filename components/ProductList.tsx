// import Counter from "./Counter";

import AddToCartButton from "./AddToCartButton";

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
  // console.log("ProductList chala");

  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white">
      {/* Background Effects */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300">
            Our Products
          </span>

          <h2 className="mt-7 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Collection.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
            Discover our premium collection of products. Quality, innovation and
            performance all in one place.
          </p>

          <div className="mx-auto mt-7 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
        </div>

        {/* Products Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-8 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/50 hover:shadow-[0_20px_60px_rgba(34,211,238,0.12)]"
            >
              {/* Card Glow */}
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/20" />

              {/* Product Number */}
              <div className="relative flex items-center justify-between">
                <span className="text-sm font-semibold tracking-widest text-slate-500">
                  PRODUCT 0{product.id}
                </span>

                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                  Premium
                </span>
              </div>

              {/* Product Icon */}
              <div className="relative mt-8 flex h-32 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 transition-all duration-500 group-hover:border-cyan-400/30 group-hover:from-cyan-400/20 group-hover:to-blue-500/20">
                <span className="text-6xl transition-transform duration-500 group-hover:scale-125">
                  {product.icon}
                </span>
              </div>

              {/* Product Details */}
              <div className="relative mt-8">
                <h3 className="text-2xl font-bold transition-colors group-hover:text-cyan-400">
                  {product.name}
                </h3>

                <p className="mt-3 min-h-14 text-sm leading-7 text-slate-400">
                  {product.description}
                </p>

                {/* Price */}
                <div className="mt-7 border-t border-white/10 pt-6">
                  <p className="text-sm font-medium text-slate-400">
                    Starting Price
                  </p>

                  <p className="mt-2 text-3xl font-extrabold text-cyan-400">
                    Rs. {product.price.toLocaleString("en-PK")}
                  </p>
                </div>

                {/* Counter */}
                <div className="mt-7 rounded-2xl border border-white/10 bg-slate-950/50 p-5">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
                    Interactive Counter
                  </p>

                  <AddToCartButton />

                  {/* <Counter label={product.name}/> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-500">
            Quality Products. Modern Experience. Better Future.
          </p>
        </div>
      </div>
    </section>
  );
}
