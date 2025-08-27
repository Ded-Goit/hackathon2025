// app/about/page.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./about.module.css";

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Заборона скролу та Esc
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsModalOpen(false);
        }
      };
      window.addEventListener("keydown", handleEsc);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleEsc);
      };
    }
  }, [isModalOpen]);

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>Lorem ipsum</h1>

      {/* Top Block */}
      <div className={styles.row}>
        <div className={styles.colImage}>
          <Image
            src="/hero/monkey.webp"
            alt="Summary"
            width={600}
            height={400}
            className={styles.image}
            onClick={() => setIsModalOpen(true)}
          />
        </div>
        <div className={styles.colText}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            lobortis pretium scelerisque. Pellentesque finibus, nunc et
            dignissim laoreet, augue velit venenatis lorem, at vestibulum arcu
            felis quis mauris. Aenean pharetra nulla mi, vel varius tellus
            sagittis ut. Proin sed sapien non mi hendrerit elementum nec ac
            lectus. Sed ac accumsan mauris. Curabitur sed lacus a quam convallis
            rhoncus. Donec interdum orci in diam consequat pretium. Nam pulvinar
            turpis vel metus pharetra, ac porttitor velit placerat.
          </p>
          <blockquote className={styles.quote}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            lobortis pretium scelerisque. Pellentesque finibus, nunc et
            dignissim laoreet, augue velit venenatis lorem, at vestibulum arcu
            felis quis mauris. Aenean pharetra nulla mi, vel varius tellus
            sagittis ut. Proin sed sapien non mi hendrerit elementum nec ac
            lectus. Sed ac accumsan mauris. Curabitur sed lacus a quam convallis
            rhoncus. Donec interdum orci in diam consequat pretium. Nam pulvinar
            turpis vel metus pharetra, ac porttitor velit placerat.
          </blockquote>
          <ul className={styles.keyPoints}>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              lobortis pretium scelerisque. Pellentesque finibus, nunc et
              dignissim laoreet, augue velit venenatis lorem, at vestibulum arcu
              felis quis mauris. Aenean pharetra nulla mi, vel varius tellus
              sagittis ut. Proin sed sapien non mi hendrerit elementum nec ac
              lectus. Sed ac accumsan mauris. Curabitur sed lacus a quam
              convallis rhoncus. Donec interdum orci in diam consequat pretium.
              Nam pulvinar turpis vel metus pharetra, ac porttitor velit
              placerat.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              lobortis pretium scelerisque. Pellentesque finibus, nunc et
              dignissim laoreet, augue velit venenatis lorem, at vestibulum arcu
              felis quis mauris. Aenean pharetra nulla mi, vel varius tellus
              sagittis ut. Proin sed sapien non mi hendrerit elementum nec ac
              lectus. Sed ac accumsan mauris. Curabitur sed lacus a quam
              convallis rhoncus. Donec interdum orci in diam consequat pretium.
              Nam pulvinar turpis vel metus pharetra, ac porttitor velit
              placerat.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              lobortis pretium scelerisque. Pellentesque finibus, nunc et
              dignissim laoreet, augue velit venenatis lorem, at vestibulum arcu
              felis quis mauris. Aenean pharetra nulla mi, vel varius tellus
              sagittis ut. Proin sed sapien non mi hendrerit elementum nec ac
              lectus. Sed ac accumsan mauris. Curabitur sed lacus a quam
              convallis rhoncus. Donec interdum orci in diam consequat pretium.
              Nam pulvinar turpis vel metus pharetra, ac porttitor velit
              placerat.
            </li>
          </ul>
        </div>
      </div>

      {/* Author Block */}
      <div className={styles.row}>
        <div className={styles.colText}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            lobortis pretium scelerisque. Pellentesque finibus, nunc et
            dignissim laoreet, augue velit venenatis lorem, at vestibulum arcu
            felis quis mauris. Aenean pharetra nulla mi, vel varius tellus
            sagittis ut. Proin sed sapien non mi hendrerit elementum nec ac
            lectus. Sed ac accumsan mauris. Curabitur sed lacus a quam convallis
            rhoncus. Donec interdum orci in diam consequat pretium. Nam pulvinar
            turpis vel metus pharetra, ac porttitor velit placerat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            lobortis pretium scelerisque. Pellentesque finibus, nunc et
            dignissim laoreet, augue velit venenatis lorem, at vestibulum arcu
            felis quis mauris. Aenean pharetra nulla mi, vel varius tellus
            sagittis ut. Proin sed sapien non mi hendrerit elementum nec ac
            lectus. Sed ac accumsan mauris. Curabitur sed lacus a quam convallis
            rhoncus. Donec interdum orci in diam consequat pretium. Nam pulvinar
            turpis vel metus pharetra, ac porttitor velit placerat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            lobortis pretium scelerisque. Pellentesque finibus, nunc et
            dignissim laoreet, augue velit venenatis lorem, at vestibulum arcu
            felis quis mauris. Aenean pharetra nulla mi, vel varius tellus
            sagittis ut. Proin sed sapien non mi hendrerit elementum nec ac
            lectus. Sed ac accumsan mauris. Curabitur sed lacus a quam convallis
            rhoncus. Donec interdum orci in diam consequat pretium. Nam pulvinar
            turpis vel metus pharetra, ac porttitor velit placerat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            lobortis pretium scelerisque. Pellentesque finibus, nunc et
            dignissim laoreet, augue velit venenatis lorem, at vestibulum arcu
            felis quis mauris. Aenean pharetra nulla mi, vel varius tellus
            sagittis ut. Proin sed sapien non mi hendrerit elementum nec ac
            lectus. Sed ac accumsan mauris. Curabitur sed lacus a quam convallis
            rhoncus. Donec interdum orci in diam consequat pretium. Nam pulvinar
            turpis vel metus pharetra, ac porttitor velit placerat.
          </p>
        </div>
        <div className={styles.colImage}>
          <Image
            src="/about/monkey.webp"
            alt="Summary"
            width={400}
            height={400}
            className={styles.imagep}
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className={styles.modal} onClick={() => setIsModalOpen(false)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeBtn}
              onClick={() => setIsModalOpen(false)}
              aria-label="Close"
            >
              ✖
            </button>
            <Image
              src="/about/monkey.webp"
              alt="Summary"
              width={1200}
              height={800}
              className={styles.modalImage}
            />
          </div>
        </div>
      )}
    </section>
  );
}
