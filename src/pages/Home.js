import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { category, setNewsArticle, nextPage, prevPage, fetchNews } from '../redux/slice/NewsSlice';
import './Home.css';

const Home = ({ category, theme }) => {
  const data = useSelector((state) => state.NEWS);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.category !== category) {
      dispatch(category(category));
    }
  }, [category, data.category, dispatch]);

  const trending = theme === 'light' ? 'dark' : 'light';
  const button = theme === 'light' ? 'primary' : 'light';

  return (
    <>
      <div className={`justify-content-center bg-${theme}`}>
        <h1 className={`header-lined text-center hello text-${trending}`}>TOP TRENDING</h1>

        {data.error ? (
          <h1 style={{ display: 'flex', justifyContent: 'center' }}>{data.error}</h1>
        ) : (
          <div className="mt-4 mx-4 row d-flex">
            {data.loading ? (
              <div className="spinner-overlay">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading . . .</span>
                </div>
              </div>
            ) 
            : (
              data.top12News.map((value, index) => (
                <div className="col-sm-12 col-md-6 col-lg-4 mb-4 mx-auto" key={index}>
                  <div className="card">
                    <img src={value.urlToImage} className="card-img-top" alt="" />
                    <div className={`card-body bg-${theme}`}>
                      <h5 className={`card-title text-${trending}`}>{value.title}</h5>
                      <p className={`card-text text-${trending}`}>{value.description}</p>
                      <a
                        href={value.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn btn-${button}`}
                      >
                        Read
                      </a>
                    </div>
                  </div>
                </div>
              ))
            )
            }
          </div>
        )}

        {!data.error && !data.isLoading && (
          <div className="d-flex justify-content-around align-items-end">
            <button className={`btn btn-${button}`} onClick={() => dispatch(prevPage())}>
              Previous
            </button>
            <button className={`btn btn-${button}`} onClick={() => dispatch(nextPage())}>
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
