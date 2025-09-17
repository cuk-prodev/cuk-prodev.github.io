"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./ceo.module.css";

const profile = {
  name: "Mohamad Eko Prasetyo, S.Kom",
  title: "Analyst System & Fullstack Programmer",
  description:
    "Saya seorang Software Engineer & Fullstack Developer dengan pengalaman lebih dari 10 tahun membangun aplikasi Web, Mobile, dan Backend.",
  photo: "/user.jpeg",
  info: [
    { label: "Tempat Lahir", value: "Jakarta" },
    { label: "Tanggal Lahir", value: "03-09-1992" },
    { label: "Alamat", value: "Jakarta, Indonesia" },
    { label: "No. WA", value: "+62812-8978-4331" },
  ],
  skillsBar: [
    { label: "System Analyst & Coding", level: 95 },
    { label: "Database", level: 95 },
    { label: "Android System", level: 92 },
    { label: "Networking", level: 90 },
    { label: "Video & 3D Design", level: 91 },
    { label: "SEO", level: 93 },
  ],
};

const codingSkills = [
  { name: "C#", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: "Laravel", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" },
  { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Golang", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
  { name: "Flutter", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Java", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Spring Boot", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "Docker", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "MySQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  // VB6 tidak tersedia resmi di devicon, gunakan placeholder/icon custom Anda sendiri
  // { name: "VB6", url: "/images/icons/vb6-icon.svg" }, 
];


export default function CeoPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // trigger progress bar animation
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className={styles.wrapper} style={{marginTop: "100px"}}>
      <div className={styles.container}>
        <div className={styles.card}>
          {/* Header */}
          <section className={styles.headerGrid}>
            <div className={styles.avatarWrap} style={{marginTop: "20px"}}>
              <Image
                src={profile.photo}
                alt={profile.name}
                width={220}
                height={220}
                className={styles.avatar}
                priority
              />
            </div>

            <div className={styles.info}>
              <h1 className={styles.name}>{profile.name}</h1>
              <h2 className={styles.title}>{profile.title}</h2>
              <p className={styles.description}>{profile.description}</p>

              <ul className={styles.infoList} style={{padding: "20px"}}>
                {profile.info.map((it, idx) => (
                  <li key={idx}>
                    <span className={styles.infoLabel}>{it.label}:</span>{" "}
                    <span className={styles.infoValue}>{it.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Skills */}
          <section className={styles.skillsSection}>
            <h3 className={styles.sectionTitle}>My Skills</h3>

            <div className={styles.skillList}>
              {profile.skillsBar.map((skill, i) => (
                <div className={styles.skill} key={i}>
                  <div className={styles.skillHead}>
                    <span className={styles.skillLabel}>{skill.label}</span>
                    <span className={styles.skillPercent}>{skill.level}%</span>
                  </div>

                  <div className={styles.progress}>
                    <div
                      className={styles.progressBar}
                      style={{ width: mounted ? `${skill.level}%` : "0%" }}
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Icons */}
          <section className={styles.iconsSection}>
            <h3 className={styles.sectionTitle}>Coding Skills</h3>
            <div className={styles.iconsGrid}>
              {codingSkills.map((sk) => (
                <div className={styles.iconBox} key={sk.name} title={sk.name}>
                  <Image src={sk.url} alt={sk.name} width={120} height={120} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
