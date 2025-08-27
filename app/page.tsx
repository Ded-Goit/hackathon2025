import Image from "next/image";
import styles from "./page.module.css";
import FrogTask from "@/components/FrogTask/FrogTask";

const tasks = [
  {
    title: "«Lorem Ipsum»",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Нет никого, кто любил бы боль саму по себе, кто искал бы её и кто хотел бы иметь её просто потому, что это боль..",
  },
  {
    title: "«Lorem Ipsum»",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Нет никого, кто любил бы боль саму по себе, кто искал бы её и кто хотел бы иметь её просто потому, что это боль..",
  },
  {
    title: "«Lorem Ipsum»",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Нет никого, кто любил бы боль саму по себе, кто искал бы её и кто хотел бы иметь её просто потому, что это боль..",
  },
];

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.content}>
          <div className={styles.textBlock}>
            <h1 className={styles.heading}>Lorem Ipsum</h1>
            <div className={styles.tasks}>
              {tasks.map((task, index) => (
                <FrogTask
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
