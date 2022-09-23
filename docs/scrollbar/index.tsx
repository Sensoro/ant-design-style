import "./index.less";

export default () => (
  <div id="wrapper">
    <div className="scrollbar" id="style-1">
      竖向大
      <div className="force-overflow" />
    </div>
    <div className="scrollbar" id="style-2">
      竖向小
      <div className="force-overflow" />
    </div>
    <div className="scrollbar-x" id="style-3">
      横向大
      <div className="force-overflow" />
    </div>
    <div className="scrollbar-x" id="style-4">
      横向小
      <div className="force-overflow" />
    </div>
  </div>
);
