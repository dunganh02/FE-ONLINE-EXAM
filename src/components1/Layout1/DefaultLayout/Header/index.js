import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import logo from '../../../../logo.svg';

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('header')}>
            <div className={cx('wrapper')}>
                <div className={cx('logo')}>
                    <img src={logo} alt="Hình ảnh" />
                    <h1>2</h1>
                </div>

                <div className={cx('navigation')}>
                    <a href="#">Trang Chủ</a>
                    <a href="#">Đơn Hàng</a>
                    <a href="#">Chi Tiết</a>
                </div>

                <div className={cx('user-section')}>
                    <a href="#">Đăng Nhập</a>
                    <a href="#">Tài Khoản</a>
                </div>
            </div>
        </header>
    );
}

export default Header;
