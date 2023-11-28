import { Search } from "@mui/icons-material";
import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets--input">
        <Search className="widgets--searchIcon" />
        <input placeholder="キーワード検索" type="text"></input>
      </div>

      <div className="widgets--widgetContainer">
        <h2>いまどうしてる？</h2>

        {/* ライブラリを追加・追記 */}
        <TwitterTweetEmbed tweetId={"1475764828208009220"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="tym_scp"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://x.com/tym_scp"}
          options={{ text: "#React.js勉強中", via: "tym_scp" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
