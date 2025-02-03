import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import '../Styles/HomeScreen.css';
import Rows from '../Components/Rows';
import requests from '../Requests';

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Navbar />
      <Banner />
      <Rows
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Rows title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Rows title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Rows title="ComedyMovies" fetchUrl={requests.fetchComedyMovies} />
      <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default HomeScreen;
