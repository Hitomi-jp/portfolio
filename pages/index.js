import Head from "next/head";
import Image from "next/image";

import Link from "next/link";
import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";

import { useState, useEffect } from "react";

export default function Home() {
  const [darkTheme, setDarkTheme] = useState(undefined);

  const handleToggle = (e) => {
    setDarkTheme(e.target.checked);
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    // Set initial darkmode to light
    setDarkTheme(initialColorValue === "dark");
  }, []);

  return (
    <div>
      <div className='container'>
        <nav>
          <form action=''>
            <label className='switch'>
              <input
                type='checkbox'
                onChange={handleToggle}
                checked={darkTheme}
              />
              <span className='slider'></span>
            </label>
          </form>
        </nav>
      </div>
      <Layout>
        <section className={utilStyles.headingProfile}></section>
        <div className={utilStyles.letterProfile}>
          <ul>
            <li>
              <Link href='/profile'>
                <p>Profile</p>
              </Link>
            </li>
            <li>
              <Link href='/blog'>
                <p>Blog</p>
              </Link>
            </li>
            <li>
              <Link href=''>
                <p>Applications</p>
              </Link>
            </li>
          </ul>
        </div>
      </Layout>
    </div>
  );
}
