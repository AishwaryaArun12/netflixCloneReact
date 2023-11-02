import React, { useEffect, useState } from 'react';
import { axios } from './Constants';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Row = ({ title, options, url }) => {
  const [data, setData] = useState([]);
  const [videoKey, setVideoKey] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = options;
        const res = await axios.get(url, { params: params });
        const movies = res.data.results;
        setData(movies);

        const videoUrls = [];
        for (const movie of movies) {
          try {
            const videoRes = await axios.get(`/movie/${movie.id}/videos`);
            const key = videoRes.data.results[0]?.key;           
              videoUrls.push(`https://www.youtube.com/embed/${key}?autoplay=1`);           
          } catch (error) {
            console.log(error.message);
          }
        }
        setVideoKey(videoUrls);
        setLoading(false); // Set loading to false when data is ready
      } catch (error) {
        console.log(error.message);
        setLoading(false); // Also set loading to false on error
      }
    };

    fetchData();
  }, [options, url]);

  const renderTooltip = (id, index) => {
    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <Tooltip id={id}>
        <div>
          <iframe
            title="YouTube Video"
            width="560"
            height="315"
            src={videoKey[index]}
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </Tooltip>
    );
  };

  return (
    <div id="row" className="pb-4">
      <h5 className="text-secondary fw-bold p-2">{title}</h5>
      <div id="scrollDiv" className="d-flex">
        <div className="scroll-container">
          {data.map((item, index) => (
            <OverlayTrigger
              key={item.id}
              placement="right"
              overlay={renderTooltip(item.id, index)}
            >
              <div
                className="scroll-item"
                style={{
                  backgroundImage: `url('https://image.tmdb.org/t/p/w500/${item.poster_path}')`,
                }}
              ></div>
            </OverlayTrigger>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Row;
