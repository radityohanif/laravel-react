const getAdminMenu = () => {
    return [
        {
            name: 'Dashboard',
            link: 'dashboard'
        },
        {
            name: 'Contact',
            link: 'contact'
        },
    ]
}

export const useMenuStore = {
    getAdminMenu
}