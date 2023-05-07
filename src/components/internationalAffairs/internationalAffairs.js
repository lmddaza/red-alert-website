import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Articles({ articles }) {
  if (!articles || !Array.isArray(articles)) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-1 internationalContents">
        <h1 className="contactus-heading ">International Affairs</h1>
        <Image
          src={"/internationalAffairs.JPG"}
          alt="ffairs"
          width={957}
          height={950}
        />
      </div>
      <div className="col-span-1 affairsContents">
        <h2 className="hello">CONTENTS</h2>
        <ul>
          <li>
            <Link href="/vision-mission">Office of International Affairs</Link>
          </li>
          <li>
            <Link href="/vision-mission">Objective and Functions</Link>
          </li>
          <li>
            <Link href="/history">Services</Link>
          </li>
          <li>
            <Link href="/logo-symbols">International Linkages</Link>
          </li>
          <li>
            <Link href="/hymn">Qualifications and Requirements</Link>
          </li>
          <li>
            <Link href="/annual-reports">Frequently Asked Questions</Link>
          </li>
          <li>
            <Link href="/vision-mission">Officials and Staff</Link>
          </li>
          <li>
            <Link href="/history">Contact Information</Link>
          </li>
        </ul>
      </div>
      <div className="articles-container">
        <p>
          The PUP Office of International Affairs is engaged in a wide variety
          of programs and activities aligned with the vision of President Manuel
          M. Muhi towards establishment of PUP as a National Polytechnic
          University.
          <br></br> <br></br>
          Thus, the Office for International Affairs provides leadership and
          coordination for all University-wide international activities for
          coherence and integration of the institutions international linkages,
          cooperation, exchanges, programs and services:
        </p>

        <ul className="affairs-list">
          <li>
            <span>&#8226;</span> International Exchange Students
          </li>
          <li>
            <span>&#8226;</span> International Seminars/Fora
          </li>
          <li>
            <span>&#8226;</span> International Scholarship Grants
          </li>
          <li>
            <span>&#8226;</span> International Faculty Exchange
          </li>
          <li>
            <span>&#8226;</span> International Organizations Affiliation
          </li>
        </ul>
        <Link href="/">
          <a className="h1-link">Articles</a>
        </Link>
        <div className="columns">
          <div className="column">
            <div className="image-container">
              {articles.length > 0 && (
                <a href={`/${articles[0].id}`}>
                  <Image
                    src="/paris.jpg"
                    alt="Column 1"
                    width={257}
                    height={950}
                  />
                </a>
              )}
            </div>
            {articles
              .slice(0, Math.ceil(articles.length / 3))
              .map((article) => (
                <div key={article.id} className="article-container">
                  <br></br>
                  <a href={`/${article.id}`}>{article.title}</a>
                </div>
              ))}
          </div>
          <div className="column">
            <div className="image-container">
              <a href={`/${articles[1]?.id}`}>
                <Image
                  src="/paris.jpg"
                  alt="Column 2"
                  width={257}
                  height={950}
                />
              </a>
            </div>
            {articles
              .slice(
                Math.ceil(articles.length / 3),
                Math.ceil((2 * articles.length) / 3)
              )
              .map((article) => (
                <div key={article.id} className="article-container">
                  <br></br>
                  <a href={`/${article.id}`}>{article.title}</a>
                </div>
              ))}
          </div>
          <div className="column">
            <div className="image-container">
              <a href={`/${articles[2]?.id}`}>
                <Image
                  src="/paris.jpg"
                  alt="Column 3"
                  width={257}
                  height={950}
                />
              </a>
            </div>
            {articles
              .slice(Math.ceil((2 * articles.length) / 3))
              .map((article) => (
                <div key={article.id} className="article-container">
                  <br></br>
                  <a href={`/${article.id}`}>{article.title} </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const response = await fetch("https://api.ahglab.com/api:W7k9W8HQ/articles");
  const data = await response.json();
  const paths = data.map((article) => ({
    params: { id: article.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const response = await fetch("https://api.ahglab.com/api:W7k9W8HQ/articles");
  const data = await response.json();
  const articles = data.map((article) => ({
    id: article.id,
    title: article.title,
  }));

  return { props: { articles } };
}
