import moment from 'moment';
import { FC, useEffect, useState } from 'react';
import { INews } from '../../interfaces';
import {
  Container,
  Feed,
  FeedItem,
  FeedList,
  FollowBtn,
  News,
  UserImage,
  UserName,
} from '../../styles/HomeStyles/Right.style';
import { Card } from '../../styles/HomeStyles/Sidebar.style';

const Right: FC = () => {
  const [news, setNews] = useState<INews[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=YOUR_API'
        );
        const data = await res.json();
        setNews(data?.articles);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Card>
        <span>
          <h3>LinkedIn News</h3>
          <Feed />
        </span>
        {news?.slice(0, 5)?.map((item, index) => (
          <News key={index}>
            <h3>{item?.title}</h3>
            <p>{moment(item?.publishedAt).fromNow()}</p>
          </News>
        ))}
      </Card>
      <Card>
        <span>
          <h3>Add to your feed</h3>
          <Feed />
        </span>
        <FeedList>
          <FeedItem>
            <UserImage />
            <div>
              <UserName>#linkedIn</UserName>
              <FollowBtn>Follow</FollowBtn>
            </div>
          </FeedItem>
          <FeedItem>
            <UserImage />
            <div>
              <UserName>#video</UserName>
              <FollowBtn>Follow</FollowBtn>
            </div>
          </FeedItem>
          <p>view all recommendations</p>
        </FeedList>
      </Card>
      <Card>
        <img
          src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
          alt=""
        />
      </Card>
    </Container>
  );
};

export default Right;
