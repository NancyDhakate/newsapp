import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  articles = [
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

  constructor() {
    super();
    this.state = {
      articles: [], // Initialize as an empty array
      loading: false,
      page: 1,
      totalResults: 0, // Initialize totalResults to 0
    };
  }

  async componentDidMount() {
    console.log("cdm");
    let url = `https://newsapi.org/v2/everything?q=tesla&from=2024-09-12&sortBy=publishedAt&apiKey=2481cd9823de4dfea48dcfda25bfd6e5&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  handlePrevClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/everything?q=tesla&from=2024-09-12&sortBy=publishedAt&apiKey=2481cd9823de4dfea48dcfda25bfd6e5&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };
  handleNextClick = async () => {
    console.log("Next");
    if (
      this.state.page + 1 >
      Math.ceil(this.totalResults / this.props.pageSize)
    ) {
    } else {
      let url = `https://newsapi.org/v2/everything?q=tesla&from=2024-09-12&sortBy=publishedAt&apiKey=2481cd9823de4dfea48dcfda25bfd6e5&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };

  render() {
    console.log("render");
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsMonkey - Top Headlines</h1>
        {!this.state.loading && this.state.loading && <Spinner />}
        <div className="row">
          {this.state.articles && this.state.articles.length > 0 ? (
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })
          ) : (
            <p>No articles available</p> // This can be a loading spinner or message
          )}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
