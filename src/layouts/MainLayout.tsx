import {memo, type PropsWithChildren} from "react";

import Style from './MainLayout.module.scss'

type MainLayoutProps = PropsWithChildren<{
  name: string
}>

function MainLayout(props: MainLayoutProps) {
  console.info(props)
  return (
    <div className={Style.container}>
      <header>
        <h1>应用标题</h1>
      </header>

      <aside className="left-aside">
        <h3>左侧导航</h3>
        <nav>导航项1</nav>
        <nav>导航项2</nav>
      </aside>

      <main>
        <h2>主要内容区</h2>
        <p>这里是页面核心内容</p>
      </main>

      <aside className="right-aside">
        <h3>右侧面板</h3>
        <div>工具项1</div>
        <div>工具项2</div>
      </aside>

      <footer>
        <p>© 2023 版权所有</p>
      </footer>
    </div>
  )
}

export default memo(MainLayout)
