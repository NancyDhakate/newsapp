import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.articles = [
      {
        source: { id: "news-com-au", name: "News.com.au" },
        author: null,
        title: "Convicted rapist set to play cricket in Aus",
        description:
          "An Australian cricketer who was jailed for five years for rape and banned from playing cricket in England and Wales for the next 10 years is currently set to play in Australia.",
        url: "https://www.news.com.au/sport/cricket/cricketer-convicted-of-rape-banned-from-sport-for-10-years-allowed-to-play-in-australia/news-story/7afb34997ff1f64fc8b6a8e872423bf5",
        urlToImage:
          "https://content.api.news/v3/images/bin/20cdc019ea6210713f6a0c30dbfcbca7",
        publishedAt: "2024-10-07T09:20:00Z",
        content:
          "An Australian cricketer who was jailed for five years for rape and banned from playing cricket in England and Wales for the next 10 years is currently set to play in Australia.\r\nAlex Hepburn, now 28,… [+3811 chars]",
      },
      {
        source: { id: "bbc-sport", name: "BBC Sport" },
        author: null,
        title:
          "Pakistan vs England LIVE: first Test, day one, Multan Cricket Stadium – cricket score, radio commentary and text updates",
        description:
          "Pakistan host England in the first Test at Multan Cricket Stadium – follow text & score updates plus radio commentary.",
        url: "http://www.bbc.co.uk/sport/cricket/live/cervpppzv42t",
        urlToImage:
          "https://static.files.bbci.co.uk/ws/simorgh-assets/public/sport/images/metadata/poster-1024x576.png",
        publishedAt: "2024-10-07T05:52:11.1671206Z",
        content:
          "We already knew Ben Stokes was out of this one, having failed to recover from his hamstring injury. \r\nBrydon Carse, impressive in the recent one-dayers against Australia, makes his Test debut.\r\nEngla… [+341 chars]",
      },
      {
        source: { id: "espn-cric-info", name: "ESPN Cric Info" },
        author: null,
        title:
          "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        description:
          "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
        url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        urlToImage:
          "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        publishedAt: "2020-04-27T11:41:47Z",
        content:
          "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
      },
      {
        source: { id: "espn-cric-info", name: "ESPN Cric Info" },
        author: null,
        title:
          "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
        description:
          "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
        url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
        urlToImage:
          "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        publishedAt: "2020-03-30T15:26:05Z",
        content:
          "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
      },
    ];
    this.state = {
      articles: this.articles,
      loading: false,
    };
    console.log("Hello I am a constructor from News Component");
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
