import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { MdCall, MdEmail, MdLocationOn } from "react-icons/md";
import { BsDot } from "react-icons/bs";

  const testimonialItems = [
    {
      title: "CEO, TechFlow Solutions",
      name: "Sarah Johnson",
      description: "At GrowthSpark Agency, I led SEO, Google Ads, and social media strategies that boosted lead generation by 60%. I managed $150K+ in ad spend with 3–5x ROAS, built high-converting landing pages, and optimized funnels and email campaigns to increase conversions by 28%.",
    },
    {
      title: "Managing Director, Burtech", 
      name: "Adam Smith",
      description: "At GrowthSpark Agency, I led SEO, Google Ads, and social media strategies that boosted lead generation by 60%. I managed $150K+ in ad spend with 3–5x ROAS, built high-converting landing pages, and optimized funnels and email campaigns to increase conversions by 28%.",
    },
    {
      title: "Marketing Director, InnovateCorp",
      name: "Michael Chen", 
      description: "At GrowthSpark Agency, I led SEO, Google Ads, and social media strategies that boosted lead generation by 60%. I managed $150K+ in ",
    },
    {
      title: "Founder, StartupHub",
      name: "Emily Rodriguez",
      description: "Miden's PPC campaigns delivered exceptional results. We saw a 250% increase in qualified leads while reducing our cost per acquisition by 40%. His strategic insights were invaluable.",
    },
    {
      title: "VP Marketing, GlobalTech",
      name: "David Thompson",
      description: "At GrowthSpark Agency, I led SEO, Google Ads, and social media strategies that boosted lead generation by 60%. I managed $150K+ in ",
    },
    {
      title: "CMO, RetailMax",
      name: "Lisa Wang",
      description: "At GrowthSpark Agency, I led SEO, Google Ads, and social media strategies that boosted lead generation by 60%. I managed $150K+ in ad spend with 3–5x ROAS, built high-converting landing pages, and optimized funnels and email campaigns to increase conversions by 28%.",
    },
    {
      title: "Head of Growth, FinTech Pro",
      name: "James Wilson",
      description: "At GrowthSpark Agency, I led SEO, Google Ads, and social media strategies that boosted lead generation by 60%. I managed $150K+ in ad spend with 3–5x ROAS, built high-converting landing pages, and optimized funnels and email campaigns to increase conversions by 28%.",
    },
    {
      title: "Brand Manager, CreativeCo",
      name: "Anna Martinez",
      description: "Miden's influencer marketing campaigns reached 5M+ people and generated $800K in sales. His network and negotiation skills are exceptional.",
    },
  ];

const avatar = [
  {
    src: "/test-1.png",
    alt: "Portrait of digital marketer",
  },
  {
    src: "/test-2.png",
    alt: "Portrait of digital marketer",
  },
  {
    src: "/test-3.png",
    alt: "Portrait of digital marketer",
  },
  {
    src: "/test-4.png",
    alt: "Portrait of digital marketer",
  },
  {
    src: "/test-5.png",
    alt: "Portrait of digital marketer",
  },
 
];
export default function Page() {
  return (
    <main className=" bg-background text-foreground">
      <section className="relative mx-auto w-full max-w-7xl px-4  md:py-36 py-16 ">
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-between md:items-start space-y-8 md:space-y-0 md:gap-8 ">
          {/* Stat (left gutter) */}
          <div className=" md:col-span-2 md:block ">
            <div className="text-4xl md:text-[64px] font-semibold leading-none">
              170+
            </div>
            <div className="mt-2 text-sm md:text-[16px] text-muted-foreground">
              Project complete
            </div>
          </div>

          {/* Portrait */}
          <div className="md:col-span-5 relative md:absolute md:bottom-0 md:left-26">
            <div className="mx-auto overflow-hidden mb-0 w-[280px] sm:w-[340px] md:w-[520px]">
              <div className="">
                <Image
                  src="/hero-image.png"
                  alt="Portrait of digital marketer"
                  width={1100}
                  height={1200}
                  className="object-cover block"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start">
            <h1
              className="text-5xl max-w-[500px] font-semibold leading-tight tracking-tight sm:text-6xl md:text-[105px] text-center md:text-left mx-auto md:mx-0"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Miden Rade
            </h1>
            <p className="mt-3 text-sm md:text-[24px] text-muted-foreground text-center md:text-left">
              Digital Marketer
            </p>
            <p className="mt-6 max-w-xl text-[18px] text-foreground/80 text-center md:text-left mx-auto md:mx-0">
              I&apos;m a results-driven digital marketer helping brands increase
              visibility, leads, and sales through SEO, social media, and
              data-backed campaigns.
            </p>
            <a
              href="#contact"
              className="mt-4 inline-block text-sm md:text-[16px] text-brand-red underline underline-offset-4 mx-auto md:mx-0"
            >
              Let&apos;s work together
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-secondary/50 py-12 sm:py-16 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-4">
          <div className="grid gap-10 md:grid-cols-12">
            {/* Copy */}
            <div className="md:col-span-8">
              <div className="inline-flex items-center justify-center rounded-full bg-card text-secondary-foreground px-3 py-1 text-[16px]">
                <BsDot size={30} className="-ml-2" />
                <span className="-ml-2">About Me</span>
              </div>
              <h2
                className="mt-4 text-2xl max-w-[706px] font-medium leading-tight text-foreground sm:text-[28px] md:text-[36px]"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                I&apos;m a results-driven{" "}
                <span className="font-semibold">digital marketer</span>
                <br className="hidden sm:block" />
                <span className="font-semibold">helping</span> brands increase
                visibility, leads.
              </h2>
              <div className="max-w-[855px]">
                <p className="mt-4 max-w-2xl text-[18px] text-foreground/80">
                  With a strong foundation in SEO, social media strategy,
                  content creation, and paid advertising, I turn data into
                  decisions and ideas into results. Over the years, I&apos;ve
                  worked with businesses of all sizes to improve their online
                  presence, drive targeted traffic, and boost sales.
                </p>
                <p className="mt-3 max-w-2xl text-[18px] text-foreground/80">
                  My approach is simple — understand your goals, connect with
                  your audience, and deliver results through creative and
                  strategic marketing.
                </p>
              </div>

              {/* Spotlight card */}
              <div className="mt-8 max-w-lg rounded-2xl bg-card p-4 ring-1 ring-border sm:p-4">
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-6">
                  <div className="relative h-[150px] w-[150px] flex-shrink-0 overflow-hidden rounded-xl bg-secondary sm:h-[200px] sm:w-[200px]">
                    <Image
                      src="/about-2.png"
                      alt="Headshot"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 text-[16px] text-muted-foreground space-y-2 text-center sm:text-left">
                    <p>
                      With a strong foundation in SEO, social media strategy,
                      content creation, and paid advertising, I turn data into
                      decisions and ideas into results.
                    </p>
                    <a
                      href="#projects"
                      className="inline-block text-[16px] text-brand-red underline underline-offset-4"
                    >
                      View my work
                    </a>
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="mt-10 flex flex-row items-center gap-6 md:gap-10">
                <div className="flex flex-col items-start  justify-center">
                  <div className="text-3xl md:text-[36px] font-semibold">
                    170+
                  </div>
                  <div className="text-[16px] text-muted-foreground">
                    Project complete
                  </div>
                </div>
                <div className="flex flex-col items-start  justify-center">
                  <div className="text-3xl md:text-[36px] font-semibold">
                    $500K+
                  </div>
                  <div className="text-[16px] text-muted-foreground">
                    in ad spend managed
                  </div>
                </div>
                <div className="flex flex-col items-start  justify-center">
                  <div className="text-3xl md:text-[36px] font-semibold">
                    3x
                  </div>
                  <div className="text-[16px] text-muted-foreground">
                    Avg ROI improvement
                  </div>
                </div>
              </div>
            </div>

            {/* Side card with portrait */}
            <aside className="md:col-span-4">
              <div className="mx-auto w-full max-w-xs">
              <div className="relative aspect-square w-full overflow-hidden flex flex-col items-center justify-center md:ml-50 md:mt-16">
                  <Image
                    src="/resume.png"
                    alt="Resume thumbnail"
                    width={226}
                    height={218}
                  className="object-cover block"
                  />
                <p className="mt-3 text-[16px] max-w-[226px] text-muted-foreground text-center">
                    View my resume to learn more about my experience.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      {/* Work Experiences */}
      <section
        id="experience"
        className="bg-brand-section-dark text-background py-14 sm:py-16 md:py-20"
      >
        <div className="mx-auto w-full max-w-7xl px-4">
          <div className="grid gap-10 md:grid-cols-12">
            {/* Left heading + pill */}
            <div className="md:col-span-4">
              <div className="inline-flex items-center justify-center rounded-full bg-card text-secondary-foreground px-3 py-1 text-[16px]">
                <BsDot size={30} className="-ml-2" />
                <span className="-ml-2">Work Experiences</span>
              </div>
              <h2
                className="mt-5 text-2xl max-w-[297px] font-medium leading-tight text-background/80 sm:text-[28px] md:text-[36px]"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Proven
                <span className="text-background">Experience</span> That Drives{" "}
                <span className="text-background">Results</span>
              </h2>
            </div>

            {/* Divider */}
            <div className="hidden md:col-span-1 md:block">
              <div className="h-full w-px translate-x-1/2 bg-background/15" />
            </div>

            {/* Items */}
            <div className="md:col-span-7 space-y-14">
              {/* Item 01 */}
              <article className="grid grid-cols-[auto,1fr] items-start gap-6">
                <div className="flex md:flex-row flex-col items-start justify-center gap-10 ">
                  <div className=" text-[40px] font-semibold text-background/30">
                    01
                  </div>
                  <div>
                    <h3 className="text-base md:text-[20px] font-semibold">
                      Digital Marketing Specialist{" "}
                      <span className="font-normal text-background/60">at</span>{" "}
                      LevaTech ltd
                    </h3>
                    <div className="mt-1 text-xs md:text-[16px] text-background/60">
                      2022 – Present
                    </div>
                    <p className="mt-3 text-sm md:text-[16px] leading-relaxed text-background/75">
                      At GrowthSpark Agency, I led SEO, Google Ads, and social
                      media strategies that boosted lead generation by 60%. I
                      managed $150K+ in ad spend with 3–5x ROAS, built
                      high-converting landing pages, and optimized funnels and
                      email campaigns to increase conversions by 28%.
                    </p>
                  </div>
                </div>
              </article>

              {/* Item 02 */}
              <article className="grid grid-cols-[auto,1fr] items-start gap-6">
                <div className="flex md:flex-row flex-col items-start justify-center gap-10 ">
                  <div className=" text-[40px] font-semibold text-background/30">
                    02
                  </div>
                  <div>
                    <h3 className="text-base md:text-[20px] font-semibold">
                      Social Media Marketing Intern{" "}
                      <span className="font-normal text-background/60">at</span>{" "}
                      AuraGen
                    </h3>
                    <div className="mt-1 text-xs md:text-[16px] text-background/60">
                      2020 – 2022
                    </div>
                    <p className="mt-3 text-sm md:text-[16px] leading-relaxed text-background/75">
                      At GrowthSpark Agency, I led SEO, Google Ads, and social
                      media strategies that boosted lead generation by 60%. I
                      managed $150K+ in ad spend with 3–5x ROAS, built
                      high-converting landing pages, and optimized funnels and
                      email campaigns to increase conversions by 28%.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section
        id="projects"
        className="bg-secondary/50 py-14 sm:py-16 md:py-20"
      >
        <div className="mx-auto w-full max-w-7xl px-4">
          <div className="grid gap-10 md:grid-cols-12">
            {/* Left header and link */}
            <div className="md:col-span-5">
              <div className="inline-flex items-center justify-center rounded-full bg-card text-secondary-foreground px-3 py-1 text-[16px]">
                <BsDot size={30} className="-ml-2" />
                <span className="-ml-2">Project</span>
              </div>
              <h2
                className="mt-4 text-2xl font-medium leading-tight  text-foreground sm:text-[28px] md:text-[36px]"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Campaigns That <span className="font-semibold">Clicked</span>:
                <br />
                My Most Effective{" "}
                <span className="font-semibold">Digital Marketing</span>{" "}
                Projects
              </h2>
              <a
                href="#"
                className="mt-5 inline-flex items-center gap-2 text-sm text-foreground underline underline-offset-4"
              >
                Explore my all projects{" "}
                <span aria-hidden>
                  <ArrowRight />
                </span>
              </a>
            </div>

            {/* Featured project card */}
            <div className="md:col-span-7 ">
              <article className="rounded-xl bg-card p-4  sm:p-4">
                <h3 className="text-base md:text-[20px] font-semibold">
                  E-commerce Rebranding Campaign
                </h3>
                <p className="mt-2 text-sm md:text-[16px] text-muted-foreground">
                  I&apos;m a results-driven digital marketer helping brands
                  increase visibility, leads, and sales through SEO, social
                  media, and data-backed campaigns.
                </p>
                <a
                  href="#"
                  className="mt-3 inline-block text-sm md:text-[16px] text-brand-red underline underline-offset-4"
                >
                  More about this Project
                </a>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-secondary">
                    <Image
                      src="/project-1.png"
                      alt="Project image 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-secondary">
                    <Image
                      src="/project-2.png"
                      alt="Project image 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-secondary">
                    <Image
                      src="/project-3.png"
                      alt="Project image 3"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* Project cards row */}
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3 justify-center items-center">
            {Array.from({ length: 3 }).map((_, index) => (
              <article
                key={index}
                className="md:h-[300px] md:w-[400px] rounded-xl bg-card p-8"
              >
                <h3 className="text-lg md:text-[20px] font-semibold">
                  Social Media Revamp
                </h3>
                <p className="mt-4 text-sm md:text-[16px] leading-relaxed text-muted-foreground">
                  Rebranded their Instagram and Facebook with a fresh content
                  strategy including reels, user-generated content, and
                  interactive stories.
                </p>
                <a
                  href="#"
                  className="mt-6 inline-block text-sm md:text-[16px] text-brand-red underline underline-offset-4"
                >
                  More about this Project
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="bg-brand-section-dark text-background py-14 sm:py-16 md:py-20"
      >
        <div className="mx-auto w-full max-w-7xl px-4">
          {/* Header (full width, above cards) */}
          <div>
            <div className="inline-flex items-center justify-center rounded-full bg-card text-secondary-foreground px-3 py-1 text-[16px]">
              <BsDot size={30} className="-ml-2" />
              <span className="-ml-2">Testimonial</span>
            </div>
            <h2
              className="mt-5 text-2xl font-medium leading-relaxed text-background/80 sm:text-[28px] md:text-[36px]"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Real words from people I&apos;ve had
              <br />
              the <span className="text-background">
                pleasure of working
              </span>{" "}
              with.
            </h2>
            {/* Avatars + caption */}
            <div className="mt-6 flex flex-col gap-3">
              <div className="flex -space-x-3 items-center">
                {avatar.map((item, index) => (
                  <div
                    key={index}
                    className="relative h-8 w-8 overflow-hidden rounded-full ring-2 ring-foreground"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cards masonry grid: 8 cards with second one highlighted */}
          <div className="mt-16 columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5">
            {testimonialItems.map((item, index) => (
              <article
                key={index}
                className={`group rounded-xl p-6 break-inside-avoid flex flex-col justify-between transition-colors duration-200 ${
                  index === 0
                    ? "bg-background/10 text-background ring-background/15 hover:bg-background hover:text-foreground h-[433px]"
                    : index === 1
                    ? "bg-background/10 text-background ring-background/15 hover:bg-background hover:text-foreground h-[325px]"
                    : index === 2
                    ? "bg-background/10 text-background ring-background/15 hover:bg-background hover:text-foreground h-[352px]"
                    : index === 3
                    ? "bg-background/10 text-background ring-background/15 hover:bg-background hover:text-foreground h-[352px]"
                    : index === 4
                    ? "bg-background/10 text-background ring-background/15 hover:bg-background hover:text-foreground h-[298px]"
                    : index === 5
                    ? "bg-background/10 text-background ring-background/15 hover:bg-background hover:text-foreground h-[433px]"
                    : index === 6
                    ? "bg-background/10 text-background ring-background/15 hover:bg-background hover:text-foreground h-[379px]"
                    : "bg-background/10 text-background ring-background/15 hover:bg-background hover:text-foreground h-[298px]"
                }`}
              >
                <p
                  className={`text-[16px] leading-relaxed text-background/80 group-hover:text-foreground/80`}
                >
                  {item.description}
                </p>
                <div className="mt-4">
                  <div
                    className={`text-[16px] font-semibold text-background group-hover:text-foreground`}
                  >
                    {item.name}
                  </div>
                  <div
                    className={`text-[14px] text-background/60 group-hover:text-foreground/60`}
                  >
                    {item.title}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="bg-secondary/50 py-14 sm:py-16 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-4">
          <div className="grid items-start gap-10 md:grid-cols-12">
            {/* Left content */}
            <div className="md:col-span-6 max-w-[490px]">
              <div className="inline-flex items-center justify-center rounded-full bg-card text-secondary-foreground px-3 py-1 text-[16px]">
                <BsDot size={30} className="-ml-2" />
                <span className="-ml-2">Contact info</span>
              </div>
              <h2
                className="mt-4 max-w-[650px] text-2xl font-medium leading-relaxed text-foreground sm:text-[28px] md:text-[36px]"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Have a <span className="font-semibold">project in mind</span> or
                just want to
                <span className="font-semibold">say hello</span>?
              </h2>

              <div className="mt-8 space-y-5">
                {/* Phone */}
                <div className="rounded-xl bg-background p-6 ">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground">
                      {/* phone icon */}
                      <MdCall size={20} />
                    </div>
                    <div>
                      <div className="text-[16px] font-medium">
                        01234-567932
                      </div>
                      <div className="mt-1 text-[14px] text-muted-foreground">
                        Only 8AM – 9PM GMT+5:30
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="rounded-xl bg-background p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground">
                      {/* mail icon */}
                      <MdEmail size={20} />
                    </div>
                    <div>
                      <div className="text-[16px] font-medium">
                        miden@email.com
                      </div>
                      <div className="mt-1 text-[14px] text-muted-foreground">
                        Any time you could reach me via email
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="rounded-xl bg-background p-6 ">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground">
                      {/* location icon */}
                      <MdLocationOn size={20} />
                    </div>
                    <div>
                      <div className="text-[16px] font-medium">
                        California, USA
                      </div>
                      <div className="mt-1 text-[14px] text-muted-foreground">
                        Take appointment for a great meeting
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right decorative blocks */}
            <div className="md:col-span-6 md:mt-50 md:flex hidden">
              <div className="relative">
                <Image
                  src="/contact-1.png"
                  alt="Contact image"
                  width={312}
                  height={323}
                  className="object-cover block"
                />
              </div>
              <div className="absolute pl-52">
                <Image
                  src="/contact.png"
                  alt="Contact image"
                  width={345}
                  height={324}
                  className="object-cover block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-brand-section-dark text-background py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4">
          <div className="grid gap-12 md:grid-cols-12 place-items-center md:place-items-start text-center md:text-left">
            {/* Brand + blurb */}
            <div className="md:col-span-6">
              <h3
                className="text-5xl font-semibold leading-tight tracking-tight sm:text-6xl"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Miden
                <br />
                Rade
              </h3>
              <p className="mt-6 max-w-md text-sm text-background/70 mx-auto md:mx-0">
                My approach is simple — understand your goals, connect with your
                audience, and deliver results through creative and strategic
                marketing.
              </p>
            </div>

            {/* Link columns */}
            <div className="md:col-span-3 md:mt-30">
              <div className="text-[11px] uppercase tracking-wider text-background/50">
                Importent Link
              </div>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href="#experience"
                    className="underline-offset-4 hover:underline"
                  >
                    Experiences
                  </a>
                </li>
                <li>
                  <a
                    href="#education"
                    className="underline-offset-4 hover:underline"
                  >
                    Education
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="underline-offset-4 hover:underline"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:col-span-3 md:mt-30">
              <div className="text-[11px] uppercase tracking-wider text-background/50">
                Social Media
              </div>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a href="#" className="underline underline-offset-4">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="underline underline-offset-4">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="underline underline-offset-4">
                    X (twitter)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
