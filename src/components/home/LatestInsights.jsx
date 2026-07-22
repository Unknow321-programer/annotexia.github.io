import Image from "next/image";
import Link from "next/link";
import {blogs} from "@/data/blogs";

const articles = [
    blogs[blogs.length -1],
    blogs[blogs.length -2],
    blogs[blogs.length -3],
];

export default function LatestInsights() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="scroll-reveal text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-[3px] text-blue-600 font-semibold">

            Latest Insights

          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-black text-slate-900">

            AI Annotation
            <br />

            Resources & Guides

          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">

            Explore practical guides, industry insights,
            and expert knowledge about AI data annotation,
            computer vision, machine learning,
            and data labeling.

          </p>

        </div>

        <div className="scroll-reveal grid lg:grid-cols-3 gap-8 mt-20">
                    {articles.map((article) => (

          <article
            key={article.slug}
            className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >

            {/* Image */}

            <Link href={"/blog/"+article.slug}>

              <div className="relative h-64 overflow-hidden">

                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

              </div>

            </Link>

            {/* Content */}

            <div className="p-8">

              <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">

                {article.category}

              </span>

              <Link href={"/blog/"+article.slug}>

                <h3 className="mt-6 text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">

                  {article.title}

                </h3>

              </Link>

              <p className="mt-5 text-slate-600 leading-8">

                {article.description}

              </p>

              <Link
                href={"/blog/"+article.slug}
                className="inline-flex items-center mt-8 font-semibold text-blue-600 hover:text-blue-700"
              >

                Read Article

                <span className="ml-2 transition-transform group-hover:translate-x-1">

                  →

                </span>

              </Link>

            </div>

          </article>

        ))}

      </div>

      {/* Bottom CTA */}

      <div className="scroll-reveal text-center mt-20">

        <Link
          href="/blog"
          className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700 transition"
        >

          View All Articles

        </Link>

      </div>

    </div>

  </section>

);
}