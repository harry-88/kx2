import React from 'react'
import logo from "../../Assets/Logo1.png";

import style from "./dashboard.module.css";

export default function Dashboard(props) {

    const visitors = [
        {
            media: 'Facebook',
            average: 4.592,
            total: 319,
            search: 46.53
        }, {
            media: 'Facebook',
            average: 4.592,
            total: 319,
            search: 46.53
        }, {
            media: 'Facebook',
            average: 4.592,
            total: 319,
            search: 46.53
        },
    ]
    return (
        <div className={props.pageFullWidth === false ? 'fullWidth' : 'smalWidth'}>
            <h4 className='bg-light shadow-lg  bg-body rounded  p-2 mt-2'>Dashboard</h4>


            <div className='row'>
                <div className='col-lg-3 col-md-6 col-sm-6'>
                    <div className={style.cardParent}>
                        <div className="">
                            <section className={style.cardBox}>
                                <div>
                                    <p>TRAFFIC</p>
                                    <p>350,897</p>
                                </div>
                                <div className={style.imgBOx}>
                                    <img src={logo} width="100%" />
                                </div>
                            </section>
                        </div>
                        <div>
                            <span className={style.cardBottom}>
                                <i className="fa-solid fa-arrow-up"></i>
                                3.48 <span>Since Last Month</span>
                            </span>
                        </div>
                    </div>

                </div>
                <div className='col-lg-3 col-md-6 col-sm-6'>
                    <div className={style.cardParent}>
                        <div className="">
                            <section className={style.cardBox}>
                                <div>
                                    <p>TRAFFIC</p>
                                    <p>350,897</p>
                                </div>
                                <div className={style.imgBOx}>
                                    <img src={logo} width="100%" />
                                </div>
                            </section>
                        </div>
                        <div>
                            <span className={style.cardBottom}>
                                <i className="fa-solid fa-arrow-up"></i>
                                3.48 <span>Since Last Month</span>
                            </span>
                        </div>
                    </div>

                </div>
                <div className='col-lg-3 col-md-6 col-sm-6'>
                    <div className={style.cardParent}>
                        <div className="">
                            <section className={style.cardBox}>
                                <div>
                                    <p>TRAFFIC</p>
                                    <p>350,897</p>
                                </div>
                                <div className={style.imgBOx}>
                                    <img src={logo} width="100%" />
                                </div>
                            </section>
                        </div>
                        <div>
                            <span className={style.cardBottom}>
                                <i className="fa-solid fa-arrow-up"></i>
                                3.48 <span>Since Last Month</span>
                            </span>
                        </div>
                    </div>

                </div>
                <div className='col-lg-3 col-md-6 col-sm-6'>
                    <div className={style.cardParent}>
                        <div className="">
                            <section className={style.cardBox}>
                                <div>
                                    <p>TRAFFIC</p>
                                    <p>350,897</p>
                                </div>
                                <div className={style.imgBOx}>
                                    <img src={logo} width="100%" />
                                </div>
                            </section>
                        </div>
                        <div>
                            <span className={style.cardBottom}>
                                <i className="fa-solid fa-arrow-up"></i>
                                3.48 <span>Since Last Month</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>



            <div className='row border '>
                <div className='col-lg-8 col-sm-12'>

                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th>Social traffic</th>
                                <th colSpan="2"></th>
                                <th>
                                    <button className='btn btn-light btn-outline-warning text-dark'>See All</button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>referel</td>
                                <td>Visitors</td>
                                <td colSpan={2}></td>

                            </tr>
                            {visitors.map((record) => {
                                return <tr>
                                    <td>{record.media}</td>
                                    <td>{record.average}</td>
                                    <td>{record.total}</td>
                                    <td>
                                        <i className="fa-solid fa-arrow-up"></i> {record.search}
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
                <div className='col-lg-4 col-sm-12'>

                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th>Social traffic</th>
                                <th colSpan="2"></th>
                                <th>
                                    <button className='btn btn-light btn-outline-warning text-dark'>See All</button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>referel</td>
                                <td>Visitors</td>
                                <td colSpan={2}></td>

                            </tr>
                            {visitors.map((record) => {
                                return <tr>
                                    <td>{record.media}</td>
                                    <td>{record.average}</td>
                                    <td>{record.total}</td>
                                    <td>
                                        <i className="fa-solid fa-arrow-up"></i> {record.search}
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
