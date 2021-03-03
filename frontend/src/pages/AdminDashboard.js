import React from 'react'
import 'react-bootstrap'
import './dashboard.css'
const AdminDashboard = () => {
    return (
        <div>
            <div id="wrapper">
                <nav classNamename="navbar navbar-light navbar-expand-md border rounded align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0" style={{backgroundColor: "rgb(43,122,120)"}}>
                <div className="container-fluid d-flex flex-column p-0">
                    <a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                        <div className="sidebar-brand-icon rotate-n-15"><i className="fas fa-notes-medical"></i></div>
                        <div className="sidebar-brand-text mx-3"><span>Medicom</span></div>
                    </a>
                    <hr className="sidebar-divider my-0" />
                    <ul className="nav navbar-nav text-light" id="accordionSidebar">
                        <li className="nav-item" role="presentation"><a className="nav-link" href="Products.html"><i className="fas fa-tachometer-alt"></i><span>Dashboard</span></a></li>
                        <li className="nav-item" role="presentation"><a className="nav-link" href="profile.html"><i className="fas fa-user"></i><span>Profile</span></a></li>
                        <li className="nav-item" role="presentation"></li>
                        <li className="nav-item" role="presentation"></li>
                        <li className="nav-item" role="presentation"><a className="nav-link" href="Add%20User.html"><i className="fas fa-user-circle"></i><span>Add User</span></a></li>
                    </ul>
                    <div className="text-center d-none d-md-inline"><button className="btn rounded-circle border-0" id="sidebarToggle" type="button"></button></div>
                </div>
            </nav>
            <div className="d-flex flex-column" id="content-wrapper">
            <div id="content">
                <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
                    <div className="container-fluid"><button className="btn btn-link d-md-none rounded-circle mr-3" id="sidebarToggleTop" type="button"><i className="fas fa-bars"></i></button>
                        <form className="form-inline d-none d-sm-inline-block mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                            <div className="input-group"><input className="bg-light border rounded form-control border-0 small" type="text" placeholder="Search for ..." />
                                <div className="input-group-append"><button className="btn btn-primary border rounded py-0" type="button" style={{backgroundColor: "rgb(43,122,120)"}}><i className="fas fa-search"></i></button></div>
                            </div>
                        </form>
                        <ul className="nav navbar-nav flex-nowrap ml-auto">
                            <li className="nav-item dropdown d-sm-none no-arrow"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#"><i className="fas fa-search"></i></a>
                                <div className="dropdown-menu dropdown-menu-right p-3 animated--grow-in" role="menu" aria-labelledby="searchDropdown">
                                    <form className="form-inline mr-auto navbar-search w-100">
                                        <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..." />
                                            <div className="input-group-append"><button className="btn btn-primary py-0" type="button"><i className="fas fa-search"></i></button></div>
                                        </div>
                                    </form>
                                </div>
                            </li>
                            <li className="nav-item dropdown no-arrow mx-1" role="presentation">
                                <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#"></a>
                                    <div className="dropdown-menu dropdown-menu-right dropdown-list dropdown-menu-right animated--grow-in" role="menu">
                                        <h6 className="dropdown-header">alerts center</h6>
                                        <a className="d-flex align-items-center dropdown-item" href="#">
                                            <div className="mr-3">
                                                <div className="bg-primary icon-circle"><i className="fas fa-file-alt text-white"></i></div>
                                            </div>
                                            <div><span className="small text-gray-500">December 12, 2019</span>
                                                <p>A new monthly report is ready to download!</p>
                                            </div>
                                        </a>
                                        <a className="d-flex align-items-center dropdown-item" href="#">
                                            <div className="mr-3">
                                                <div className="bg-success icon-circle"><i className="fas fa-donate text-white"></i></div>
                                            </div>
                                            <div><span className="small text-gray-500">December 7, 2019</span>
                                                <p>$290.29 has been deposited into your account!</p>
                                            </div>
                                        </a>
                                        <a className="d-flex align-items-center dropdown-item" href="#">
                                            <div className="mr-3">
                                                <div className="bg-warning icon-circle"><i className="fas fa-exclamation-triangle text-white"></i></div>
                                            </div>
                                            <div><span className="small text-gray-500">December 2, 2019</span>
                                                <p>Spending Alert: We've noticed unusually high spending for your account.</p>
                                            </div>
                                        </a><a className="text-center dropdown-item small text-gray-500" href="#">Show All Alerts</a></div>
                                </div>
                            </li>
                            <li className="nav-item dropdown no-arrow mx-1" role="presentation">
                                <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#"></a>
                                    <div className="dropdown-menu dropdown-menu-right dropdown-list dropdown-menu-right animated--grow-in" role="menu">
                                        <h6 className="dropdown-header">alerts center</h6>
                                        <a className="d-flex align-items-center dropdown-item" href="#">
                                            <div className="dropdown-list-image mr-3"><img className="rounded-circle" src="assets/img/avatars/avatar4.jpeg" />
                                                <div className="bg-success status-indicator"></div>
                                            </div>
                                            <div className="font-weight-bold">
                                                <div className="text-truncate"><span>Hi there! I am wondering if you can help me with a problem I've been having.</span></div>
                                                <p className="small text-gray-500 mb-0">Emily Fowler - 58m</p>
                                            </div>
                                        </a>
                                        <a className="d-flex align-items-center dropdown-item" href="#">
                                            <div className="dropdown-list-image mr-3"><img className="rounded-circle" src="assets/img/avatars/avatar2.jpeg" />
                                                <div className="status-indicator"></div>
                                            </div>
                                            <div className="font-weight-bold">
                                                <div className="text-truncate"><span>I have the photos that you ordered last month!</span></div>
                                                <p className="small text-gray-500 mb-0">Jae Chun - 1d</p>
                                            </div>
                                        </a>
                                        <a className="d-flex align-items-center dropdown-item" href="#">
                                            <div className="dropdown-list-image mr-3"><img className="rounded-circle" src="assets/img/avatars/avatar3.jpeg"/>
                                                <div className="bg-warning status-indicator"></div>
                                            </div>
                                            <div className="font-weight-bold">
                                                <div className="text-truncate"><span>Last month's report looks great, I am very happy with the progress so far, keep up the good work!</span></div>
                                                <p className="small text-gray-500 mb-0">Morgan Alvarez - 2d</p>
                                            </div>
                                        </a>
                                        <a className="d-flex align-items-center dropdown-item" href="#">
                                            <div className="dropdown-list-image mr-3"><img className="rounded-circle" src="assets/img/avatars/avatar5.jpeg" />
                                                <div className="bg-success status-indicator"></div>
                                            </div>
                                            <div className="font-weight-bold">
                                                <div className="text-truncate"><span>Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</span></div>
                                                <p className="small text-gray-500 mb-0">Chicken the Dog · 2w</p>
                                            </div>
                                        </a><a className="text-center dropdown-item small text-gray-500" href="#">Show All Alerts</a></div>
                                </div>
                                <div className="shadow dropdown-list dropdown-menu dropdown-menu-right" aria-labelledby="alertsDropdown"></div>
                            </li>
                            <div className="d-none d-sm-block topbar-divider"></div>
                            <li className="nav-item dropdown no-arrow" role="presentation">
                                <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#"><span className="d-none d-lg-inline mr-2 text-gray-600 small">Admin</span><img className="border rounded-circle img-profile" src="assets/img/hooded_woman_by_stocky_pix_db84g31.jpg" /></a>
                                    <div
                                        className="dropdown-menu shadow dropdown-menu-right animated--grow-in" role="menu"><a className="dropdown-item" role="presentation" href="#"><i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Profile</a><a className="dropdown-item" role="presentation" href="#"><i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Settings</a>
                                        <a
                                            className="dropdown-item" role="presentation" href="#"><i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Activity log</a>
                                            <div className="dropdown-divider"></div><a className="dropdown-item" role="presentation" href="#"><i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Logout</a></div>
                    </div>
                    </li>
                    </ul>
            </div>
            </nav>
            <div className="container-fluid">
                <div className="d-sm-flex justify-content-between align-items-center mb-4">
                    <h3 className="text-dark mb-0">Dashboard</h3><a className="btn btn-primary btn-sm d-none d-sm-inline-block" role="button" href="#"><i className="fas fa-download fa-sm text-white-50"></i>&nbsp;Generate Report</a></div>
                <div className="row">
                    <div className="col-md-6 col-xl-3 mb-4">
                        <div className="card shadow border-left-primary py-2">
                            <div className="card-body">
                                <div className="row align-items-center no-gutters">
                                    <div className="col mr-2">
                                        <div className="text-uppercase text-primary font-weight-bold text-xs mb-1"><span>Earnings (monthly)</span></div>
                                        <div className="text-dark font-weight-bold h5 mb-0"><span>$40,000</span></div>
                                    </div>
                                    <div className="col-auto"><i className="fas fa-calendar fa-2x text-gray-300"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3 mb-4">
                        <div className="card shadow border-left-warning py-2">
                            <div className="card-body">
                                <div className="row align-items-center no-gutters">
                                    <div className="col mr-2">
                                        <div className="text-uppercase text-warning font-weight-bold text-xs mb-1"><span>Orders</span></div>
                                        <div className="text-dark font-weight-bold h5 mb-0"><span>18</span></div>
                                    </div>

                                    <div className="col-auto"><i className="fas fa-box fa-2x text-gray-300"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-7 col-xl-8">
                        <div className="card shadow mb-4" style={{width: "921px"}}>
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h6 className="text-primary font-weight-bold m-0">Products</h6>
                                <div className="dropdown no-arrow"><button className="btn btn-link btn-sm dropdown-toggle" data-toggle="dropdown" aria-expanded="false" type="button"><i className="fas fa-ellipsis-v text-gray-400"></i></button>
                                    <div className="dropdown-menu shadow dropdown-menu-right animated--fade-in"
                                        role="menu">
                                        <p className="text-center dropdown-header">dropdown header:</p><a className="dropdown-item" role="presentation" href="#">&nbsp;Action</a><a className="dropdown-item" role="presentation" href="#">&nbsp;Another action</a>
                                        <div className="dropdown-divider"></div><a className="dropdown-item" role="presentation" href="#">&nbsp;Something else here</a></div>
                                </div>
                            </div>
                            <div className="card-body border rounded" style={{height: "123px"}}><input className="border rounded form-control-sm" type="text" name="name" placeholder="Name" style={{width: "138px"}} /><input className="border rounded form-control-sm" type="text" name="name" placeholder="Price" style={{width: "75px",margin: 3,marginTop: 4,marginLeft: "5px",padding: "4px"}} />
                                <input
                                    className="border rounded form-control-sm" type="text" name="name" placeholder="Description" style={{width: "138px",marginLeft: "5px"}} />
                                    <input className="border rounded form-control-sm" type="text" name="name" placeholder="Count" style={{width: "94px",margin: 3,marginTop: 4,marginLeft: "5px",padding: "4px"}}/><input className="border rounded form-control-sm" type="text"
                                        name="name" placeholder="Formulation" style={{width: "138px",marginLeft: "5px"}} />
                                        <input className="border rounded form-control-sm" type="text" name="name" placeholder="Brand" style={{width: "138px",marginLeft: "5px"}} />
                                        <input type="file"
                                        style={{width: "208px",margin: "5px"}} /><button className="btn btn-primary" type="submit" style={{marginTop: "-24px",marginLeft: "823px",padding: "8px",paddingRight: "15px",paddingLeft: "15px"}}>Add</button>
                                        </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card shadow">
                            <div className="card-header py-3">
                                <p className="text-primary m-0 font-weight-bold">Products List</p>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6 text-nowrap">
                                        <div id="dataTable_length" className="dataTables_length" aria-controls="dataTable"><label>Show&nbsp;<select className="form-control form-control-sm custom-select custom-select-sm"><option value="10" selected="">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select>&nbsp;</label></div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="text-md-right dataTables_filter" id="dataTable_filter"><label><input type="search" className="form-control form-control-sm" aria-controls="dataTable" placeholder="Search" /></label></div>
                                    </div>
                                </div>
                                <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                                    <table className="table my-0" id="dataTable">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Description</th>
                                                <th>Brand</th>
                                                <th>Count</th>
                                                <th>EXPDATE</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr></tr>
                                            <tr></tr>
                                            <tr></tr>
                                            <tr>
                                                <td><img className="rounded-circle mr-2" width="30" height="30" src="assets/img/avatars/avatar5.jpeg" />Arinac</td>
                                                <td>Description</td>
                                                <td>Abbot</td>
                                                <td>22</td>
                                                <td>2012/03/29<br /></td>
                                                <td>$433,060</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr></tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 align-self-center">
                                        <p id="dataTable_info" className="dataTables_info" role="status" aria-live="polite">Showing 1 to 10 of 27</p>
                                    </div>
                                    <div className="col-md-6">
                                        <nav className="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
                                            <ul className="pagination">
                                                <li className="page-item disabled"><a className="page-link" href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
                                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                <li className="page-item"><a className="page-link" href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </div>
        </div>
        </div>
    )
}
export default AdminDashboard
