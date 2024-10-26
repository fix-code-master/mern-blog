export const MenuItems = [
  {
    title: 'Home',
    url: '/',
    cName: 'nav-links',
    icon: 'fa-solid fa-house-user',
  },
  {
    title: 'Service',
    // url: '/gallery',
    cName: 'nav-links',
    icon: 'fa-solid fa-briefcase',
    service: [
      { title: 'Gallery', url: '/gallery', cName: 'nav-links' },
      {
        title: 'Presentation',
        url: '/presentation',
        cName: 'nav-links',
      },
    ],
  },
  {
    title: 'Contact',
    // url: '/contact',
    cName: 'nav-links',
    icon: 'fa-solid fa-address-book',
    service: [
      { title: 'About Us', url: '/aboutus', cName: 'nav-links' },
      {
        title: 'Vacancy',
        url: '/vacancy',
        cName: 'nav-links',
      },
    ],
  },
  {
    title: 'Sign Up',
    url: '/signup',
    cName: 'nav-links-mobile',
  },
]


