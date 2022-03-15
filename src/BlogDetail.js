import { react } from 'react'
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
    const { id } = useParams()
    return (<div className="detail">
        <h1> this is the {id}</h1>
    </div>);
}

export default BlogDetail;