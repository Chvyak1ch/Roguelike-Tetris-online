import History from "./Pages/History";
import GamePage from "./Pages/GamePage";
import EnterUser from "./Pages/EnterUser";
import PageFAQ from "./Pages/PageFAQ";
import PageProfile from "./Pages/PageProfile";
import PageRegistration from "./Pages/PageRegistration";
import ProjectInfo from "./Pages/ProjectInfo";
import AppTetris from "./gamePlay/AppTetris";




export const authRoutes = [
    {path: '/tetris', element: <AppTetris/>, exact: true},
    {path: '/history', element: <History/>, exact: true},
    {path: '/game', element: <GamePage/>, exact: true},
    {path: '/enterUser', element: <EnterUser />, exact: true},
    {path: '/pageFAQ', element: <PageFAQ />, exact: true},
    {path: '/youProfile', element: <PageProfile />, exact: true},
    {path: '/registration', element: <PageRegistration />, exact: true},
    {path: '/projectInfo', element: <ProjectInfo />, exact: true},
]

export const publicRoutes = [
    {path: '/tetris', element: <AppTetris/>, exact: true},
    {path: '/game', element: <GamePage/>, exact: true},
    {path: '/enterUser', element: <EnterUser />, exact: true},
    {path: '/pageFAQ', element: <PageFAQ />, exact: true},
    {path: '/youProfile', element: <PageProfile />, exact: true},
    {path: '/registration', element: <PageRegistration />, exact: true},
    {path: '/projectInfo', element: <ProjectInfo />, exact: true},
]