
import DirectionsBus from '@mui/icons-material/DirectionsBus';
import HomeIcon from '@mui/icons-material/Home';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import TourIcon from '@mui/icons-material/Tour';
export const MENU_SIDEBAR = [
    {
        name: 'Trang chủ',
        url: '/admin/trang-chu',
        icon: HomeIcon
    },
  /*   {
        name: 'Quản lí nhân viên',
        url: '/admin/staff',
        icon: FileCopyIcon
    }, */
    {
        name: 'Quản lí đơn đặt vé',
        url: '/admin/order',
        icon: LocalActivityIcon
    },
    {
        name: 'Quản lí xe',
        url: '/admin/bus',
        icon: DirectionsBus
    },
   /*  {
        name: 'Quản lí khuyến mãi',
        url: '/admin/khuyen-mai',
        icon: HandymanIcon
    }, */
    {
        name: 'Quản lí base',
        url: '/admin/base',
        icon: AddLocationAltIcon
    },
    {
        name: 'Quản lí route',
        url: '/admin/route',
        icon: TourIcon
    }
];

export const MENU_SETTING_SIDEBAR = [
    {
        name: 'Cao cấp',
        url: '/admin/manager'
    },
    {
        name: 'Người dùng',
        url: '/admin/user'
    },
];

/* export const MENU_SYSTEM_SIDEBAR = [
    {
        name: 'Nhóm quyền',
        url: '/admin/nhom-quyen'
    },
    {
        name: 'Quyền',
        url: '/admin/quyen'
    },
]; */
