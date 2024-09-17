import './container.css';

export default function Container() {
    return (
        <section>
            <div className="container">
                <PostsContainer />
                <SideBar />
            </div>
        </section>
    );
}


function PostsContainer() {
    function Post() {
        return (
            <div className="post">
                <h2 className='title'>this is a post title</h2>
                <hr />
                <p className='disc'>this is the post body</p>
            </div>
        );
    }
    return (
        <div className='posts-con'>
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}


function SideBar() {
    function Btn() {
        return <button className='btn'>tag button</button>;
    }
    return (
        <div className='side-bar'>
            <Btn />
            <Btn />
            <Btn />
            <Btn />
            <Btn />
            <Btn />
            <Btn />
            <Btn />
            <Btn />
            <Btn />
            <Btn />
            <Btn />
        </div>
    );
}




