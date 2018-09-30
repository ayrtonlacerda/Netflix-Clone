import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StatusBar
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as TRMActions } from '../../store/ducks/topratedmovie';

import styles from './styles';
import ScrollPoster from './components/scrollposter';




class HomePage extends Component {

  state = {
  results: [
    {
      "poster_path": "/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg",
      "adult": false,
      "overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
      "release_date": "1994-09-10",
      "genre_ids": [
        18,
        80
      ],
      "id": 278,
      "original_title": "The Shawshank Redemption",
      "original_language": "en",
      "title": "The Shawshank Redemption",
      "backdrop_path": "/xBKGJQsAIeweesB79KC89FpBrVr.jpg",
      "popularity": 6.741296,
      "vote_count": 5238,
      "video": false,
      "vote_average": 8.32
    },
    {
      "poster_path": "/lIv1QinFqz4dlp5U4lQ6HaiskOZ.jpg",
      "adult": false,
      "overview": "Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.",
      "release_date": "2014-10-10",
      "genre_ids": [
        18,
        10402
      ],
      "id": 244786,
      "original_title": "Whiplash",
      "original_language": "en",
      "title": "Whiplash",
      "backdrop_path": "/6bbZ6XyvgfjhQwbplnUh1LSj1ky.jpg",
      "popularity": 10.776056,
      "vote_count": 2059,
      "video": false,
      "vote_average": 8.29
    },
    {
      "poster_path": "/d4KNaTrltq6bpkFS01pYtyXa09m.jpg",
      "adult": false,
      "overview": "The story spans the years from 1945 to 1955 and chronicles the fictional Italian-American Corleone crime family. When organized crime family patriarch Vito Corleone barely survives an attempt on his life, his youngest son, Michael, steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
      "release_date": "1972-03-15",
      "genre_ids": [
        18,
        80
      ],
      "id": 238,
      "original_title": "The Godfather",
      "original_language": "en",
      "title": "The Godfather",
      "backdrop_path": "/6xKCYgH16UuwEGAyroLU6p8HLIn.jpg",
      "popularity": 4.554654,
      "vote_count": 3570,
      "video": false,
      "vote_average": 8.26
    },
    {
      "poster_path": "/ynXoOxmDHNQ4UAy0oU6avW71HVW.jpg",
      "adult": false,
      "overview": "Spirited Away is an Oscar winning Japanese animated film about a ten year old girl who wanders away from her parents along a path that leads to a world ruled by strange and unusual monster-like animals. Her parents have been changed into pigs along with others inside a bathhouse full of these creatures. Will she ever see the world how it once was?",
      "release_date": "2001-07-20",
      "genre_ids": [
        14,
        12,
        16,
        10751
      ],
      "id": 129,
      "original_title": "千と千尋の神隠し",
      "original_language": "ja",
      "title": "Spirited Away",
      "backdrop_path": "/djgM2d3e42p9GFQObg6lwK2SVw2.jpg",
      "popularity": 6.886678,
      "vote_count": 2000,
      "video": false,
      "vote_average": 8.15
    },
    {
      "poster_path": "/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg",
      "adult": false,
      "overview": "Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
      "release_date": "2014-11-05",
      "genre_ids": [
        12,
        18,
        878
      ],
      "id": 157336,
      "original_title": "Interstellar",
      "original_language": "en",
      "title": "Interstellar",
      "backdrop_path": "/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg",
      "popularity": 12.481061,
      "vote_count": 5600,
      "video": false,
      "vote_average": 8.12
    },
    {
      "poster_path": "/tHbMIIF51rguMNSastqoQwR0sBs.jpg",
      "adult": false,
      "overview": "The continuing saga of the Corleone crime family tells the story of a young Vito Corleone growing up in Sicily and in 1910s New York; and follows Michael Corleone in the 1950s as he attempts to expand the family business into Las Vegas, Hollywood and Cuba",
      "release_date": "1974-12-20",
      "genre_ids": [
        18,
        80
      ],
      "id": 240,
      "original_title": "The Godfather: Part II",
      "original_language": "en",
      "title": "The Godfather: Part II",
      "backdrop_path": "/gLbBRyS7MBrmVUNce91Hmx9vzqI.jpg",
      "popularity": 4.003715,
      "vote_count": 1894,
      "video": false,
      "vote_average": 8.1
    },
    {
      "poster_path": "/4mFsNQwbD0F237Tx7gAPotd0nbJ.jpg",
      "adult": false,
      "overview": "A true story of two men who should never have met - a quadriplegic aristocrat who was injured in a paragliding accident and a young man from the projects.",
      "release_date": "2011-11-02",
      "genre_ids": [
        18,
        35
      ],
      "id": 77338,
      "original_title": "Intouchables",
      "original_language": "fr",
      "title": "The Intouchables",
      "backdrop_path": "/ihWaJZCUIon2dXcosjQG2JHJAPN.jpg",
      "popularity": 3.698279,
      "vote_count": 2740,
      "video": false,
      "vote_average": 8.1
    },
    {
      "poster_path": "/bwVhmPpydv8P7mWfrmL3XVw0MV5.jpg",
      "adult": false,
      "overview": "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.",
      "release_date": "1988-04-16",
      "genre_ids": [
        16,
        18,
        10751,
        10752
      ],
      "id": 12477,
      "original_title": "火垂るの墓",
      "original_language": "ja",
      "title": "Grave of the Fireflies",
      "backdrop_path": "/fCUIuG7y4YKC3hofZ8wsj7zhCpR.jpg",
      "popularity": 1.001401,
      "vote_count": 430,
      "video": false,
      "vote_average": 8.07
    },
    {
      "poster_path": "/yPisjyLweCl1tbgwgtzBCNCBle.jpg",
      "adult": false,
      "overview": "Told from the perspective of businessman Oskar Schindler who saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory. Schindler’s List is based on a true story, illustrated in black and white and controversially filmed in many original locations.",
      "release_date": "1993-11-29",
      "genre_ids": [
        18,
        36,
        10752
      ],
      "id": 424,
      "original_title": "Schindler's List",
      "original_language": "en",
      "title": "Schindler's List",
      "backdrop_path": "/rIpSszng8P0DL0TimSzZbpfnvh1.jpg",
      "popularity": 5.372319,
      "vote_count": 2308,
      "video": false,
      "vote_average": 8.07
    },
    {
      "poster_path": "/eqFckcHuFCT1FrzLOAvXBb4jHwq.jpg",
      "adult": false,
      "overview": "Jack is a young boy of 5 years old who has lived all his life in one room. He believes everything within it are the only real things in the world. But what will happen when his Ma suddenly tells him that there are other things outside of Room?",
      "release_date": "2015-10-16",
      "genre_ids": [
        18,
        53
      ],
      "id": 264644,
      "original_title": "Room",
      "original_language": "en",
      "title": "Room",
      "backdrop_path": "/tBhp8MGaiL3BXpPCSl5xY397sGH.jpg",
      "popularity": 5.593128,
      "vote_count": 1179,
      "video": false,
      "vote_average": 8.06
    },
    {
      "poster_path": "/f7DImXDebOs148U4uPjI61iDvaK.jpg",
      "adult": false,
      "overview": "A touching story of an Italian book seller of Jewish ancestry who lives in his own little fairy tale. His creative and happy life would come to an abrupt halt when his entire family is deported to a concentration camp during World War II. While locked up he tries to convince his son that the whole thing is just a game.",
      "release_date": "1997-12-20",
      "genre_ids": [
        35,
        18
      ],
      "id": 637,
      "original_title": "La vita è bella",
      "original_language": "it",
      "title": "Life Is Beautiful",
      "backdrop_path": "/bORe0eI72D874TMawOOFvqWS6Xe.jpg",
      "popularity": 5.385594,
      "vote_count": 1593,
      "video": false,
      "vote_average": 8.06
    },
    {
      "poster_path": "/s0C78plmx3dFcO3WMnoXCz56FiN.jpg",
      "adult": false,
      "overview": "A boy growing up in Dublin during the 1980s escapes his strained family life by starting a band to impress the mysterious girl he likes.",
      "release_date": "2016-04-15",
      "genre_ids": [
        10749,
        18,
        10402
      ],
      "id": 369557,
      "original_title": "Sing Street",
      "original_language": "en",
      "title": "Sing Street",
      "backdrop_path": "/9j4UaRypr19wz0BOofwvkPRm1Se.jpg",
      "popularity": 3.343073,
      "vote_count": 61,
      "video": false,
      "vote_average": 8.06
    },
    {
      "poster_path": "/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
      "adult": false,
      "overview": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
      "release_date": "2008-07-16",
      "genre_ids": [
        18,
        28,
        80,
        53
      ],
      "id": 155,
      "original_title": "The Dark Knight",
      "original_language": "en",
      "title": "The Dark Knight",
      "backdrop_path": "/nnMC0BM6XbjIIrT4miYmMtPGcQV.jpg",
      "popularity": 8.090715,
      "vote_count": 7744,
      "video": false,
      "vote_average": 8.06
    },
    {
      "poster_path": "/811DjJTon9gD6hZ8nCjSitaIXFQ.jpg",
      "adult": false,
      "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
      "release_date": "1999-10-14",
      "genre_ids": [
        18
      ],
      "id": 550,
      "original_title": "Fight Club",
      "original_language": "en",
      "title": "Fight Club",
      "backdrop_path": "/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg",
      "popularity": 6.590102,
      "vote_count": 5221,
      "video": false,
      "vote_average": 8.05
    },
    {
      "poster_path": "/dM2w364MScsjFf8pfMbaWUcWrR.jpg",
      "adult": false,
      "overview": "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
      "release_date": "1994-10-14",
      "genre_ids": [
        53,
        80
      ],
      "id": 680,
      "original_title": "Pulp Fiction",
      "original_language": "en",
      "title": "Pulp Fiction",
      "backdrop_path": "/mte63qJaVnoxkkXbHkdFujBnBgd.jpg",
      "popularity": 7.760216,
      "vote_count": 4722,
      "video": false,
      "vote_average": 8.04
    },
    {
      "poster_path": "/gzlJkVfWV5VEG5xK25cvFGJgkDz.jpg",
      "adult": false,
      "overview": "Ashitaka, a prince of the disappearing Ainu tribe, is cursed by a demonized boar god and must journey to the west to find a cure. Along the way, he encounters San, a young human woman fighting to protect the forest, and Lady Eboshi, who is trying to destroy it. Ashitaka must find a way to bring balance to this conflict.",
      "release_date": "1997-07-12",
      "genre_ids": [
        12,
        14,
        16
      ],
      "id": 128,
      "original_title": "もののけ姫",
      "original_language": "ja",
      "title": "Princess Mononoke",
      "backdrop_path": "/dB2rATwfCbsPGfRLIoluBnKdVHb.jpg",
      "popularity": 4.672361,
      "vote_count": 954,
      "video": false,
      "vote_average": 8.04
    },
    {
      "poster_path": "/3TpMBcAYH4cxCw5WoRacWodMTCG.jpg",
      "adult": false,
      "overview": "An urban office worker finds that paper airplanes are instrumental in meeting a girl in ways he never expected.",
      "release_date": "2012-11-02",
      "genre_ids": [
        16,
        10751,
        10749
      ],
      "id": 140420,
      "original_title": "Paperman",
      "original_language": "en",
      "title": "Paperman",
      "backdrop_path": "/cqn1ynw78Wan37jzs1Ckm7va97G.jpg",
      "popularity": 2.907096,
      "vote_count": 452,
      "video": false,
      "vote_average": 8.03
    },
    {
      "poster_path": "/pwpGfTImTGifEGgLb3s6LRPd4I6.jpg",
      "adult": false,
      "overview": "Henry Hill is a small time gangster, who takes part in a robbery with Jimmy Conway and Tommy De Vito, two other gangsters who have set their sights a bit higher. His two partners kill off everyone else involved in the robbery, and slowly start to climb up through the hierarchy of the Mob. Henry, however, is badly affected by his partners success, but will he stoop low enough to bring about the downfall of Jimmy and Tommy?",
      "release_date": "1990-09-12",
      "genre_ids": [
        18,
        80
      ],
      "id": 769,
      "original_title": "Goodfellas",
      "original_language": "en",
      "title": "Goodfellas",
      "backdrop_path": "/xDEOxA01480uLTWuvQCw61VmDBt.jpg",
      "popularity": 3.783589,
      "vote_count": 1528,
      "video": false,
      "vote_average": 8.02
    },
    {
      "poster_path": "/z4ROnCrL77ZMzT0MsNXY5j25wS2.jpg",
      "adult": false,
      "overview": "A man with a low IQ has accomplished great things in his life and been present during significant historic events - in each case, far exceeding what anyone imagined he could do. Yet, despite all the things he has attained, his one true love eludes him. 'Forrest Gump' is the story of a man who rose above his challenges, and who proved that determination, courage, and love are more important than ability.",
      "release_date": "1994-07-06",
      "genre_ids": [
        35,
        18,
        10749
      ],
      "id": 13,
      "original_title": "Forrest Gump",
      "original_language": "en",
      "title": "Forrest Gump",
      "backdrop_path": "/ctOEhQiFIHWkiaYp7b0ibSTe5IL.jpg",
      "popularity": 6.224491,
      "vote_count": 4279,
      "video": false,
      "vote_average": 8.02
    },
    {
      "poster_path": "/5hqbJSmtAimbaP3XcYshCixuUtk.jpg",
      "adult": false,
      "overview": "A veteran samurai, who has fallen on hard times, answers a village's request for protection from bandits. He gathers 6 other samurai to help him, and they teach the townspeople how to defend themselves, and they supply the samurai with three small meals a day. The film culminates in a giant battle when 40 bandits attack the village.",
      "release_date": "1954-04-26",
      "genre_ids": [
        28,
        18
      ],
      "id": 346,
      "original_title": "七人の侍",
      "original_language": "ja",
      "title": "Seven Samurai",
      "backdrop_path": "/61vLiK96sbXeHpQiMxI4CuqBA3z.jpg",
      "popularity": 2.93856,
      "vote_count": 436,
      "video": false,
      "vote_average": 8.02
    }
  ],
  "total_results": 5206,
  "total_pages": 261

  }

  componentDidMount() {
    this.props.getTRMrequest();
    console.tron.log(this.props);
    console.tron.log(this.props.theratedM);
  }

  render() {
    console.tron.log(this.props)
    console.tron.log(this.props.theratedM)
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <StatusBar backgroundColor={'rgba(0,0,0, 1)'} />
          <Image style={styles.imageHeader} source={require('../../assets/imgs/Netflix_(logo).png') } />
        </View>

      <ScrollView>
        <Text style={styles.TitleTipes}>
          Melhores Filmes
        </Text>
        <ScrollView horizontal={true} style={styles.scroll}>
          {this.state.results.map(movies =>
            <ScrollPoster
              key={movies.poster_path}
              poster={movies.poster_path}
              title={movies.title}
            />
          )}
        </ScrollView>

        <Text style={styles.TitleTipes}>
          Filmes Populares
        </Text>
        <ScrollView horizontal={true} style={styles.scroll}>
          {this.state.results.map(movies =>
            <ScrollPoster
              key={movies.poster_path}
              poster={movies.poster_path}
              title={movies.title}
            />
          )}
        </ScrollView>

        <Text style={styles.TitleTipes}>
          Proximos Filmes
        </Text>
        <ScrollView horizontal={true} style={styles.scroll}>
          {this.state.results.map(movies =>
            <ScrollPoster
              key={movies.poster_path}
              poster={movies.poster_path}
              title={movies.title}
            />
          )}
        </ScrollView>

        <Text style={styles.TitleTipes}>
          Series Populares
        </Text>
        <ScrollView horizontal={true} style={styles.scroll}>
          {this.state.results.map(movies =>
            <ScrollPoster
              key={movies.poster_path}
              poster={movies.poster_path}
              title={movies.title}
            />
          )}
        </ScrollView>

        <Text style={styles.TitleTipes}>
          Melhores Series
        </Text>
        <ScrollView horizontal={true} style={styles.scroll}>
          {this.state.results.map(movies =>
            <ScrollPoster
              key={movies.poster_path}
              poster={movies.poster_path}
              title={movies.title}
            />
          )}
        </ScrollView>
      </ScrollView>

      </View>
    );
  }
}

const mapStateToProps = state => ({
  theratedM: state.theratedM,
});

const mapDispatchToprops = dispatch =>
  bindActionCreators(TRMActions, dispatch)


export default connect(mapStateToProps, mapDispatchToprops)(HomePage);
