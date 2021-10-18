import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Complete MERN-Stack</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://source.unsplash.com/1600x900/?nature,water"
        alt=""
      />
    </div>
  );
}
