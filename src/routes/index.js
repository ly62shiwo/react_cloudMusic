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
const Error404 = lazy(() => import("../views/error/404/index.jsx")) // 404

const Discover = lazy(() => import("../views/discover/Discover.jsx")); // 推荐
const Toplist = lazy(() => import("../views/toplist/Toplist.jsx")); // 排行榜
const Playlist = lazy(() => import("../views/playlist/Playlist.jsx")); // 歌单
const Djradio = lazy(() => import("../views/djradio/Djradio.jsx")); // 主播电台
const Artist = lazy(() => import("../views/artist/Artist.jsx")); // 歌手
const Album = lazy(() => import("../views/album/Album.jsx")); // 新碟上架

const AlbumDetails = lazy(() => import("../views/album/albumDetails/albumDetails.jsx")); // 新碟详情页
const ArtistDetails = lazy(() => import("../views/artist/artistDetails/artistDetails.jsx")); // 歌手详情页
const PlaylistDetails = lazy(() => import("../views/playlist/playlistDetails/playlistDetails.jsx")); // 歌单详情页
const UserHome = lazy(() => import("../views/home/user/userHome.jsx")); // 用户歌单

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
      {
        path: "/artist",
        exact: true,
        component: SuspenseComponent(ArtistDetails),
      },
      {
        path: "/playlist",
        exact: true,
        component: SuspenseComponent(PlaylistDetails),
      },
      {
        path: "/user/home",
        exact: true,
        component: SuspenseComponent(UserHome),
      },

      {
        path: "",
        component: SuspenseComponent(Error404),
      },
    ],
  },
];
