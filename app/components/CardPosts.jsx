"use client";
import { useEffect, useState } from "react";
import { fetchApi } from "../service/fetchApi";
import timeAgo from "../service/timeAgo";

const CardPosts = () => {
  const [posts, setPosts] = useState(null);
  const [widthImg, setWidthImg] = useState("100%");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchh() {
      const data = await fetchApi();
      setPosts(data);
    }
    fetchh();
    const userAgent = window.navigator.userAgent;
    if (!userAgent.includes("Mobile")) {
      setWidthImg("50%");
    }
  }, []);
  return (
    <center>
      {!posts && (
        <>
          <div className="col">
            <div
              className="card mb-5"
              style={{ width: widthImg, textAlign: "left" }}
            >
              <img
                src="https://placehold.co/500x500"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Loading..</h5>
                <p className="card-text">Loading, please be patient...</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Unknown</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card mb-5"
              style={{ width: widthImg, textAlign: "left" }}
            >
              <img
                src="https://placehold.co/500x500"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Loading..</h5>
                <p className="card-text">Loading, please be patient...</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Unknown</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card mb-5"
              style={{ width: widthImg, textAlign: "left" }}
            >
              <img
                src="https://placehold.co/500x500"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Loading..</h5>
                <p className="card-text">Loading, please be patient...</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Unknown</small>
              </div>
            </div>
          </div>
        </>
      )}
      {posts &&
        posts.map((post) => (
          <div className="col" key={post.id}>
            <div
              className="card mb-5"
              style={{ width: widthImg, textAlign: "left" }}
            >
              {post.img !== null && (
                <img
                  src="https://placehold.co/500x500"
                  className="card-img-top"
                  alt="..."
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{post.name}</h5>
                <p className="card-text">{post.body}</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  {timeAgo(post.time)}
                </small>
              </div>
            </div>
          </div>
        ))}
    </center>
  );
};

export default CardPosts;
