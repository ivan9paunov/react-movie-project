import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

const CREATE_MOVIE = gql`
    mutation CreateMovie($data: CreateMovieInput!) {
        createMovie(data: $data) {
             _id
             title
             description
             rating
        }
    }
`;

function CreateMovies(props) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');

    const [createMovie, { data }] = useMutation(CREATE_MOVIE);

    const onCreateMovie = () => {
        const movieData = { 
            variables: { 
                data: {
                    title,
                    description,
                    rating: Number(rating),
                } 
            } 
    }
        createMovie(movieData).then( response => {
            console.log(response);
        });
        resetState();
    }
    const resetState = () => {
        setTitle('');
        setDescription('');
        setRating('');
    }

    const getOptions = () => {
        let options = [];
        for(let i = 0; i < 11; i++){
            options.push(<option value={i} key={i}>{i}</option>)
        } 
        return options;
    }

    return <>
        <Form onSubmit={e => {
            e.preventDefault();
            onCreateMovie()
        }}>
            <FormGroup>
                <Label for="title">Заглавие</Label>
                <Input 
                    type="title" 
                    name="title" 
                    id="title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Име на филма" />
            </FormGroup>
            <FormGroup>
                <Label for="description">Описание</Label>
                <Input 
                    type="text" 
                    name="description" 
                    id="description"
                    value={description}
                    onChange={e => setDescription(e.target.value)} 
                    placeholder="Описание на филма" />
            </FormGroup>
            <FormGroup>
                <Label for="rating">Рейтинг</Label>
                <Input 
                    type="select" 
                    name="rating" 
                    id="rating" 
                    value={rating}
                    onChange={e => setRating(e.target.value)}
                    >
                    { getOptions() }
                </Input> 
            </FormGroup>
            <Button type="submit">Добави филм</Button>
        </Form>
    </>
}
export default CreateMovies;