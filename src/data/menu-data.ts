


interface DataType {
  id: number;
  title: string;
  link: string;
  img_dropdown?: boolean;
  has_dropdown?: boolean;
  mega_menu?: boolean;

  sub_menus?: {
    link: string;
    title: string;
    demo_img?: string;
  }[];

  mega_menus?: {
    title: string;
    menus: {
      link: string;
      title: string;
    }[];
  }[];
}

const menu_data: DataType[] = [
{
  id: 1,
  title: "HOME",
  link: "/",
  img_dropdown: false,
},
{
  id: 2,
  title: "ABOUT US",
  link: "/about-us",
  img_dropdown: false,
},

  {
    id: 3,
    title: "COURSES",
    link: "/courses",
   img_dropdown: false,
   },


  {
    id: 4,
    title: "CONTACT US",
    link: "/contact-us",
    has_dropdown: false,
  },
];

export default menu_data;