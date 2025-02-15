import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="flex flex-col-reverse md:flex-row items-center gap-8 py-8">
        <div className="flex-1 space-y-4 text-center md:text-left">
          <h1 className="text-4xl font-bold">
            Hi, I'm Jordan!
          </h1>
          <p className="text-lg text-black/70 dark:text-white/70">
            A full-stack developer passionate about building web applications
            that make a difference.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="/contact"
              className="rounded-full bg-blue-500 text-white px-6 py-2 hover:bg-blue-600 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="/projects"
              className="rounded-full border border-black/[.08] dark:border-white/[.145] px-6 py-2 hover:bg-black/[.05] dark:hover:bg-white/[.06] transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
        <div className="w-48 h-48 md:w-64 md:h-64 relative">
          <Image
            src="/placeholder-profile.jpg"
            alt="Profile picture"
            fill
            className="rounded-full object-cover"
            priority
          />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-center md:text-left">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Node.js",
            "Python",
            "SQL",
          ].map((skill) => (
            <div
              key={skill}
              className="p-4 border border-black/[.08] dark:border-white/[.145] rounded-lg text-center hover:bg-black/[.05] dark:hover:bg-white/[.06] transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
