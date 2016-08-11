import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import LayoutDetail from "../Components/DetailBlog/Layout/LayoutDetail";
import Layout from "../Components/Home/Layout/Layout";
const content = document.getElementById('content');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}></Route>
    <Route path="layoutDetail/:id" name="layoutDetail" component={LayoutDetail}></Route>
  </Router>,
content);