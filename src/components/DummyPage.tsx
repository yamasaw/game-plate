import styles from './DummyPage.module.css'

interface Props {
    title: string
    icon: string
    description: string
}

export default function DummyPage({ title, icon, description }: Props) {
    return (
        <div className={styles.page}>
            <span className={styles.icon}>{icon}</span>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
        </div>
    )
}
