import {CalendarOutlined, HomeOutlined, SettingOutlined, DollarOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom';
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label:  <Link to={key.toLowerCase()} className='text-decoration-none'>
                    <div className='m-0 fs-5'>{label}</div>
                </Link>,
        type,
    };
}
const SidebarItems = [
    getItem('Dashboard', '', <HomeOutlined />),
    getItem('Purchase Order', '/', <CalendarOutlined />, [
      getItem('Create', 'order/create'),
      getItem('Receive', 'order/receive'),
      getItem('Payment', 'order/payment'),
      getItem('Locate', 'order/locate'),
    ]),
    getItem('Settings', 'settings', <SettingOutlined />),
    getItem('Budget', 'budget', <DollarOutlined />),
];

export default SidebarItems;