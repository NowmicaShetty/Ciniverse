import { Link, useLocation } from "react-router-dom";
import HeroMedia from "@/components/media/Hero";
import CarouselAutoQuery from "@/components/carousel/AutoQuery";
import { getMedia, listMedia } from "@/services/tmdb";
import { useEffect, useState, useCallback, useMemo } from "react";
import { QUERY_LIST } from "@/constants/lists";
import Footer from "@/components/Footer";
import AppScroller from "@/components/AppScroller";

const MediaComponent = ({ isRoot = false }) => {
  const { pathname } = useLocation();
  const [item, setItem] = useState(null);
  const [media, setMedia] = useState([]);

  const type = pathname.includes("tv") ? "tv" : "movie";
  const queries = isRoot
    ? [QUERY_LIST.movie[0], QUERY_LIST.tv[0]]
    : QUERY_LIST[type];

  const getMediaList = async () => {
    const mediaList = await Promise.all(
      queries.map((query) => listMedia(query.type, query.query, 1)),
    );
    setMedia(mediaList.map((media) => [...media.data.results]));
  };

  useEffect(() => {
    getMediaList();
  }, [getMediaList]);

  const getHeroMedia = async (id) => {
    const heroMedia = await getMedia(type, id);
    setItem(heroMedia.data);
  };
  useEffect(() => {
    if (media.length && media[0].length) {
      const id = media[0][0]?.id;
      getHeroMedia(id);
    }
  }, [media, isRoot]);

  return (
    <>
      <AppScroller>
        <Link
          to={`/${type}/${item?.id || ""}`}
          className={!item?.id ? "hover:cursor-not-allowed" : ""}
          onClick={(e) => !item?.id && e.preventDefault()}
        >
          <HeroMedia type={type} item={item} />
        </Link>
        <CarouselAutoQuery media={media} queries={queries} />
        <Footer />
      </AppScroller>
    </>
  );
};

export default MediaComponent;
