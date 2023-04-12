import React, {useState, useEffect} from "react";
import {Card, Col, Row} from "react-bootstrap";
import useSWR from "swr";
import Container from "react-bootstrap/Container";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export default function News({objectID}) {
    const [article, setArticle] = useState([]);
    const [page, setPage] = useState(1);
    const endpoint = '172854b5fba84e3dacf25e87d573e1c0'

    const {data, error, isLoading} = useSWR(`https://newsapi.org/v2/top-headlines?country=us&apiKey=172854b5fba84e3dacf25e87d573e1c0`)
    console.log(data);
    useEffect(() => {
        setArticle(data?.articles);
    }, [data])

    if (isLoading) {
        return <p>Loading ... </p>
    }

    if (error) {
        return <p> Error fetching data.</p>
    }
    return (
        <>
            <div>
                {article?.map((articleGroup, i) => (
                    <Row key={articleGroup.title}>
                        <Col md={6}>
                            <Card>
                                <Card.Body>
                                    <ul>
                                        <li>
                                            <Card.Title>
                                                <h2>{articleGroup.title}</h2>
                                            </Card.Title>
                                            <Container md={12}>
                                                <Card body>Author : {articleGroup.author}</Card>
                                                <br/>
                                                <Card.Img
                                                    variant={"top"}
                                                    src={articleGroup.urlToImage}
                                                    style={{width: "34rem"}}
                                                    className={"img-fluid rounded"}
                                                />
                                            </Container>

                                            <br/>
                                            <br/>

                                            <Card.Text>
                                                <p>{articleGroup.description}</p>
                                            </Card.Text>
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                            <br/>
                            <br/>
                        </Col>
                        <Col md={6} className={"mt-5"}>
                            <br/>
                            <br/>
                            <br/>
                            <br/>

                            <Card>
                                <Card.Body>
                                    <ul>
                                        <li>
                                            <Card.Title>
                                                <h2>{articleGroup.title}</h2>
                                                <p className={"display-5"}>{articleGroup.publishedAt}</p>
                                            </Card.Title>
                                            <br/>
                                            <br/>
                                            <Card.Text>
                                                <a href={articleGroup.url} target={"_blank"}>
                                                    Direct to news
                                                </a>
                                            </Card.Text>
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                ))}


            </div>
        </>)
}