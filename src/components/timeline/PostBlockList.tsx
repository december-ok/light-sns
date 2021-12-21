import PostBlock from "../PostBlock";

export default function PostBlockList() {
  return (
    <div className="PostBlockList">
      {[{}, {}].map(() => (
        <PostBlock />
      ))}
    </div>
  );
}
