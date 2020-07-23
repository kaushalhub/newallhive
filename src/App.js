import React from 'react';


function App() {
  return (
    <div className="wrapper">
        <header className="main-header">
          {/* Logo */}
          <a href="http://mlmdemo.asia/software/binary_software/backend/dashboard" className="logo">
            {/* mini logo for sidebar mini 50x50 pixels */}
            <span className="logo-mini"><b>S A</b></span>
            {/* logo for regular state and mobile devices */}
            <span className="logo-lg"><b>ALL HIVE SOLUTION</b> </span>
          </a>
          {/* Header Navbar: style can be found in header.less */}
          <nav className="navbar navbar-static-top">
            {/* Sidebar toggle button*/}
            <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
              <span className="sr-only">Toggle navigation</span>
            </a>
            <div className="navbar-custom-menu" style={{float: 'left'}}>
              <ul className="nav navbar-nav">
                <li className="dropdown user user-menu">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    Welcome ALL HIVE SOLUTION
                  </a>
                </li>
              </ul>
            </div>
            <div className="navbar-custom-menu">
              <ul className="nav navbar-nav">
                {/* User Account: style can be found in dropdown.less */}
                <li className="dropdown notifications-menu ">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                    <i className="fa fa-gears (alias)" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      {/* inner menu: contains the actual data */}
                      <ul className="menu">
                        <li><a href="#"><i className="fa fa-male text-aqua" />View New Joining</a></li>
                        <li><a href="#" className="edit"><i className="fa fa-pencil text-yellow" /> Transfer Fund</a></li>
                        <li><a href="#" className="password"> <i className="fa fa-spinner text-green" />Change Password</a></li>
                        <li><a href="#" className="edit"><i className="fa fa-users text-red" />Block/Unblock User</a></li>
                        <li><a className="compose" href="#"><i className="fa  fa-edit (alias) text-aqua" />Compose</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="dropdown user user-menu">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <span className="hidden-xs">admin</span>
                  </a>
                  <ul className="dropdown-menu">
                    {/* User image */}
                    <li className="user-header">
                      <img className="profile-user-img img-responsive img-circle" src="http://mlmdemo.asia/software/binary_software/assets/img/avatar5.png" alt="User profile picture" />
                      <p>
                        ALOK KUMAR BHOI                                <small>admin</small>
                      </p>
                    </li>
                    {/* Menu Footer*/}
                    <li className="user-footer">
                      <div className="pull-left">
                        <a href="http://mlmdemo.asia/software/binary_software/backend/user/profile" className="btn btn-default btn-flat">Profile</a>
                      </div>
                      <div className="pull-right">
                        <a href="http://mlmdemo.asia/software/binary_software/backend/logout" className="btn btn-default btn-flat">Sign out</a>
                      </div>
                    </li>
                  </ul>
                </li></ul>
            </div>
          </nav>
        </header>    {/* Left side column. contains the logo and sidebar */}
        <aside className="main-sidebar">
          {/* sidebar: style can be found in sidebar.less */}
          <section className="sidebar">
            {/* search form */}
            {/* <form action="#" method="get" class="sidebar-form">
            <div class="input-group">
                <input type="text" name="q" class="form-control" placeholder="Search...">
                <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
            </div>
        </form>*/}
            {/* /.search form */}
            {/* sidebar menu: : style can be found in sidebar.less */}
            <ul stest className="sidebar-menu">
              <li className="header" id="header_nav">MAIN NAVIGATION</li>
              <li className="treeview active"><a href="#" className="active"><i className="fa fa-home" /> <span>DASHBOARD</span></a></li>
              <li className="treeview"><a href="#"><i className="fa  fa-user-secret" /> <span>Registration Associate</span></a></li>
              {/* associate profile */}
              <li className="treeview"><a href="javascript:void(0);"><i className="fa fa-sitemap" /> <span>Associate Profile</span> <span className="pull-right-container"><i className="fa fa-angle-left pull-right" /></span></a>
                <ul sad className="treeview-menu">
                  <li><a href="#"><i className="fa fa-circle-o" /><span>My Profile</span></a></li>
                  <li><a href="#"><i className="fa fa-circle-o" /><span>Manage Profile</span></a></li>
                  <li><a href="#"><i className="fa fa-circle-o" /><span>Payment Option</span></a></li>
                  <li><a href="#"><i className="fa fa-circle-o" /><span>Change Password</span></a></li>
                  <li><a href="#"><i className="fa fa-circle-o" /><span>Change Transaction Password</span></a></li>
                  <li><a href="#"><i className="fa fa-circle-o" /><span>Upload KYC</span></a></li>
                  {/*  */}
                </ul>
              </li>
              {/* market place */}
              <li className="treeview"><a href="javascript:void(0);"><i className="fa fa-flag" /> <span>MARKETPLACE PACKAGES</span> <span className="pull-right-container"><i className="fa fa-angle-left pull-right" /></span></a>
                <ul sad className="treeview-menu">
                  <li><a href="#"><i className="fa fa-circle-o" />CRYPTO MARKET MEMBERSHIP</a></li>
                  <li><a href="#"><i className="fa fa-circle-o" />AHS SUPPORT CODE</a></li>
                  <li><a href="#"><i className="fa fa-circle-o" />AHS MARKETPLACE CODE</a></li>
                  <li><a href="#"><i className="fa fa-circle-o" />AHS COIN</a></li>
                  <li><a href="#"><i className="fa fa-circle-o" />CRYPTO CONVERSION</a></li>
                  <li><a href="#"><i className="fa fa-circle-o" />WORLDWIDE COMMUNITY</a></li>
                  <li><a href="#"><i className="fa fa-circle-o" />AHS SUPPORT COMMUNITY</a></li>
                  <li><a href="#"><i className="fa fa-circle-o" />AHS MARKETPLACE PRODUCTS</a></li>
                  <li><a href="#"><i className="fa fa-circle-o" />FRANCHISE</a></li>
                  <li><a href="#"><i className="fa fa-circle-o" />OFICAL TEAM</a></li>
                  <li><a href="#"><i className="fa fa-circle-o" />MY DESIGNATION</a></li>
                  <li><a href="#"><i className="fa fa-circle-o" />INVESTMENT PACKAGE</a></li>
                  <li><a href="#"><i className="fa fa-circle-o" />DONATION</a></li>
                  <li><a href="#"><i className="fa fa-circle-o" />ESCROW ACCOUNT</a></li>
                  <li><a href="#"><i className="fa fa-circle-o" />POINT ACCOUNT</a></li>
                  <li><a href="#"><i className="fa fa-circle-o" />PROMOTION CODES</a></li>
                  <li><a href="#"><i className="fa fa-circle-o" />OFFER</a></li>
                  <li><a href="#"><i className="fa fa-circle-o" />TRAINING/SEMINAR</a></li>
                </ul>
              </li>    
              {/* community support */}
              <li className="treeview"><a href="javascript:void(0);"><i className="fa fa-envelope" /> <span>Support Commitment</span> <span className="pull-right-container"><i className="fa fa-angle-left pull-right" /></span></a>
                <ul sad className="treeview-menu">
                  <li><a href="#"><i className="fa fa-circle-o" />Give Support Request by</a></li>
                  <li><a href="#"><i className="fa fa-circle-o" />Give Support Request</a></li>
                  <li><a href="#"><i className="fa fa-circle-o" />Give Support Request Status</a></li>
                  <li><a href="#"><i className="fa fa-circle-o" />Give Support link reference</a></li>
                  <li><a href="#"><i className="fa fa-circle-o" />Get Support by</a></li>
                  <li><a href="#"><i className="fa fa-circle-o" />GET SUPPORT link reference</a></li>
                  <li><a href="#"><i className="fa fa-circle-o" />Given Support</a></li>
                  <li><a href="#"><i className="fa fa-circle-o" />Received Support</a></li>
                </ul>
              </li>    
              {/* wallet */}
              <li className="treeview"><a href="javascript:void(0);"><i className="fa fa-flag" /><span>Wallet &amp; Report</span> <span className="pull-right-container"><i className="fa fa-angle-left pull-right" /></span></a>
                <ul sad className="treeview-menu">
                  <li className="treeview"><a href="javascript:void(0);"><i className="fa fa-circle-o" /><span>Currency Topup</span> <span className="pull-right-container"><i className="fa fa-angle-left pull-right" /></span></a>
                    <ul sad className="treeview-menu">
                      <li><a href="#"><i className="fa fa-circle-o" />COMMITMENT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PURCHASE ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ESCROW ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />CONVERT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ACCOUNT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />POINT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />REEDEM ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />TRANSFER ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PROMOTION ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />OFFER ACCOUNT</a></li>
                    </ul>
                  </li>    
                  <li className="treeview"><a href="javascript:void(0);"><i className="fa fa-circle-o" /><span>OTHER COIN TOPUP</span> <span className="pull-right-container"><i className="fa fa-angle-left pull-right" /></span></a>
                    <ul sad className="treeview-menu">
                      <li><a href="#"><i className="fa fa-circle-o" />COMMITMENT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PURCHASE ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />EARNING ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ESCROW ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />CONVERT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ACCOUNT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />POINT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />REEDEM ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />TRANSFER ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PROMOTION ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />OFFER ACCOUNT</a></li>
                    </ul>
                  </li>    
                  <li className="treeview"><a href="javascript:void(0);"><i className="fa fa-circle-o" /><span>CRYPTO CONVERSION</span> <span className="pull-right-container"><i className="fa fa-angle-left pull-right" /></span></a>
                    <ul sad className="treeview-menu">
                      <li><a href="#"><i className="fa fa-circle-o" />COMMITMENT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PURCHASE ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />EARNING ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ESCROW ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />CONVERT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ACCOUNT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />POINT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />REEDEM ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />TRANSFER ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PROMOTION ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />OFFER ACCOUNT</a></li>
                    </ul>
                  </li>  
                  <li className="treeview"><a href="javascript:void(0);"><i className="fa fa-circle-o" /><span>AHS SUPPORT CODE</span> <span className="pull-right-container"><i className="fa fa-angle-left pull-right" /></span></a>
                    <ul sad className="treeview-menu">
                      <li><a href="#"><i className="fa fa-circle-o" />COMMITMENT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PURCHASE ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />EARNING ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ESCROW ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />CONVERT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ACCOUNT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />POINT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />REEDEM ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />TRANSFER ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PROMOTION ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />OFFER ACCOUNT</a></li>
                    </ul>
                  </li>  
                  <li className="treeview"><a href="javascript:void(0);"><i className="fa fa-circle-o" /><span>AHS MARKETPLACE CODE</span> <span className="pull-right-container"><i className="fa fa-angle-left pull-right" /></span></a>
                    <ul sad className="treeview-menu">
                      <li><a href="#"><i className="fa fa-circle-o" />COMMITMENT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PURCHASE ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />EARNING ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ESCROW ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />CONVERT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ACCOUNT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />POINT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />REEDEM ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />TRANSFER ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PROMOTION ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />OFFER ACCOUNT</a></li>
                    </ul>
                  </li>  
                  <li className="treeview"><a href="javascript:void(0);"><i className="fa fa-circle-o" /><span>AHS COIN</span> <span className="pull-right-container"><i className="fa fa-angle-left pull-right" /></span></a>
                    <ul sad className="treeview-menu">
                      <li><a href="#"><i className="fa fa-circle-o" />COMMITMENT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PURCHASE ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />EARNING ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ESCROW ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />CONVERT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ACCOUNT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />POINT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />REEDEM ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />TRANSFER ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PROMOTION ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />OFFER ACCOUNT</a></li>
                    </ul>
                  </li>  
                  <li className="treeview"><a href="javascript:void(0);"><i className="fa fa-circle-o" /><span>REFERRAL ASSOCIATE</span> <span className="pull-right-container"><i className="fa fa-angle-left pull-right" /></span></a>
                    <ul sad className="treeview-menu">
                      <li><a href="#"><i className="fa fa-circle-o" />COMMITMENT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PURCHASE ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />EARNING ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ESCROW ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />CONVERT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ACCOUNT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />POINT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />REEDEM ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />TRANSFER ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PROMOTION ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />OFFER ACCOUNT</a></li>
                    </ul>
                  </li>
                  <li className="treeview"><a href="javascript:void(0);"><i className="fa fa-circle-o" /><span>Worldwide Network</span> <span className="pull-right-container"><i className="fa fa-angle-left pull-right" /></span></a>
                    <ul sad className="treeview-menu">
                      <li><a href="#"><i className="fa fa-circle-o" />COMMITMENT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PURCHASE ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />EARNING ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ESCROW ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />CONVERT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ACCOUNT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />POINT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />REEDEM ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />TRANSFER ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PROMOTION ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />OFFER ACCOUNT</a></li>
                    </ul>
                  </li>
                  <li className="treeview"><a href="javascript:void(0);"><i className="fa fa-circle-o" /><span>SUPPORT CODE GROWTH</span> <span className="pull-right-container"><i className="fa fa-angle-left pull-right" /></span></a>
                    <ul sad className="treeview-menu">
                      <li><a href="#"><i className="fa fa-circle-o" />COMMITMENT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PURCHASE ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />EARNING ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ESCROW ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />CONVERT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ACCOUNT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />POINT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />REEDEM ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />TRANSFER ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PROMOTION ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />OFFER ACCOUNT</a></li>
                    </ul>
                  </li>
                  <li className="treeview"><a href="javascript:void(0);"><i className="fa fa-circle-o" /><span>MY TEAM WORK.</span> <span className="pull-right-container"><i className="fa fa-angle-left pull-right" /></span></a>
                    <ul sad className="treeview-menu">
                      <li><a href="#"><i className="fa fa-circle-o" />COMMITMENT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PURCHASE ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />EARNING ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ESCROW ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />CONVERT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ACCOUNT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />POINT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />REEDEM ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />TRANSFER ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PROMOTION ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />OFFER ACCOUNT</a></li>
                    </ul>
                  </li>
                  <li className="treeview"><a href="javascript:void(0);"><i className="fa fa-circle-o" /><span>SINGLE LEG TEAM WORK</span> <span className="pull-right-container"><i className="fa fa-angle-left pull-right" /></span></a>
                    <ul sad className="treeview-menu">
                      <li><a href="#"><i className="fa fa-circle-o" />COMMITMENT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PURCHASE ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />EARNING ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ESCROW ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />CONVERT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ACCOUNT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />POINT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />REEDEM ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />TRANSFER ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PROMOTION ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />OFFER ACCOUNT</a></li>
                    </ul>
                  </li>
                  <li className="treeview"><a href="javascript:void(0);"><i className="fa fa-circle-o" /><span>LEVEL TEAM WORK</span> <span className="pull-right-container"><i className="fa fa-angle-left pull-right" /></span></a>
                    <ul sad className="treeview-menu">
                      <li><a href="#"><i className="fa fa-circle-o" />COMMITMENT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PURCHASE ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />EARNING ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ESCROW ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />CONVERT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ACCOUNT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />POINT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />REEDEM ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />TRANSFER ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PROMOTION ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />OFFER ACCOUNT</a></li>
                    </ul>
                  </li>
                  <li className="treeview"><a href="javascript:void(0);"><i className="fa fa-circle-o" /><span>OFFICIAL TEAM WORK</span> <span className="pull-right-container"><i className="fa fa-angle-left pull-right" /></span></a>
                    <ul sad className="treeview-menu">
                      <li><a href="#"><i className="fa fa-circle-o" />COMMITMENT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PURCHASE ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />EARNING ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ESCROW ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />CONVERT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ACCOUNT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />POINT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />REEDEM ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />TRANSFER ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PROMOTION ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />OFFER ACCOUNT</a></li>
                    </ul>
                  </li>
                  <li className="treeview"><a href="javascript:void(0);"><i className="fa fa-circle-o" /><span>INVESTMENT AND TEAMWORK</span> <span className="pull-right-container"><i className="fa fa-angle-left pull-right" /></span></a>
                    <ul sad className="treeview-menu">
                      <li><a href="#"><i className="fa fa-circle-o" />COMMITMENT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PURCHASE ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />EARNING ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ESCROW ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />CONVERT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ACCOUNT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />POINT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />REEDEM ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />TRANSFER ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PROMOTION ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />OFFER ACCOUNT</a></li>
                    </ul>
                  </li>
                  <li className="treeview"><a href="javascript:void(0);"><i className="fa fa-circle-o" /><span>FRANCHISE AND TEAMWORK</span> <span className="pull-right-container"><i className="fa fa-angle-left pull-right" /></span></a>
                    <ul sad className="treeview-menu">
                      <li><a href="#"><i className="fa fa-circle-o" />COMMITMENT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PURCHASE ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />EARNING ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ESCROW ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />CONVERT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ACCOUNT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />POINT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />REEDEM ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />TRANSFER ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PROMOTION ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />OFFER ACCOUNT</a></li>
                    </ul>
                  </li>
                  <li className="treeview"><a href="javascript:void(0);"><i className="fa fa-circle-o" /><span>MY DESIGNATION</span> <span className="pull-right-container"><i className="fa fa-angle-left pull-right" /></span></a>
                    <ul sad className="treeview-menu">
                      <li><a href="#"><i className="fa fa-circle-o" />COMMITMENT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PURCHASE ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />EARNING ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ESCROW ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />CONVERT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ACCOUNT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />POINT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />REEDEM ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />TRANSFER ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PROMOTION ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />OFFER ACCOUNT</a></li>
                    </ul>
                  </li>
                  <li className="treeview"><a href="javascript:void(0);"><i className="fa fa-circle-o" /><span>MY DESIGNATION REWARDS</span> <span className="pull-right-container"><i className="fa fa-angle-left pull-right" /></span></a>
                    <ul sad className="treeview-menu">
                      <li><a href="#"><i className="fa fa-circle-o" />COMMITMENT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PURCHASE ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />EARNING ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ESCROW ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />CONVERT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ACCOUNT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />POINT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />REEDEM ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />TRANSFER ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PROMOTION ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />OFFER ACCOUNT</a></li>
                    </ul>
                  </li>
                  <li className="treeview"><a href="javascript:void(0);"><i className="fa fa-circle-o" /><span>MY OFFICIAL REWARDS</span> <span className="pull-right-container"><i className="fa fa-angle-left pull-right" /></span></a>
                    <ul sad className="treeview-menu">
                      <li><a href="#"><i className="fa fa-circle-o" />COMMITMENT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PURCHASE ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />EARNING ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ESCROW ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />CONVERT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ACCOUNT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />POINT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />REEDEM ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />TRANSFER ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PROMOTION ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />OFFER ACCOUNT</a></li>
                    </ul>
                  </li>
                  <li className="treeview"><a href="javascript:void(0);"><i className="fa fa-circle-o" /><span>ESCROW ACCOUNT</span> <span className="pull-right-container"><i className="fa fa-angle-left pull-right" /></span></a>
                    <ul sad className="treeview-menu">
                      <li><a href="#"><i className="fa fa-circle-o" />COMMITMENT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PURCHASE ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />EARNING ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ESCROW ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />CONVERT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ACCOUNT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />POINT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />REEDEM ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />TRANSFER ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PROMOTION ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />OFFER ACCOUNT</a></li>
                    </ul>
                  </li>
                  <li className="treeview"><a href="javascript:void(0);"><i className="fa fa-circle-o" /><span>POINT ACCOUNT</span> <span className="pull-right-container"><i className="fa fa-angle-left pull-right" /></span></a>
                    <ul sad className="treeview-menu">
                      <li><a href="#"><i className="fa fa-circle-o" />COMMITMENT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PURCHASE ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />EARNING ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ESCROW ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />CONVERT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ACCOUNT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />POINT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />REEDEM ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />TRANSFER ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PROMOTION ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />OFFER ACCOUNT</a></li>
                    </ul>
                  </li>
                  <li className="treeview"><a href="javascript:void(0);"><i className="fa fa-circle-o" /><span>PROMOTION ACCOUNT</span> <span className="pull-right-container"><i className="fa fa-angle-left pull-right" /></span></a>
                    <ul sad className="treeview-menu">
                      <li><a href="#"><i className="fa fa-circle-o" />COMMITMENT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PURCHASE ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />EARNING ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ESCROW ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />CONVERT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ACCOUNT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />POINT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />REEDEM ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />TRANSFER ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PROMOTION ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />OFFER ACCOUNT</a></li>
                    </ul>
                  </li>
                  <li className="treeview"><a href="javascript:void(0);"><i className="fa fa-circle-o" /><span>OFFER ACCOUNT</span> <span className="pull-right-container"><i className="fa fa-angle-left pull-right" /></span></a>
                    <ul sad className="treeview-menu">
                      <li><a href="#"><i className="fa fa-circle-o" />COMMITMENT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PURCHASE ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />EARNING ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ESCROW ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />CONVERT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ACCOUNT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />POINT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />REEDEM ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />TRANSFER ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PROMOTION ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />OFFER ACCOUNT</a></li>
                    </ul>
                  </li>
                  <li className="treeview"><a href="javascript:void(0);"><i className="fa fa-circle-o" /><span>MULTIPLE PURPOSES</span> <span className="pull-right-container"><i className="fa fa-angle-left pull-right" /></span></a>
                    <ul sad className="treeview-menu">
                      <li><a href="#"><i className="fa fa-circle-o" />COMMITMENT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PURCHASE ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />EARNING ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ESCROW ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />CONVERT ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />ACCOUNT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />POINT WALLET</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />REEDEM ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />TRANSFER ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />PROMOTION ACCOUNT</a></li>
                      <li><a href="#"><i className="fa fa-circle-o" />OFFER ACCOUNT</a></li>
                    </ul>
                  </li>
                </ul>
              </li>  
              {/* tema support */}
              <li className="treeview"><a href="javascript:void(0);"><i className="fa fa-envelope" /> <span>My Team &amp; Report</span> <span className="pull-right-container"><i className="fa fa-angle-left pull-right" /></span></a>
                <ul sad className="treeview-menu">
                  <li><a href="#"><i className="fa fa-circle-o" />My Referral Associates</a></li>
                  <li><a href="#"><i className="fa fa-circle-o" />Worldwide community network</a></li>
                  <li><a href="#"><i className="fa fa-circle-o" />AHS SUPPORT CODE COMMUNITY</a></li>
                  <li><a href="#"><i className="fa fa-circle-o" />My Team</a></li>
                  <li><a href="#"><i className="fa fa-circle-o" />My TEAM Genealogy</a></li>
                  <li><a href="#"><i className="fa fa-circle-o" />MY Working Team</a></li>
                  <li><a href="#"><i className="fa fa-circle-o" />MY ESCROW AND TEAM</a></li>
                  <li><a href="#"><i className="fa fa-circle-o" />MY INVESTMENT AND TEAM</a></li>
                  <li><a href="#"><i className="fa fa-circle-o" />MY SINGLE LEG TEAM</a></li>
                  <li><a href="#"><i className="fa fa-circle-o" />MY LEVEL TEAM</a></li>
                  <li><a href="#"><i className="fa fa-circle-o" />MY TEAM REPURCHASE VOLUME</a></li>
                  <li><a href="#"><i className="fa fa-circle-o" />PROMOTION TEAM</a></li>
                  <li><a href="#"><i className="fa fa-circle-o" />OFFICAL TEAM</a></li>
                  <li><a href="#"><i className="fa fa-circle-o" />FRANCHISE TEAMWORK</a></li>
                  <li><a href="#"><i className="fa fa-circle-o" />MY DESIGNATION</a></li>
                </ul>
              </li> 
              {/* earning */}
              <li className="treeview"><a href="javascript:void(0);"><i className="fa fa-envelope" /> <span>Earning and reports</span> <span className="pull-right-container"><i className="fa fa-angle-left pull-right" /></span></a>
                <ul sad className="treeview-menu">
                  <li><a href="#"><i className="fa fa-circle-o" />AHS SUPPORT CODE</a></li>
                  <li><a href="#"> <i className="fa fa-circle-o" />  AHS MARKETPLACE COD </a></li>
                  <li><a href="#"> <i className="fa fa-circle-o" />  AHS COIN</a></li>
                  <li><a href="#"> <i className="fa fa-circle-o" />  OTHER COI </a></li>
                  <li><a href="#"> <i className="fa fa-circle-o" />  AHS CRYPTO /CONVERSIO </a></li>
                  <li><a href="#"> <i className="fa fa-circle-o" />  My Referral Associate </a></li>
                  <li><a href="#"> <i className="fa fa-circle-o" />  Worldwide community Networ </a></li>
                  <li><a href="#"> <i className="fa fa-circle-o" />   AHS SUPPORT CODE COMMUNITY GROWTH</a></li>
                  <li><a href="#"> <i className="fa fa-circle-o" />   MY TEAM WORK</a></li>
                  <li><a href="#"> <i className="fa fa-circle-o" />   MY SINGLE LEG TEAM INACTIVE </a></li>
                  <li><a href="#"> <i className="fa fa-circle-o" />   MY LEVEL TEAM </a></li>
                  <li><a href="#"> <i className="fa fa-circle-o" />   MY OFFICAL AND TEA </a></li>
                  <li><a href="#"> <i className="fa fa-circle-o" />   MY INVESTMENT AND TEAMWOR </a></li>
                  <li><a href="#"> <i className="fa fa-circle-o" />   FRANCHISE AND TEAMWOR </a></li>
                  <li><a href="#"> <i className="fa fa-circle-o" />   MY DESIGNATIO </a></li>
                  <li><a href="#"> <i className="fa fa-circle-o" />   MY DESIGNATION REWAR </a></li>
                  <li><a href="#"> <i className="fa fa-circle-o" />   MY OFFICIAL REWARDS </a></li>
                  <li><a href="#"> <i className="fa fa-circle-o" />   ESCROW ACCOUN </a></li>
                  <li><a href="#"> <i className="fa fa-circle-o" />   POINT ACCOUNT</a></li>
                  <li><a href="#"> <i className="fa fa-circle-o" />   PROMOTION CODE </a></li>
                  <li><a href="#"> <i className="fa fa-circle-o" />   OFFER </a></li>  
                </ul>
              </li> 
              {/* withdral and report */}
              <li className="treeview"><a href="javascript:void(0);"><i className="fa fa-envelope" /> <span>withdral and Report</span> <span className="pull-right-container"><i className="fa fa-angle-left pull-right" /></span></a>
                <ul sad className="treeview-menu">
                  <li><a href="#"><i className="fa fa-circle-o" />    Withdrawal Request</a></li>
                  <li><a href="#"> <i className="fa fa-circle-o" />  Withdrawal Request Status </a></li>
                  <li><a href="#"> <i className="fa fa-circle-o" />  Withdrawal reports </a></li>
                </ul>
              </li> 
              {/* Promotional/offer Code */}
              <li className="treeview"><a href="javascript:void(0);"><i className="fa fa-envelope" /> <span>Promotional/offer Code</span> <span className="pull-right-container"><i className="fa fa-angle-left pull-right" /></span></a>
                <ul sad className="treeview-menu">
                  <li><a href="#"> <i className="fa fa-circle-o" /> Generate Code</a></li>
                  <li><a href="#"> <i className="fa fa-circle-o" /> Available Code</a></li>
                  <li><a href="#"> <i className="fa fa-circle-o" /> Used Code</a></li>
                  <li><a href="#"> <i className="fa fa-circle-o" /> Transfer Code</a></li>
                  <li><a href="#"> <i className="fa fa-circle-o" /> COMPLETE CODE</a></li>
                  <li><a href="#"> <i className="fa fa-circle-o" /> Transferred Code Report</a></li>
                  <li><a href="#"> <i className="fa fa-circle-o" /> Received Code Report</a></li>
                </ul>
              </li> 
              {/* News Update */}
              <li className="treeview"><a href="javascript:void(0);"><i className="fa fa-envelope" /> <span>News Update</span> <span className="pull-right-container"><i className="fa fa-angle-left pull-right" /></span></a>
                <ul sad className="treeview-menu">
                  <li><a href="#"> <i className="fa fa-circle-o" /> News</a></li>
                  <li><a href="#"> <i className="fa fa-circle-o" /> Update</a></li>
                  <li><a href="#"> <i className="fa fa-circle-o" /> Announcement</a></li>
                </ul>
              </li> 
              {/* Events and Ticket */}
              <li className="treeview"><a href="javascript:void(0);"><i className="fa fa-envelope" /> <span>Events and Ticket</span> <span className="pull-right-container"><i className="fa fa-angle-left pull-right" /></span></a>
                <ul sad className="treeview-menu">
                  <li><a href="#"> <i className="fa fa-circle-o" /> Upcoming Event</a></li>
                  <li><a href="#"> <i className="fa fa-circle-o" /> Past event</a></li>
                  <li><a href="#"> <i className="fa fa-circle-o" /> Purchase ticket</a></li>
                  <li><a href="#"> <i className="fa fa-circle-o" /> My ticket</a></li>
                  <li><a href="#"> <i className="fa fa-circle-o" /> My Team Ticket</a></li>
                </ul>
              </li> 
              {/* Events and Ticket */}
              <li className="treeview"><a href="javascript:void(0);"><i className="fa fa-envelope" /> <span>Events and Ticket</span> <span className="pull-right-container"><i className="fa fa-angle-left pull-right" /></span></a>
                <ul sad className="treeview-menu">
                  <li> <a href="#"> <i className="fa fa-circle-o" />Social Media Banner </a> </li>
                  <li> <a href="#"> <i className="fa fa-circle-o" />Associate Link </a> </li>
                  <li> <a href="#"> <i className="fa fa-circle-o" />Promotion Link </a> </li>
                  <li> <a href="#"> <i className="fa fa-circle-o" />Video Link </a> </li>
                  <li> <a href="#"> <i className="fa fa-circle-o" />Email Template </a> </li>
                  <li> <a href="#"> <i className="fa fa-circle-o" />WhatsApp Template </a> </li>
                  <li> <a href="#"> <i className="fa fa-circle-o" />Training Catalogue </a> </li>
                  <li> <a href="#"> <i className="fa fa-circle-o" />Training Presentation </a> </li>
                  <li> <a href="#"> <i className="fa fa-circle-o" />Video presentation </a> </li>
                </ul>
              </li> 
            </ul></section>
          {/* /.sidebar */}
        </aside>
        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
          {/*\\\\\\\ contentpanel start\\\\\\*/}
          {/* Content Header (Page header) */}
          <section className="content-header">
            <h1> Dashboard
              <small>Control panel</small>
            </h1>
            <ol className="breadcrumb">
              <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
              <li className="active">Dashboard</li>
            </ol>
          </section>
          {/* Main content */}
          <section className="content">
            <div className="row">
              {/*
     <div class="col-md-2 col-sm-2 col-xs-12">
                            </div>
*/}
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="info-box bg-aqua a-link">
                  <span className="info-box-icon"><i className="fa fa-briefcase" /></span>
                  <a href="#">
                    <div className="info-box-content" style={{color: '#fff'}}>
                      <span style={{fontSize: '20px'}}>Account</span> <br /> Information
                    </div>{/* /.info-box-content */}
                  </a>
                </div>{/* /.info-box */}
              </div>{/* /.col */}
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="info-box info-box bg-red a-link">
                  <span className="info-box-icon"><i className="fa fa-rocket" /></span>
                  <a href="#">
                    <div className="info-box-content" style={{color: '#fff'}}>
                      <span style={{fontSize: '20px'}}> Fund
                      </span> <br /> Transfers
                    </div>{/* /.info-box-content */}
                  </a>
                </div>{/* /.info-box */}
              </div>{/* /.col */}
              {/* fix for small devices only */}
              <div className="clearfix visible-sm-block" />
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="info-box bg-green a-link">
                  <span className="info-box-icon "><i className="fa fa-external-link" /></span>
                  <a href="#">
                    <div className="info-box-content" style={{color: '#fff'}}>
                      <span style={{fontSize: '20px'}}>Issue</span> <br /> Payouts
                    </div>{/* /.info-box-content */}
                  </a>
                </div>{/* /.info-box */}
              </div>{/* /.col */}
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="info-box bg-yellow a-link">
                  <span className="info-box-icon "><i className="fa fa-envelope-o" /></span>
                  <a href="#">
                    <div className="info-box-content" style={{color: '#fff'}}>
                      <span style={{fontSize: '20px'}}>New</span> <br /> Messages
                    </div>{/* /.info-box-content */}
                  </a>
                </div>{/* /.info-box */}
              </div>{/* /.col */}
              {/*     <div class="col-md-2 col-sm-2 col-xs-12">
              </div>

            <div class="col-md-2 col-sm-2 col-xs-12">
                          </div>
           <div class="col-md-2 col-sm-2 col-xs-12">
                          </div>

     <div class="col-md-4 col-sm-4 col-xs-12">
              </div>*/}
            </div>
            <div className="row">
              {/* Left col */}
              <div className="col-md-8">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="box box-primary">
                      <div className="box-header ui-sortable-handle" style={{cursor: 'move'}}><i className="ion ion-clipboard" />
                        <h3 className="box-title">News</h3>
                      </div>
                      {/* /.box-header */}
                      <div className="box-body">
                        <ul id="ticker_01" className="ticker" style={{maxHeight: '224px', minHeight: '224px', overflow: 'hidden', listStyle: 'none', padding: '0px 10px'}}>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>{/* /.row */}
                <div className="row">
                  <div className="col-md-6">
                    <div className="small-box bg-aqua">
                      <div className="inner">
                        <h3> Epin</h3>
                        <p style={{fontSize: '25px'}}> Create </p>
                      </div>
                      <div className="icon">
                        <i className="fa  fa-gavel" />
                      </div>
                      <a href="#" className="small-box-footer">
                        Click Here <i className="fa fa-arrow-circle-right" />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/* small box */}
                    <div className="small-box bg-green">
                      <div className="inner">
                        <h3>View</h3>
                        <p style={{fontSize: '25px'}}> All Account</p>
                      </div>
                      <div className="icon">
                        <i className="fa fa-building-o" />
                      </div>
                      <a href="#" className="small-box-footer">
                        Click Here <i className="fa fa-arrow-circle-right" />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/* small box */}
                    <div className="small-box bg-yellow">
                      <div className="inner">
                        <h3> Edit
                        </h3>
                        <p style={{fontSize: '25px'}}>News</p>
                      </div>
                      <div className="icon">
                        <i className="fa fa-edit (alias)" />
                      </div>
                      <a href="#" className="small-box-footer">
                        Click Here <i className="fa fa-arrow-circle-right" />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/* small box */}
                    <div className="small-box bg-red">
                      <div className="inner">
                        <h3>Tree</h3>
                        <p style={{fontSize: '25px'}}>View</p>
                      </div>
                      <div className="icon">
                        <i className="fa fa-sitemap" />
                      </div>
                      <a href="#" className="small-box-footer">
                        Click Here <i className="fa fa-arrow-circle-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>{/* /.col */}
              <div className="col-md-4">
                {/* Profile Image */}
                {/* /.box */}
                <div className="alert alert-info alert-dismissible">
                  <h4>Thursday , 23/Jul/2020</h4>
                </div>
                {/*<div class="bg-light-blue-active color-palette"><span class="text-center"></span></div>*/}
                {/* PRODUCT LIST */}
              </div></div></section>
        </div>
      </div>
  );
}

export default App;
