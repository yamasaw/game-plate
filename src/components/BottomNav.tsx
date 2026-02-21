import { NavLink } from 'react-router-dom'

const NAV_ITEMS = [
    { to: '/game', label: 'Game', icon: '⚔️' },
    { to: '/forge', label: 'Forge', icon: '🔨' },
    { to: '/explore', label: 'Explore', icon: '🔍' },
    { to: '/shop', label: 'Shop', icon: '🏪' },
    { to: '/settings', label: 'Config', icon: '⚙️' },
]

export default function BottomNav() {
    return (
        <nav className="flex items-center justify-around h-[--spacing-nav] pb-[--safe-bottom] bg-surface border-t border-border shrink-0">
            {NAV_ITEMS.map(({ to, label, icon }) => (
                <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>
                        `flex flex-col items-center gap-[2px] flex-1 py-2 no-underline transition-colors duration-200 ${isActive ? 'text-primary' : 'text-text-muted'}`
                    }
                >
                    <span className="text-[22px] leading-none">{icon}</span>
                    <span className="text-[10px] font-semibold tracking-wider uppercase">{label}</span>
                </NavLink>
            ))}
        </nav>
    )
}
