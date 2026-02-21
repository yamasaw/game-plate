import { NavLink } from 'react-router-dom'
import styles from './BottomNav.module.css'

const NAV_ITEMS = [
    { to: '/game', label: 'Game', icon: '⚔️' },
    { to: '/forge', label: 'Forge', icon: '🔨' },
    { to: '/explore', label: 'Explore', icon: '🔍' },
    { to: '/shop', label: 'Shop', icon: '🏪' },
    { to: '/settings', label: 'Config', icon: '⚙️' },
]

export default function BottomNav() {
    return (
        <nav className={styles.nav}>
            {NAV_ITEMS.map(({ to, label, icon }) => (
                <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>
                        `${styles.item} ${isActive ? styles.active : ''}`
                    }
                >
                    <span className={styles.icon}>{icon}</span>
                    <span className={styles.label}>{label}</span>
                </NavLink>
            ))}
        </nav>
    )
}
