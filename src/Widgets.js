import React from 'react';
import "./Widgets.css"
import{ TwitterTimelineEmbed,TwitterShareButton,TwitterTweetEmbed} from "react-twitter-embed";
import SearchIcon from '@material-ui/icons/Search';
function Widgets() {
    return (
        <div className="widgets">
        <div className="widgets_input">
            <SearchIcon className="widgets_searchIcon" />
            <input placeholder="Search Here" type="text" />
        </div>
        <div className="widgets_widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1304655657354719232"} 

        />
        <TwitterTimelineEmbed 
            sourceType="profile"
            screenName="manav10799"
            options={{height:400}}
        />
        <TwitterShareButton 
        url={"https://www.instagram.com/manav._arora/"}
        options={{text:"#Hey Guys",via:"manav10799"}}
        />
        </div>
        </div>
    )
}

export default Widgets;
