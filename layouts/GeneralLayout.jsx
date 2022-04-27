import { Container } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

function GeneralLayout({
  children,
  title,
  description,
  twitter_title,
  twitter_description,
  canonical_url,
  og_image,
}) {
  const desc =
    "Download all music from African Artists. Download African misic. Download African music Mp3. Download African albums zip";
  const original_title = "TunezAfrica";
  const url = "www.tunezafrica.com";
  return (
    <div className="overflow-scroll bg-gray-100 min-h-screen" style={{ backgroundColor: 'rgb(243 244 246)' }}>
      <Head>
        <title>{title ? `${title} | TunezAfrica ` : original_title}</title>
        <meta name="description" content={description ? description : desc} />
        <meta property="og:type" content="website" />
        <meta
          name="og:title"
          property="og:title"
          content={title ? `${title} | TunezAfrica` : original_title}
        />
        <meta
          name="og:description"
          property="og:description"
          content={description ? description : desc}
        />
        <meta property="og:site_name" content="www.tunezafrica.com" />
        <meta property="og:url" content="" />
        <meta
          property="og:image"
          content={
            og_image
              ? og_image
              : "//cdn.example.com/uploads/images/webpage_300x200.png"
          }
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content={
            twitter_title
              ? `${twitter_title} | Trolliey`
              : "Trolliey | Buy and sell items online"
          }
        />
        <meta name="twitter:description" content={twitter_description} />
        <meta name="twitter:site" content="" />
        <meta name="twitter:creator" content="" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="twitter:image" content={og_image} />
        <link rel="canonical" href={canonical_url ? canonical_url : url} />
      </Head>
      <nav className="sticky top-0 z-50 right-0">
        <Navbar />
      </nav>
      <main className="w-full pt-16 bg-gray-100 min-h-screen" style={{ backgroundColor: 'rgb(243 244 246)' }}>
        <Container maxW="container.xl" className="mx-auto bg-gray-100">
          {children}
        </Container>
      </main>

      <footer className="text-gray-700">
        <Footer />
      </footer>
    </div>
  );
}

export default GeneralLayout;
