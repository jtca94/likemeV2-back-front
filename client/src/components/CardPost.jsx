import TrashIcon from "./icons/TrashIcon";
import HeartIcon from "./icons/heart-solid";

export default function CardPost({post, deletePostById, likePostById}) {
  return (
    <div className="col-12 col-md-6">
      <article className="card h-100">
        <img src={post.img} alt="" className="card-img-top" />
        <div className="card-body flex-column d-flex">
          <h5>{post.titulo}</h5>
          <p className="flex-grow-1">{post.descripcion}</p>
          <div className="d-flex mt-3 justify-content-between align-items-center">
            <div>
              <HeartIcon
                fill="red"
                height="25"
                onClick={() => {
                  likePostById(post.id);
                }}
                className="cursor-pointer"
              />
              <span className="ms-2">{post.likes}</span>
            </div>
            <div>
              <TrashIcon
                fill="red"
                height="25"
                onClick={() => {
                  deletePostById(post.id);
                }}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
