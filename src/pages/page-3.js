import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const ThirdPage = () => (
  <Layout>
    <p>Welcome to page 3</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage
