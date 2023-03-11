import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import HandymanIcon from '@mui/icons-material/Handyman';
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
        name: 'Quản lí xe',
        url: '/admin/bus',
        icon: FileCopyIcon
    },
    {
        name: 'Quản lí đơn đặt vé',
        url: '/admin/ticket',
        icon: ViewInArIcon
    },
    {
        name: 'Quản lí khuyến mãi',
        url: '/admin/discount',
        icon: HandymanIcon
    },
    {
        name: 'Quản lí base',
        url: '/admin/base',
        icon: TransferWithinAStationIcon
    },
    {
        name: 'Nhân viên',
        url: '/admin/staff',
        icon: CurrencyExchangeIcon
    }
];

export const MENU_SETTING_SIDEBAR = [
    {
        name: 'Nhóm hồ sơ',
        url: '/admin/staff'
    },
];

export const MENU_SYSTEM_SIDEBAR = [
    {
        name: 'Người dùng',
        url: '/admin/nguoi-dung'
    },
    {
        name: 'Nhóm quyền',
        url: '/admin/nhom-quyen'
    },
    {
        name: 'Quyền',
        url: '/admin/quyen'
    },
];
