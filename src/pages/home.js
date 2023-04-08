import React from "react";
import {Button, Form} from "react-bootstrap";
import {useRouter} from "next/router";
import {useForm} from 'react-hook-form'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())
export default function Home(props){
    const {data, error, isLoading} = useSWR('https://ramen-api.dev/shops/yoshimuraya', fetcher)
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
    </>)

}