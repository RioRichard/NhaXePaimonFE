import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import HandymanIcon from '@mui/icons-material/Handyman';
import DirectionsBus from '@mui/icons-material/DirectionsBus';
import HomeIcon from '@mui/icons-material/Home';
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';
import ViewInArIcon from '@mui/icons-material/ViewInAr';

export const MENU_SIDEBAR = [
    {
        name: 'Trang chủ',
        url: '/admin/trang-chu',
        icon: HomeIcon
    },
    {
        name: 'Quản lí nhân viên',
        url: '/admin/staff',
        icon: FileCopyIcon
    },
    {
        name: 'Quản lí đơn đặt vé',
        url: '/admin/order',
        icon: ViewInArIcon
    },
    {
        name: 'Quản lí xe',
        url: '/admin/bus',
        icon: DirectionsBus
    },
    {
        name: 'Quản lí khuyến mãi',
        url: '/admin/khuyen-mai',
        icon: HandymanIcon
    },
    {
        name: 'Quản lí base',
        url: '/admin/base',
        icon: TransferWithinAStationIcon
    },
    {
        name: 'Quản lí route',
        url: '/admin/route',
        icon: TransferWithinAStationIcon
    }
];

export const MENU_SETTING_SIDEBAR = [
    {
        name: 'Cao cấp',
        url: '/admin/manager'
    },
    {
        name: 'Người dùng',
        url: '/admin/tai-khoan'
    },
];

export const MENU_SYSTEM_SIDEBAR = [
    {
        name: 'Nhóm quyền',
        url: '/admin/nhom-quyen'
    },
    {
        name: 'Quyền',
        url: '/admin/quyen'
    },
];
