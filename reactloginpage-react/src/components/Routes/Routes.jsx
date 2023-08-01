import { Route } from "react-router-dom";
import { Routes as RoutesDom } from "react-router-dom";
import LoginForm from "../LoginForm";
import SignUpForm from "../SignUpForm";

export default function Routes() {
    return <RoutesDom>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />

    </RoutesDom>
}