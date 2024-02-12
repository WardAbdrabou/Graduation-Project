import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Axios } from '../../Api/axios';
import Loading from '../../Components/Loading';

export default function AddPost() {
    const [category_id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [slug, setSubslug] = useState("");
    const [body, setBody] = useState("");
    const[image , setImage] = useState("")
    
    const [loading, setLoading] = useState(false);

    //function
    async function HandleSubmit(e) {
        setLoading(true);
        e.preventDefault();

        const form = new  FormData();
        form.append('category_id', category_id);
        form.append('title', title);
        form.append('slug', slug);
        form.append("body" , body);
        form.append('image', image);
        try {
            const res = await Axios.post(`/create_post`,form) ;
            window.location.pathname = "/dashboard/posts";
        } catch (err) {
            setLoading(false);
            console.log(err);
        }

    }
    return (
        <>
            {loading && <Loading></Loading>}
            <Form className='bg-white w-100 mx-2 p-3' onSubmit={HandleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput0">
                    <Form.Label > Category_Id </Form.Label>
                    <Form.Control
                        className='inputdash'
                        name='id'
                        value={category_id}
                        required
                        onChange={(e) => setId(e.target.value)}
                        type="number" placeholder="id....." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label> Title </Form.Label>
                    <Form.Control
                        name='name'
                        value={title}
                        required
                        onChange={(e) => setTitle(e.target.value)}
                        type="text" placeholder="name....." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label> Subslug </Form.Label>
                    <Form.Control
                    className='inputdash'
                        name='slug'
                        value={slug}
                        required
                        onChange={(e) => setSubslug(e.target.value)}
                        type="text" placeholder="name....." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="image">
                <Form.Label> Image </Form.Label>
                    <Form.Control onChange={(e) => setImage(e.target.files.item(0))}
                        type="file" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label> Description </Form.Label>
                    <Form.Control
                        className='inputdash w-100 desdash '
                        style={{outline:"none"}}
                        name='body'
                        value={body}
                        required
                        onChange={(e) => setBody(e.target.value)}
                        type="text" placeholder="Description....." />
                </Form.Group>
                

                
                <button 
                disabled={
                    title.length > 1 
                    ? false : true
                    } className='btnpost'>Create Post</button>
            </Form>
        </>
    );
}

