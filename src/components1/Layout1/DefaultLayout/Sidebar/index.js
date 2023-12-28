import classNames from 'classnames/bind';
import styles from './Side.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <aside>
                <nav>
                    <a href="#">Mục 1</a>
                    <a href="#">Mục 2</a>
                    <a href="#">Mục 3</a>
                    <a href="#">Mục 4</a>
                    <a href="#">Mục 5</a>
                </nav>
            </aside>
        </div>
    );
}

export default Sidebar;
