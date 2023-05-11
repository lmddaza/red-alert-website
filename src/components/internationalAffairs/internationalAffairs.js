import Image from "next/image";
import Link from "next/link";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useEffect } from "react";

import Modal from "src/components/modal/modal.js";
export default function Articles({ articles }) {
  if (!articles || !Array.isArray(articles)) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 gap-1">
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
            <Link href="/vision-mission">Officials and Staff</Link>CLES
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
        <br></br>
        <Link href="#">
          <span className="h1-link">Articles</span>
        </Link>
        <br></br>
        <div className="columns">
          <div className="column">
            <div className="image-container">
              {articles.length > 0 && (
                <a href={`#${articles[0].id}`}>
                  <Image
                    src="/paris.jpg"
                    alt="Column 1"
                    width={257}
                    height={950}
                    className="article-paris"
                  />
                </a>
              )}
            </div>
            {articles
              .slice(0, Math.ceil(articles.length / 3))
              .map((article) => (
                <div key={article.id} className="article-container">
                  <br></br>
                  <a href={`#${article.id}`} className="article-title">
                    {article.title}
                  </a>
                </div>
              ))}
          </div>
          <div className="column">
            <div className="image-container">
              <a href={`#${articles[1]?.id}`}>
                <Image
                  src="/canyon.jpg"
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
                  <a href={`#${article.id}`} className="article-title">
                    {article.title}
                  </a>
                </div>
              ))}
          </div>
          <div className="column">
            <div className="image-container">
              <a href={`#${articles[2]?.id}`}>
                <Image
                  src="/tanzaniaa.jpg"
                  alt="Column 3"
                  width={257}
                  height={650}
                />
              </a>
            </div>
            {articles
              .slice(Math.ceil((2 * articles.length) / 3))
              .map((article) => (
                <div key={article.id} className="article-container">
                  <br></br>
                  <a href={`#${article.id}`} className="article-title">
                    {article.title}
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  try {
    const response = await fetch(
      "https://api.ahglab.com/api:W7k9W8HQ/articles"
    );
    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error("API response is not an array.");
    }

    const paths = data.map((article) => ({
      params: { id: article.id.toString() },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.error("Error in getStaticPaths:", error);
    // Handle the error or return a fallback value if necessary
    throw error;
  }
}

export async function getStaticProps({ params }) {
  try {
    const response = await fetch(
      "https://api.ahglab.com/api:W7k9W8HQ/articles"
    );
    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error("API response is not an array.");
    }

    const articles = data.map((article) => ({
      id: article.id,
      title: article.title,
    }));

    return { props: { articles } };
  } catch (error) {
    console.error("Error in getStaticProps:", error);
    // Handle the error or return a fallback value if necessary
    throw error;
  }
}
