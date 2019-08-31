/*
  Theme Name: LINKPOI-CLONE
  Author: justirva
  Author URI: https://justirva-kode.blogspot.com  
  Version: 1.0
  Date: 2018-03-17
  Copyright: This theme is designed to be used only with a valid license of Premium URL Shortener and cannot be resold or reused in any other applications without prior consent from the author. You are however free to customize this theme for your own purpose. Please contact the author, if needed, to clarify.

  This file and formating is used to identify each theme and provide information about the author and version. Keep the formating as clean as possible.
*/
body {
  	background-color:#ddd;font-size:13px;min-height:100%;
  	background-image:url("http://www.kurogaze.net/wp-	content/uploads/2016/02/utahax.png"),url	("http://www.kurogaze.net/wp-	content/uploads/2016/02/eririn.png");
	background-repeat:no-repeat;
	background-position:top left,top right;
}
body iframe[src="about:blank"] {
  display: none;
}
body a {
  color: #000000;
  text-decoration: none;
}
body a:hover {
  color: #33a1ff;
  text-decoration: none;
}
body a#back-to-top {
  display: none;
  position: fixed;
  z-index: 9999;
  bottom: 10px;
  right: 10px;
  background: #000000;
  color: #fff;
  font-weight: 700;
  padding: 2px 8px;
  font-size: 12px;
  text-decoration: none;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
}
body .chart {
  height: 400px;
}
body input,
body button {
  outline: none !important;
  box-shadow: none !important;
  -webkit-appearance: none;
}
body .label-block {
  width: 100%;
}
body .form-horizontal {
  margin-top: 30px;
}
body .form-horizontal label.control-label {
  text-align: left;
  color: #000000;
}
body .ads {
  margin: 10px auto;
}
body .ads small {
  margin: 5px;
  display: block;
}
body .ads.ad_468 {
  max-width: 468px;
}
body .ads.ad_728 {
  max-width: 728px;
}
body .ads.ad_300 {
  max-width: 300px;
}
body .ads img {
  width: 100% !important;
}
body .panel-dark {
  background: #000000;
  border-color: transparent;
  color: #fff !important;
}
body .panel-dark h3,
body .panel-dark p,
body .panel-dark li {
  color: #fff !important;
}
body .panel-dark .panel-heading {
  background: #1f222f;
  color: #fff !important;
  border-bottom-color: transparent;
}
body .panel-dark .panel-heading a {
  color: #fff !important;
  padding: 2px 8px;
  background: #008aff;
  font-size: 12px;
  font-weight: 700;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
}
body .inline-copy {
  position: relative;
  background: #008aff;
  color: #fff !important;
  text-decoration: none;
  font-size: 11px;
  top: -2px;
  margin-left: 2px;
  padding: 0 3px 1px;
  border: 1px solid #0078de;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
}
body .inline-copy:before {
  right: 100%;
  top: 50%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-color: rgba(0, 120, 222, 0);
  border-right-color: #0078de;
  border-width: 4px;
  margin-top: -4px;
}
body .alert span {
  display: block;
}
body #tooltip {
  display: block;
  background: #000000;
  color: #fff;
  padding: 5px 10px;
  max-width: 300px;
  z-index: 100;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
}
body .slideup {
  display: none;
}
body .pace .pace-progress {
  background: #008aff;
  position: fixed;
  z-index: 2000;
  top: 0;
  left: 0;
  height: 2px;
  box-shadow: 0 0 1px #007ce6;
  -webkit-transition: width 1s;
  -moz-transition: width 1s;
  -o-transition: width 1s;
  transition: width 1s;
}
body .pace-inactive {
  display: none;
}
body select.filter {
  dispaly: none;
}
header {
  background: #ffffff;
  min-height: 85px;
}
header .navbar {
  margin-bottom: 0;
}
header .navbar .navbar-toggle {
  background-color: #000000;
  color: #fff;
}
header .navbar .navbar-header {
  margin-top: 15px;
}
header .navbar .navbar-header .navbar-brand {
  font-size: 1.8em;
  font-weight: 700;
}
header .navbar .navbar-header img {
  max-height: 60px;
  margin-top: -20px;
}
header .navbar .nav {
  margin-top: 18px;
}
header .navbar .nav li {
  margin-left: 5px;
}
header .navbar .nav li a {
  font-weight: 700;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
}
header .navbar .nav li a:hover {
  background-color: transparent;
  color: #008aff;
}
header .navbar .nav li a.active {
  background-color: #000000;
  color: #fff;
}
header .navbar .nav li a.active:hover {
  background-color: #1f222f;
}
header.app {
  min-height: 65px;
}
header.app .navbar .navbar-header {
  margin-top: 5px;
}
header.app .navbar .navbar-header .navbar-brand {
  font-size: 1.2em;
}
header.app .navbar .navbar-header .navbar-brand img {
  max-height: 45px;
  margin-top: -10px;
}
header.app .navbar .nav {
  margin-top: 15px;
}
header.app .navbar .nav li {
  margin-right: 10px;
}
header.app .navbar .nav li a {
  padding: 5px 8px;
}
section .feature {
  padding-top: 30px;
  color: #000000;
}
section .feature h2 {
  color: #000000;
}
section .feature h2 small {
  display: block;
  font-size: 15px;
  color: #33384e;
  padding-top: 2px;
  font-weight: 700;
}
section .feature img {
  border-radius: 2px 2px 0 0;
  -moz-border-radius: 2px 2px 0 0;
  -webkit-border-radius: 2px 2px 0 0;
  max-width: 655px;
  width: 100%;
}
section .feature .info {
  padding-bottom: 10px;
}
section .feature p {
  font-size: 16px;
  line-height: 25px;
}
section .featurette {
  padding: 30px 0 20px;
}
section .featurette > div {
  text-align: center;
  color: #666;
}
section .featurette > div .glyphicon {
  background: #000000;
  color: #fff;
  font-size: 2.5em;
  padding: 20px 20px 20px 22px;
  border-radius: 500px;
  -moz-border-radius: 500px;
  -webkit-border-radius: 500px;
}
section .featurette > div h3 {
  margin-top: 10px;
  color: #222;
  font-size: 18px;
}
section .stats {
  padding: 30px 0;
  text-align: center;
}
section .stats h3 {
  font-size: 3em;
}
section .stats strong {
  font-size: 1.1em;
}
section .promo {
  margin: 50px 0;
}
section .promo h1 {
  text-align: center;
}
section .promo h1 .description {
  color: #a4aac3;
  margin-top: 20px;
  display: block;
  font-size: 18px;
}
section.dark {
  min-height: 30px;
  background-color: #000000;
  color: #fff;
}
section.dark h3 {
  color: #fff !important;
}
section.dark .feature {
  color: #fff;
}
section.dark .feature h2 {
  color: #fff;
}
section.dark .feature h2 small {
  display: block;
  color: #52597c;
}
section.dark .breadcrumb {
  background: transparent;
  padding-top: 30px;
}
section.dark .breadcrumb li {
  font-size: 25px;
  color: #fff;
}
section.dark .breadcrumb li a {
  color: #fff;
}
section.light {
  min-height: 30px;
  background-color: #fff;
  color: #000000;
}
section.red {
  min-height: 30px;
  background-color: #e22e40;
  color: #fff;
}
section.red .promo h1 {
  color: #fff;
}
section.red .promo h1 .description {
  color: #ffffff;
}
section.blue {
  min-height: 30px;
  background-color: #008aff;
  color: #fff;
}
section.blue .promo h1 {
  color: #fff;
}
section.blue .promo h1 .description {
  color: #ffffff;
}
section.yellow {
  min-height: 30px;
  background-color: #f5b632;
  color: #fff;
}
section.yellow .promo h1 {
  color: #fff;
}
section.yellow .promo h1 .description {
  color: #ffffff;
}
section.green {
  min-height: 30px;
  background-color: #1bc5a3;
  color: #fff;
}
section.green .promo h1 {
  color: #fff;
}
section.green .promo h1 .description {
  color: #ffffff;
}
section.break {
  border-bottom: 1px solid #eee;
}
section.bg {
  min-height: 30px;
  background-color: transparent;
  background-size: 100% 100% !important;
  background-repeat: no-repeat;
  color: #fff;
}
section.bg h1 {
  text-shadow: 1px 1px 1px #000000;
}
section.bg h1 .description {
  color: #fff !important;
  opacity: 0.8;
}
section .sidebar {
  padding-top: 30px;
  padding-bottom: 30px;
  background: #191b26;
  min-height: 900px;
}
section .sidebar .navbar-brand {
  color: #fff;
}
section .sidebar .nav-sidebar li {
  margin-bottom: 5px;
}
section .sidebar .nav-sidebar a {
  color: #fff;
}
section .sidebar .nav-sidebar a span {
  margin-right: 8px;
}
section .sidebar .nav-sidebar a:hover,
section .sidebar .nav-sidebar a.active {
  background: #008aff;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
}
section .sidebar h3 {
  color: #767ea5;
  font-size: 14px;
  font-weight: 700;
  margin-top: 20px;
  margin-left: 15px;
  margin-bottom: 15px;
}
section .sidebar .side-stats {
  text-align: left;
  margin-top: 5px;
  margin-left: 15px;
  color: #858daf;
}
section .sidebar .side-stats span {
  color: #fff;
  font-weight: 700;
}
section .sidebar .progress {
  height: 10px;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
}
section .content #user-content .alert {
  margin-top: 30px !important;
}
section .content .main-content {
  margin-top: 30px;
}
section .content .main-content .toolbox {
  background: #000000;
  color: #fff;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 2px 2px 0 0;
  -moz-border-radius: 2px 2px 0 0;
  -webkit-border-radius: 2px 2px 0 0;
}
section .content .main-content .toolbox #search input {
  border-left-width: 0;
  padding-left: 0;
}
section .content .main-content #data-container > .btn-group {
  padding: 5px 15px 15px;
}
section .content .main-content #data-container .pagination {
  padding: 15px;
}
section .content .url-list {
  padding: 10px 5px;
  min-height: 93px;
  border-bottom: 1px solid #e6e6e6;
  clear: both;
}
section .content .url-list:last-child {
  border-bottom: 0;
}
section .content .url-list .description {
  padding-left: 15px;
  color: #666;
}
section .content .url-list ul.toggle {
  padding-left: 15px;
}
section .content .url-list ul.toggle li {
  list-style: none;
  display: inline-block;
}
section .content .url-list ul.toggle li > div {
  margin-top: -2px;
}
section .content .url-list ul.toggle li a,
section .content .url-list ul.toggle li span {
  margin: 0;
  font-size: 12px;
  font-weight: 700;
  padding: 8px 8px;
  color: #888;
}
section .content .url-list ul.toggle li .dropdown {
  text-align: left;
  position: absolute;
  z-index: 999;
  background: #008aff;
  min-width: 140px;
  display: none;
  margin-left: 0px;
  padding: 8px;
  border-radius: 3px 0 3px 3px;
  -moz-border-radius: 3px 0 3px 3px;
  -webkit-border-radius: 3px 0 3px 3px;
}
section .content .url-list ul.toggle li .dropdown a {
  display: block;
  color: #fff;
  font-weight: 700;
  padding: 5px;
  transition: all padding 0.1s;
  -webkit-transition: all padding 0.1s;
  -o-transition: all padding 0.1s;
  -ms-transition: all padding 0.1s;
  -moz-transition: all padding 0.1s;
}
section .content .url-list ul.toggle li .dropdown a:hover {
  padding-left: 8px;
}
section .content .url-list ul.toggle li:hover > a {
  color: #008aff;
}
section .content .url-list ul.toggle li:hover > a.drop {
  background: #008aff;
  color: #fff;
  border-radius: 2px 2px 0 0;
  -moz-border-radius: 2px 2px 0 0;
  -webkit-border-radius: 2px 2px 0 0;
}
section .content .url-list ul.toggle li:hover .dropdown {
  display: block;
}
section .content .url-list .url-info .title {
  padding-left: 15px;
  margin-bottom: 10px;
  font-size: 1.2em;
  white-space: -moz-pre-wrap !important;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-all;
  white-space: normal;
}
section .content .url-list .url-info .title img {
  margin-right: 5px;
  vertical-align: top;
}
section .content .url-list .url-info .short-url {
  color: #808080;
  font-size: 12px;
  padding-left: 15px;
  margin: 8px 0;
}
section .content .url-list .url-info .short-url a {
  color: #808080;
}
section .content .url-list .url-info .info {
  color: #808080;
  font-size: 12px;
  padding-left: 25px;
}
section .content .url-list .url-info .info span {
  margin-right: 10px;
}
section .content .url-list .url-info .info .qr {
  padding: 5px 5px 2px 5px;
}
section .content .url-list .url-info .info .qr img {
  width: 16px;
}
section .content .url-list .url-stats {
  text-align: center;
}
section .content .url-list .url-stats strong {
  font-size: 25px;
  display: block;
}
section .content .url-list.fix {
  padding-left: 0;
  padding-right: 0;
}
section .content .url-list.fix .description {
  padding-left: 0;
}
section .content .url-list.fix .url-info .title {
  padding-left: 0;
}
section .content .url-list.fix .url-info .short-url {
  padding-left: 0;
}
section .content.bundles.list-group a.active {
  color: #008aff;
}
section .content.bundles.list-group .list-group-item {
  padding-left: 0;
  padding-right: 0;
}
section .content.bundles.list-group p {
  color: #999;
  font-weight: 700;
  font-size: 12px;
}
section .content.bundles.list-group p a {
  color: #555;
}
section .content.bundles.list-group h4 {
  margin-bottom: 8px;
}
section .content #widgets {
  padding-top: 30px;
}
section .content #widgets ul {
  margin-top: 15px;
  padding: 0;
}
section .content #widgets ul li {
  color: #555;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
  margin-top: 10px;
  font-size: 12px;
  list-style: none;
}
section .content #widgets ul li.new_item {
  background: #eee;
  padding: 5px 5px 12px;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
}
section .content #widgets ul li img {
  margin-right: 5px;
}
section .content #widgets ul li a {
  font-weight: 700;
  color: #008aff;
}
section .content #widgets ul li span {
  color: #999;
  margin-left: 5px;
}
section .content .return-ajax {
  position: relative;
}
section .content .return-ajax .clear-search {
  position: absolute;
  top: -45px;
  right: 10px;
}
section .content .return-ajax .cta,
section .content .return-ajax .alert {
  overflow: hidden;
  margin: 5px 15px;
}
section .content .panel h3 {
  font-size: 15px;
  margin-top: 0;
  color: #999;
  font-weight: 700;
}
section .content .panel h3 a {
  margin-top: -2px;
}
section .content p {
  color: #777;
}
section .content p em {
  font-size: 1.3em;
  font-style: normal;
  font-weight: 700;
}
section .content p.center {
  text-align: center;
  font-weight: 700;
}
section .content .avatar-holder {
  text-align: left !important;
  padding: 0 15px;
}
section .content .avatar-holder .avatar {
  max-width: 48px;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
}
section .content .avatar-holder strong {
  padding-top: 2px;
  margin-left: 15px;
  display: block;
  font-size: 1.2em;
}
section .content .avatar-holder span {
  margin-left: 15px;
}
section .centered {
  margin: 100px auto 30px;
}
section .centered .site_logo {
  margin-top: 50px;
  margin-bottom: 50px;
  max-height: 80px;
  text-align: center;
  background: transparent;
}
section .centered .site_logo a {
  color: #000000;
  font-size: 30px;
}
section .centered .site_logo img {
  background: transparent;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
}
section .centered.form {
  max-width: 450px;
  width: 100%;
}
section .centered.form form.live_form {
  padding: 30px 20px;
  background: #ffffff;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
}
section .centered.form .input-group,
section .centered.form .form-group {
  margin-bottom: 25px;
}
section .centered.form #forgot {
  margin-top: 8px;
  font-size: 13px;
}
section .centered.form span.check-box {
  margin-left: 5px;
}
section .centered.form label {
  width: 100%;
}
section .centered.form label a {
  font-size: 11px;
}
section .centered form.passform {
  width: 100%;
  padding: 20px;
}
section .centered.poll {
  max-width: 550px;
  width: 100%;
}
section #forgot_form {
  display: none;
}
section h3 {
  font-size: 16px;
  font-weight: 700;
  color: #999;
  margin-top: 0;
  margin-bottom: 15px;
}
section .social {
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 1px solid #e0e0e0;
}
section .btn-facebook {
  background: #3b5998;
  color: #fff;
  transition: all 0.5s linear;
  -webkit-transition: all 0.5s linear;
  -o-transition: all 0.5s linear;
  -ms-transition: all 0.5s linear;
  -moz-transition: all 0.5s linear;
}
section .btn-facebook:hover {
  background-color: #4c70ba;
}
section .btn-twitter {
  background: #409dd5;
  color: #fff;
  transition: all 0.5s linear;
  -webkit-transition: all 0.5s linear;
  -o-transition: all 0.5s linear;
  -ms-transition: all 0.5s linear;
  -moz-transition: all 0.5s linear;
}
section .btn-twitter:hover {
  background-color: #6ab2de;
}
section .btn-google {
  background: #d34836;
  color: #fff;
  transition: all 0.5s linear;
  -webkit-transition: all 0.5s linear;
  -o-transition: all 0.5s linear;
  -ms-transition: all 0.5s linear;
  -moz-transition: all 0.5s linear;
}
section .btn-google:hover {
  background-color: #dc6e60;
}
section .is404 {
  text-align: center;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
}
section .is404 h1 {
  font-size: 250px!important;
  line-height: 250px!important;
}
section .is404 h2 {
  text-transform: uppercase;
  font-size: 68px;
}
section .is404 h3 {
  text-transform: uppercase;
  font-size: 34px;
  color: #000000;
}
section .splash {
  margin-top: 30px;
}
section .splash .thumb img {
  width: 100%;
  border: 1px solid #000;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
}
section .splash h2 {
  color: #555;
  font-size: 22px;
}
section .splash p.description {
  color: #666;
}
section .splash p.disclaimer {
  margin-top: 20px;
  color: #aaa;
  font-size: 12px;
}
section .media {
  padding-top: 30px;
}
section .media .embed iframe:not(.vine-embed),
section .media embed,
section .media object {
  width: 100% !important;
  height: 450px !important;
}
section .media .embed iframe.vine-embed {
  margin: 0 auto;
}
section .media .info {
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 5px;
  padding-bottom: 5px;
  padding-top: 15px;
}
section .media .info h3 {
  font-size: 16px;
  color: #000000;
}
section .media .info .text-right {
  font-size: 13px;
}
section .media .info .text-right span {
  display: block;
  padding-right: 10px;
  font-size: 22px;
  font-weight: 700;
}
section .stats-page {
  margin-top: 30px;
}
section .stats-page .thumb img {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
}
section .stats-page .url-info h2 {
  color: #52597c;
  font-size: 20px;
}
section .stats-page .url-info h2 span {
  margin-top: 10px;
  display: block;
  font-size: 13px;
}
section .stats-page .url-stats {
  max-height: 80px;
  padding-top: 20px;
  text-align: center;
  font-size: 26px;
  font-weight: 700;
}
section .stats-page .url-stats span {
  font-size: 13px;
  display: block;
}
.addmargin {
  margin-top: 30px;
}
.analytics {
  padding: 30px 0;
}
.analytics #country-list {
  margin: 0;
  padding: 0 20px;
}
.analytics #country-list li {
  margin-bottom: 10px;
}
.analytics #referrer {
  margin: 0;
  padding: 0px;
}
.analytics #referrer li {
  list-style: none;
  margin-bottom: 10px;
}
.custom-splash {
  margin-top: 30px;
  overflow: hidden;
}
.custom-splash .banner img {
  width: 100%;
}
.custom-splash .custom-message .c-avatar {
  float: left;
  width: 100px;
  margin-right: 10px;
  margin-left: 3px;
}
.custom-splash .custom-message .c-message {
  padding: 10px;
  float: left;
  height: 100px;
  line-height: 25px;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
}
.custom-splash .custom-message .c-message h2 {
  margin-top: 2px;
  margin-bottom: 5px;
  font-size: 18px;
}
.custom-splash .custom-message .c-countdown {
  float: right;
  font-size: 12px;
  text-align: center;
  padding: 25px;
}
.custom-splash .custom-message .c-countdown span {
  font-size: 30px;
  display: block;
}
footer {
  padding: 20px 0 10px;
}
footer .languages {
  position: relative;
  clear: both;
  display: inline-block;
  text-align: left;
}
footer .languages .langs {
  width: 310px;
  display: none;
  padding: 5px;
  background: #1f222f;
  position: absolute;
  bottom: 15px;
  right: 0;
  border-radius: 2px 2px 0 2px;
  -moz-border-radius: 2px 2px 0 2px;
  -webkit-border-radius: 2px 2px 0 2px;
}
footer .languages .langs a {
  width: 90px;
  color: #fff !important;
  display: block;
  float: left;
}
footer a {
  margin-left: 5px;
  padding: 2px 5px;
}
footer a:hover,
footer a.active {
  background-color: #000000;
  color: #fff;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
}
#main-form {
  background: #ffffff;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
}
#main-form select {
  color: #000;
  width: 100%;
  margin-top: 10px;
}
#main-form .main-form {
  padding: 20px;
  border-bottom: 1px solid #e6e6e6;
}
#main-form .main-form .input-group-addon {
  border-color: #e6e6e6;
  font-size: 2.0em;
  color: #000000;
  border-width: 0;
  padding: 0 10px;
}
#main-form .main-form .main-input {
  padding: 0 10px;
  border-width: 0;
  font-size: 2.3em;
  background: #000000;
  height: 43px;
  color: #fff;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  transition: all 0.2s linear;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  -ms-transition: all 0.2s linear;
  -moz-transition: all 0.2s linear;
}
#main-form .main-form .main-input.error,
#main-form .main-form .main-input.error:focus {
  color: #e22e40;
}
#main-form .main-form .main-input:focus {
  color: #fff;
}
#main-form .main-form .main-input:hover {
  color: #008aff;
}
#main-form .main-form .main-textarea {
  background-color: #000000;
  color: #fff;
  font-weight: 700;
  font-size: 1.3em;
  padding: 10px;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
}
#main-form .main-form .main-button {
  padding: 5px;
  font-size: 18px;
  height: 43px;
  background-color: #e64d6e;
}
#main-form .main-form .main-button#copyurl {
  margin-top: 0 !important;
  background-color: #008aff;
  display: none;
}
#main-form .main-options {
  padding: 10px 20px;
}
#main-form .main-options .chosen-container {
  margin-left: 10px;
  max-width: 150px;
  float: right;
}
#main-form .main-options .chosen-container .chosen-single {
  background: #008aff;
  color: #fff;
  border: 0;
}
#main-form .main-advanced {
  padding: 20px;
  background: #1f222f;
  color: #fff;
}
#main-form .main-advanced h3 {
  font-size: 1.1em;
  font-weight: 700;
  color: #fff;
  margin-top: 0;
}
#main-form .main-advanced p {
  font-size: 0.9em;
  color: #949bb9;
}
#main-form .main-advanced input {
  color: #1f222f;
  font-weight: 700;
}
#main-form .main-advanced #geo {
  padding-top: 20px;
}
#main-form .main-advanced #geo select {
  max-width: 200px;
}
#main-form .main-advanced #geo .chosen-single {
  border-radius: 0 2px 2px 0;
  -moz-border-radius: 0 2px 2px 0;
  -webkit-border-radius: 0 2px 2px 0;
}
#main-form .main-advanced #geo .geo-input .row {
  margin-bottom: 10px;
}
#main-form .main-advanced #geo a {
  font-size: 11px !important;
}
.share-this {
  margin-top: 30px;
  overflow: hidden;
}
.share-this .qr {
  float: right;
}
.share-this .qr img {
  max-width: 80px;
}
ul.form_opt {
  list-style: none;
  padding: 0;
  clear: both;
  overflow: hidden;
  margin-bottom: 25px;
  min-height: 60px;
}
ul.form_opt li {
  float: right;
  margin-top: 15px;
}
ul.form_opt li.text-label {
  width: 60%;
  float: left;
  color: #000000;
  font-weight: 700;
  text-align: left;
  margin-top: 0;
  font-size: 13px;
}
ul.form_opt li.text-label small {
  display: block;
  margin-top: 5px;
  color: #777;
  font-weight: 400;
}
ul.form_opt li a {
  background: #000000;
  color: #fff;
  padding: 5px 10px;
  font-weight: 700;
  border: 0;
  transition: all 0.5s linear;
  -webkit-transition: all 0.5s linear;
  -o-transition: all 0.5s linear;
  -ms-transition: all 0.5s linear;
  -moz-transition: all 0.5s linear;
}
ul.form_opt li a.round {
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
}
ul.form_opt li a.first {
  border-radius: 2px 0 0 2px;
  -moz-border-radius: 2px 0 0 2px;
  -webkit-border-radius: 2px 0 0 2px;
}
ul.form_opt li a.last {
  border-radius: 0 2px 2px 0;
  -moz-border-radius: 0 2px 2px 0;
  -webkit-border-radius: 0 2px 2px 0;
}
ul.form_opt li a:hover {
  background: #33a1ff;
}
ul.form_opt li a.current {
  background: #008aff;
}
#modal-shadow {
  background: #1f222f;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 200;
  display: none;
  clear: both;
}
#modal-alert {
  width: 90%;
  max-width: 500px;
  min-height: 150px;
  position: fixed;
  z-index: 999;
  display: none;
  background: #fff;
  text-align: left;
  padding: 10px;
  clear: both;
  color: #222;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
}
#modal-alert form {
  overflow: visible !important;
}
#modal-alert .title {
  margin: -10px -10px 10px -10px;
  padding: 10px;
  display: block;
  background: #000000;
  color: #fff;
  font-weight: 700;
  border-radius: 2px 2px 0 0;
  -moz-border-radius: 2px 2px 0 0;
  -webkit-border-radius: 2px 2px 0 0;
}
#modal-alert > p {
  margin: 10px 0;
  line-height: 25px;
}
.flat .plan {
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  list-style: none;
  padding: 0 0 20px;
  margin: 50px 0 15px;
  border: 0;
  background: #008aff;
  text-align: center;
  transition: all 0.5s linear;
  -webkit-transition: all 0.5s linear;
  -o-transition: all 0.5s linear;
  -ms-transition: all 0.5s linear;
  -moz-transition: all 0.5s linear;
}
.flat .plan:hover {
  background: #33a1ff;
}
.flat .plan li {
  padding: 10px 15px;
  color: #fff;
  font-weight: 700;
  transition: all 0.5s linear;
  -webkit-transition: all 0.5s linear;
  -o-transition: all 0.5s linear;
  -ms-transition: all 0.5s linear;
  -moz-transition: all 0.5s linear;
}
.flat .plan li.plan-price {
  border-top: 0;
}
.flat .plan li.plan-name {
  border-radius: 2px 2px 0 0;
  -moz-border-radius: 2px 2px 0 0;
  -webkit-border-radius: 2px 2px 0 0;
  padding: 15px;
  font-size: 18px;
  line-height: 18px;
  color: #fff;
  background: #010101;
  margin-bottom: 30px;
  border-top: 0;
}
.flat .plan li > strong {
  color: #010101;
}
.flat .plan li.plan-action {
  margin-top: 10px;
  border-top: 0;
}
.flat .plan.featured li.plan-name {
  background: #000000;
}
.flat .plan.featured:hover li.plan-name {
  background: #0b0c11;
}
.flat .plan.featured li.plan-price {
  font-size: 20px;
  padding: 15px 0;
  background: #000000;
  margin: 0 10% 20px 10%;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
}
.flat .plan.featured li.plan-price strong {
  font-size: 35px;
  color: #fff;
  display: block;
}
#recaptcha_widget_div {
  background: #fff;
  margin-bottom: 10px;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
}
#recaptcha_widget_div .recaptchatable {
  border: 0px solid transparent !important;
}
#recaptcha_widget_div .recaptchatable .recaptcha_image_cell {
  background: transparent;
}
#recaptcha_widget_div .recaptchatable .recaptcha_image_cell center img {
  width: 250px;
  height: 54px;
}
#recaptcha_widget_div .recaptchatable #recaptcha_response_field {
  background: #000000;
  color: #fff;
  padding: 5px 8px;
}
#recaptcha_logo,
#recaptcha_privacy {
  display: none;
}
@media screen and (max-width: 990px) {
  #main-form .main-form .col-md-10 {
    margin-bottom: 10px;
  }
  .sidebar {
    min-height: 150px !important;
  }
  ul.form_opt li {
    float: left;
  }
  ul.form_opt li.text-label {
    display: block;
    float: none;
    width: 100%;
  }
  ul.form_opt li.text-label small {
    display: none;
  }
  ul.form_opt li a.first {
    border-radius: 0 2px 2px 0;
    -moz-border-radius: 0 2px 2px 0;
    -webkit-border-radius: 0 2px 2px 0;
  }
  ul.form_opt li a.last {
    border-radius: 2px 0 0 2px;
    -moz-border-radius: 2px 0 0 2px;
    -webkit-border-radius: 2px 0 0 2px;
  }
  .main-advanced .col-md-4 {
    padding-bottom: 10px;
  }
}
@media screen and (max-width: 450px) {
  header .navbar-brand {
    font-size: 1.2em !important;
  }
  body .is404 h1 {
    font-size: 12em !important;
    line-height: 1em!important;
  }
  #main-form .main-form .main-input {
    font-size: 1.5em;
  }
  #main-form .main-form .input-group-addon {
    font-size: 1.5em;
  }
  footer .text-right {
    text-align: left !important;
    margin-top: 10px;
  }
  footer .text-right a:first-child {
    margin-left: 0;
  }
  #recaptcha_table > tbody > tr:nth-child(1) > td:nth-child(2) {
    display: none;
  }
  .recaptcha_input_area {
    width: 77% !important;
  }
  .recaptcha_input_area input {
    width: 100% !important;
  }
  #recaptcha_image {
    width: 104% !important;
  }
  #recaptcha_image img {
    width: 100% !important;
  }
}

