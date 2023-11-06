import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import React from 'react';

import styles from './RSideBar.module.scss';
import Sidebar from '~/components/layout/sidebar';
import Pagination from '~/components/Pagination';
import Start from '~/components/Layout/components/Start';

const cx = classNames.bind(styles);

function RSideBar({ title, value, obj, error, loading, setPage, page }) {
    const status = (value = 1 ? obj.followed : obj.readingHistory)
    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <div className={cx('tabs-content-wrap')}>
                            <h2>{title}</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th className={cx('thead-name')}>Tên sách</th>
                                        <th className={cx('thead-post-on')}>Thời gian cập nhật</th>
                                    </tr>
                                </thead>
                                {loading && <h4>Loading............</h4>}
                                {error && <h4>Error!!!</h4>}
                                {!loading && !error && !status && (
                                    <tbody>
                                        <span>Bạn chưa từng đọc bất kỳ cuốn sách nào</span>
                                    </tbody>
                                )}
                                {!loading && !error && (
                                    <tbody>
                                        {status?.map((value) => (
                                            <tr key={value._id}>
                                                <td>
                                                    <div className={cx('tbody-book-name')}>
                                                        <div className={cx('item-thumb')}>
                                                            <Link>
                                                                <img src={value.photo} alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className={cx('item-info')}>
                                                            <span>{value.bookName}</span>
                                                            <p>Tác giả: {value.author}</p>
                                                            <p>Ngôn Ngữ: Tiếng Anh</p>
                                                        <Start value={value.avgRating} />
                                                            <Link to={`/books/${value.bookId}`}>
                                                                <button type="button" className="btn btn-primary">
                                                                    Đọc tiếp
                                                                </button>
                                                            </Link>
                                                            <button className="btn btn-danger">Xóa</button>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('post-on')}>
                                                        <h4>Cập nhật vào:</h4>
                                                        {value.createAt}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                )}
                            </table>
                            <Pagination
                                page={page}
                                limit={obj.limit ? obj.limit : 0}
                                total={obj.total ? obj.total : 0}
                                setPage={(page) => setPage(page)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default RSideBar;
