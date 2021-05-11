import moment from 'moment';
import { useEffect, useState } from 'react';
import { INews } from '../../interfaces';
import { Container, Feed, News } from '../../styles/HomeStyles/Right.style';
import { Card } from '../../styles/HomeStyles/Sidebar.style';

const Right = () => {
  const [news, setNews] = useState<INews[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=Your api key'
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
        {news.map((item, index) => (
          <News key={index}>
            <h3>{item?.title}</h3>
            <p>{moment(item?.publishedAt).fromNow()}</p>
          </News>
        ))}
      </Card>
    </Container>
  );
};

export default Right;
