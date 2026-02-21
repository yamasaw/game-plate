import { NavLink } from 'react-router-dom'

const NAV_ITEMS = [
    { to: '/game', label: 'Game', icon: '/icons/sword.svg' },
    { to: '/forge', label: 'Forge', icon: '/icons/hammer.svg' },
    { to: '/explore', label: 'Explore', icon: '/icons/pickaxe.svg' },
    { to: '/shop', label: 'Shop', icon: '/icons/shop.svg' },
    { to: '/settings', label: 'Config', icon: '/icons/config.svg' },
]

export default function BottomNav() {
    return (
        <nav className="flex items-center justify-around h-[--spacing-nav] pb-[--safe-bottom] bg-surface border-t border-border shrink-0 px-2">
            {NAV_ITEMS.map(({ to, label, icon }) => (
                <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>
                        `group flex flex-col items-center gap-[4px] flex-1 py-2 no-underline transition-all duration-300 relative ${isActive ? 'text-primary' : 'text-text-muted hover:text-text'
                        }`
                    }
                >
                    <div className="relative flex items-center justify-center w-8 h-8 transition-transform duration-300 group-active:scale-90 group-[.active]:scale-110">
                        {/*  mask-imageを使用してCSS変数の色をSVGに適用 */}
                        <div
                            className="w-6 h-6 bg-current"
                            style={{
                                maskImage: `url(${icon})`,
                                WebkitMaskImage: `url(${icon})`,
                                maskRepeat: 'no-repeat',
                                WebkitMaskRepeat: 'no-repeat',
                                maskPosition: 'center',
                                WebkitMaskPosition: 'center',
                                maskSize: 'contain',
                                WebkitMaskSize: 'contain'
                            }}
                        />
                    </div>
                    <span className="text-[10px] font-bold tracking-wider uppercase opacity-80 group-[.active]:opacity-100 transition-opacity">
                        {label}
                    </span>
                    <div className="absolute bottom-1 w-1 h-1 rounded-full bg-primary scale-0 group-[.active]:scale-100 transition-transform duration-300" />
                </NavLink>
            ))}
        </nav>
    )
}
