import PostBlock from "../PostBlock";

export default function PostBlockList() {
  return (
    <div className="PostBlockList">
      <p className="h1 d-none d-lg-block">TimeLine</p>
      {[{}, 1, 1, 1, 1, 1, 1, 1, 1, 1, {}].map((img, idx) => (
        <PostBlock key={idx} />
      ))}
    </div>
  );
}
