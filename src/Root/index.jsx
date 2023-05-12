import {Fragment} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../pages/Home";
import NotFound from "../pages/NotFound";
const Root = () => {
    return (
      <Fragment>
        <Routes>
          <Route path="/home" element={<Header />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Fragment>
    );
}

export default Root;