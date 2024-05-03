import React from 'react';
import { Menu } from 'primereact/menu';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';

const Sidebar = () => {
    const { signout } = useAuth();
    const items = [
        {
            label: "Dashboard",
            icon: "pi pi-th-large",
            template: (item, options) => {
                return (
                    <div className='p-menuitem-content'>
                        <Link to="/admin/dashboard" className={options.className}>
                            <span className={options.iconClassName}></span>
                            <span className={options.labelClassName}>{item.label}</span>
                        </Link>
                    </div>
                )
            }
        },
        {
            label: "Pesanan",
            icon: "pi pi-shopping-cart",
            template: (item, options) => {
                return (
                    <div className='p-menuitem-content'>
                        <Link to="/admin/pesanan" className={options.className}>
                            <span className={options.iconClassName}></span>
                            <span className={options.labelClassName}>{item.label}</span>
                        </Link>
                    </div>
                )
            }
        },
        {
            label: "Kategori",
            icon: "pi pi-tags",
            template: (item, options) => {
                return (
                    <div className='p-menuitem-content'>
                        <Link to="/admin/kategori" className={options.className}>
                            <span className={options.iconClassName}></span>
                            <span className={options.labelClassName}>{item.label}</span>
                        </Link>
                    </div>
                )
            }
        },
        {
            label: "Produk",
            icon: "pi pi-box",
            template: (item, options) => {
                return (
                    <div className='p-menuitem-content'>
                        <Link to="/admin/produk" className={options.className}>
                            <span className={options.iconClassName}></span>
                            <span className={options.labelClassName}>{item.label}</span>
                        </Link>
                    </div>
                )
            }
        },
        {
            label: "Pengguna",
            icon: "pi pi-users",
            template: (item, options) => {
                return (
                    <div className='p-menuitem-content'>
                        <Link to="/admin/pengguna" className={options.className}>
                            <span className={options.iconClassName}></span>
                            <span className={options.labelClassName}>{item.label}</span>
                        </Link>
                    </div>
                )
            }
        },
        {
            label: "Sign Out",
            icon: "pi pi-sign-out",
            command: () => signout()
        },
    ];

    return (
        <div>
            <h3>Sidebar</h3>
            <Menu model={items} className="sidebar" />
        </div>
    )
}

export default Sidebar;