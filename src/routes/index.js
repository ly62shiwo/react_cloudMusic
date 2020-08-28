import React, { lazy, Suspense } from "react";
import { Redirect } from "react-router-dom";
import Home from '../views/home/Home.jsx';

const SuspenseComponent = (Component) => (props) => {
  return (
    <Suspense fallback='null'>
      <Component {...props}></Component>
    </Suspense>
  );
};

// const Home = () => import("../views/home/Home.jsx");
const Discover = lazy(() => import("../views/discover/Discover.jsx")); // 推荐
const Toplist = lazy(() => import("../views/toplist/Toplist.jsx")); // 排行榜
const Playlist = lazy(() => import("../views/playlist/Playlist.jsx")); // 歌单
const Djradio = lazy(() => import("../views/djradio/Djradio.jsx")); // 主播电台
const Artist = lazy(() => import("../views/artist/Artist.jsx")); // 歌手
const Album = lazy(() => import("../views/album/Album.jsx")); // 新碟上架

const AlbumDetails = lazy(() => import("../views/album/albumDetails/albumDetails.jsx")); // 新碟上架

export default [
  {
    path: "/",
    component: Home,
    routes: [
      {
        path: "/",
        exact: true,
        render: () => <Redirect to={"/discover"} />,
      },
      {
        path: "/discover",
        exact: true,
        component: SuspenseComponent(Discover),
      },
      {
        path: "/discover/toplist",
        exact: true,
        component: SuspenseComponent(Toplist),
      },
      {
        path: "/discover/playlist",
        exact: true,
        component: SuspenseComponent(Playlist),
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: SuspenseComponent(Djradio),
      },
      {
        path: "/discover/artist",
        exact: true,
        component: SuspenseComponent(Artist),
      },
      {
        path: "/discover/album",
        exact: true,
        component: SuspenseComponent(Album),
      },
      {
        path: "/album",
        exact: true,
        component: SuspenseComponent(AlbumDetails),
      },
    ],
  },
];
