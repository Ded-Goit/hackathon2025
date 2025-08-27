import Image from "next/image";
import styles from "./page.module.css";
import Task from "@/components/Task/Task";

const tasks = [
  {
    title: "«Lorem Ipsum»",
    description:
      "Платформа, що працює в унісон з тобою. Ми створили інструмент, який адаптується до твого стилю життя, підтримує твої проєкти і допомагає досягати результатів без зайвого шуму.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.content}>
          <div className={styles.textBlock}>
            <h1 className={styles.heading}>
              Твій час. Твій ритм. Твій асистент.
            </h1>
            <div className={styles.tasks}>
              {tasks.map((task, index) => (
                <Task
                  key={index}
                  title={task.title}
                  description={task.description}
                />
              ))}
            </div>
          </div>
          <div className={styles.imagesBlock}>
            <div className={styles.imageGroup}>
              <Image
                src="/hero/monkey.webp"
                alt="Summary"
                width={300}
                height={400}
                sizes="(max-width: 480px) 200px,
                       (max-width: 1024px) 250px,
                       300px"
                priority
                className={styles.imageMain}
              />
              <Image
                src="/hero/monkey.webp"
                alt="Summary"
                width={120}
                height={120}
                className={styles.imageFrog}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
