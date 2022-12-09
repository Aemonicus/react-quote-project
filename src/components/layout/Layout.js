import { Fragment } from "react"
import styles from "./Layout.module.css"
import { MainNavigation } from "./MainNavigation"

export const Layout = ({ children }) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={styles.main}>{children}</main>
    </Fragment>
  )
}
