import PostBlock from "../PostBlock";

export default function PostBlockList() {
  return (
    <div className="PostBlockList">
      {[{}, 1, 1, 1, 1, 1, 1, 1, 1, 1, {}].map(() => (
        <PostBlock />
      ))}
    </div>
  );
}
