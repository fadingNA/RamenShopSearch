import React, {useState, useEffect} from "react";
import {Card} from "react-bootstrap";
import useSWR from "swr";

export default function News({objectID}) {
    const [article, setArticle] = useState([]);
    const [page, setPage] = useState(1);
    const endpoint = '172854b5fba84e3dacf25e87d573e1c0'
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${endpoint}`;
    const {data, error, isLoading} = useSWR(`${apiUrl}`)
    console.log(data);
    useEffect(() => {
        const PER_PAGE = 10;

        const results = [];
        if (data?.article){
            for(let i = 0; i < data?.article.length ; i += PER_PAGE ) {
                const chunk = data?.article.slice(i, i + PER_PAGE);
                results.push(chunk);
            }
            setArticle(results);
            setPage(1);
        }

    }, [data]);

    return (
        <>
            <div>
                <Card>
                    <h1>Top Headlines</h1>
                    <Card.Body>
                        <ul>
                            {article.map((articleGroup, i) => (
                                <React.Fragment key={`article-group-${i}`}>
                                    {articleGroup.map((article) => (
                                        <li key={article.title}>
                                            <Card.Body>
                                                <h2>{article.title}</h2>
                                            </Card.Body>
                                            <Card.Text>
                                                <h3>{article.author}</h3>
                                                <p>{article.description}</p>
                                            </Card.Text>
                                        </li>
                                    ))}
                                </React.Fragment>
                            ))}
                        </ul>
                    </Card.Body>
                </Card>
            </div>
        </>)
}