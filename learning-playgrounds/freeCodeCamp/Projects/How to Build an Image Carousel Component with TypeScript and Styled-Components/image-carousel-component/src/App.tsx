import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import sampleData from "./data/fakedata.json";

export type BannerProps = {
  title: string;
  tags: string[];
  description: string;
  image: string;
};

type SampleData = Pick<BannerProps, "title" | "description"> & {
  genres: string[];
  cover_url: string;
};

export const StyledSwiper = styled( Swiper )`
  & .swiper-button-next,
  .swiper-button-prev {
    color: white;
  }
`;

const StyledTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: white;
`;

const StyledTag = styled.div`
  padding: 0.5rem 0;

  & span {
    margin-right: 0.5rem;
    font-size: 1rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.6);
  }
`;

const StyledDescription = styled.div`
  text-align: start;
  color: rgba(255, 255, 255, 0.8);
  display: -webkit-box;
  max-width: 50%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
const Container = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 1) 60%, transparent),
    url(${ ( props: Pick<BannerProps, "image"> ) => props.image });
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 10px;
  }
`;

const Title = ( { title }: Pick<BannerProps, "title"> ) => (
  <StyledTitle>{title}</StyledTitle>
);

const Tags = ( { tags }: Pick<BannerProps, "tags"> ) => {
  return (
    <StyledTag>
      {tags.map( ( tag ) => (
        <span key={`tag-${ tag }`}>{tag}</span>
      ) )}
    </StyledTag>
  );
};

const Description = ( { description }: Pick<BannerProps, "description"> ) => (
  <StyledDescription>{description}</StyledDescription>
);

const Banner = ( props: any ) => {
  return (
    <Container image={props.image}>
      <div>{props.children}</div>
    </Container>
  );
};

Banner.Title = Title;
Banner.Tags = Tags;
Banner.Description = Description;

function BannerTile( props: BannerProps ) {
  const { title, image, tags, description } = props;
  return (
    <Banner image={image}>
      <Banner.Title title={title} />
      <Banner.Tags tags={tags} />
      <Banner.Description description={description} />
    </Banner>
  );
}

const HeroBanner = () => (
  <StyledSwiper navigation modules={[ Navigation ]} slidesPerView={1}>
    {sampleData.data.map( ( item: SampleData, index: number ) => (
      <SwiperSlide key={`key-${ item.title }-${ index }`}>
        <BannerTile
          title={item.title}
          tags={item.genres}
          image={item.cover_url}
          description={item.description}
        />
      </SwiperSlide>
    ) )}
  </StyledSwiper>
);

export default function App() {
  return (
    <div className="App">
      <h1>Image Carousel</h1>
      <HeroBanner />
    </div>
  );
}
