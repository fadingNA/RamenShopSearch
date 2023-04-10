import React from "react";
import {Button, Form} from "react-bootstrap";
import {useRouter} from "next/router";
import {useForm} from 'react-hook-form'
import useSWR from 'swr'
import Container from "react-bootstrap/Container";
import Game from "@/components/minigame/Game";

const fetcher = (...args) => fetch(...args).then(res => res.json())
export default function Home(props){
    const {data, error, isLoading} = useSWR('https://newsapi.org/v2/everything?q=Apple&from=2023-04-08&sortBy=popularity&apiKey=172854b5fba84e3dacf25e87d573e1c0', fetcher)
    const {register, formState: {errors}} = useForm({});
    const router = useRouter();

    function submitForm(){
        router.push('/ramen')
    }
    return (<>
        <p>What Ramen Would you like ?</p>
        <br/>
        <Form>
            <Form.Label>
                Start with Ramen
            </Form.Label>
            <Form.Control
            name={'ramenName'}
            type={'name'}
            placeholder={'Ramen name'}/>
            <br/>
            <Button variant={'outline-success'}>
                Find location
            </Button>
        </Form>
        <br/>
        <Container>
            <Game/>
        </Container>
    </>)

}