import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { URL_API, TOKEN } from "../../util/constants/constants";
import Loading from "./../../Components/Loading";

export default function NewMovie() {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `${URL_API}/now_playing?api_key=${TOKEN}&languaje=es-CO&page=${page}`
      );
      const movie = await res.json();
      setMovieList(movie);
    })();
  }, [page]);
  console.log(movieList);

  return (
    <Row>
      <Col span={24} style={{ textAlign: "center", marginTop: 25 }}>
        <h1 style={{ fontSize: 35, fontWeight: "bold" }}>
          Ultimos Lanzamientos
        </h1>
      </Col>
      {movieList.results ? (
        <Col span={24}>Todas las pelis</Col>
      ) : (
        <Col span={24}>
          <Loading />
        </Col>
      )}
    </Row>
  );
}
