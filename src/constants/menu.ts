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
        name: 'Hồ sơ',
        url: '/admin/ho-so',
        icon: FileCopyIcon
    },
    {
        name: 'Tài sản',
        url: '/admin/tai-san',
        icon: ViewInArIcon
    },
    {
        name: 'Sửa chữa',
        url: '/admin/sua-chua',
        icon: HandymanIcon
    },
    {
        name: 'Điều chuyển',
        url: '/admin/dieu-chuyen',
        icon: TransferWithinAStationIcon
    },
    {
        name: 'Tài chính',
        url: '/admin/tai-chinh',
        icon: CurrencyExchangeIcon
    }
];

export const MENU_SETTING_SIDEBAR = [
    {
        name: 'Nhóm hồ sơ',
        url: '/admin/nhom-ho-so'
    },
    {
        name: 'Loại hồ sơ',
        url: '/admin/loai-ho-so'
    },
    {
        name: 'Nhóm tài sản',
        url: '/admin/nhom-tai-san'
    },
    {
        name: 'Loại tài sản',
        url: '/admin/loai-tai-san'
    },
    {
        name: 'Cơ sở',
        url: '/admin/co-so'
    },
    {
        name: 'Đơn vị',
        url: '/admin/don-vi'
    },
    {
        name: 'Nhân viên',
        url: '/admin/nhan-vien'
    }
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
