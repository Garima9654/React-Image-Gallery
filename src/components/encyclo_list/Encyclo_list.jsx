// import { useEffect, useState } from "react";
// import axios from "axios";
// import Encyclo_single from "../encylo_single/Encyclo_single";
// import "./Encyclo_list.css";

// function Encyclo_list() {
//   const [EncycloList, setEncycloList] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [urlOffset, setUrlOffset] = useState(0);
//   const [urlLimit, setUrlLimit] = useState(20);
//   const [totalPhotos, setTotalPhotos] = useState(0);

//   const encycloUrl = `https://api.slingacademy.com/v1/sample-data/photos?offset=${urlOffset}&limit=${urlLimit}`;

//   async function downloadEncyclo() {
//     setIsLoading(true);
//     const response = await axios.get(encycloUrl);

//     const encycloPhotos = response.data.photos;
//     setTotalPhotos(response.data.total_photos);

//     const res = encycloPhotos.map((encyclo) => {
//       return {
//         url: encyclo.url,
//         title: encyclo.title,
//         id: encyclo.id,
//         description: encyclo.description,
//       };
//     });

//     setEncycloList(res);
//     console.log(encycloPhotos);
//     console.log(res);
//     setIsLoading(false);
//   }

//   useEffect(() => {
//     downloadEncyclo();
//   }, [urlOffset, urlLimit]);

//   const handleNext = () => {
//     if (urlOffset + urlLimit < totalPhotos) {
//       setUrlOffset(urlOffset + urlLimit);
//     }
//   };

//   const handlePrev = () => {
//     if (urlOffset - urlLimit >= 0) {
//       setUrlOffset(urlOffset - urlLimit);
//     }
//   };

//   return (
//     <div>
//       <div className="container">
//         {isLoading
//           ? "Loading..."
//           : EncycloList.map((e) => (
//               <Encyclo_single
//                 key={e.id}
//                 url={e.url}
//                 title={e.title}
//                 description={e.description}
//               />
//             ))}
//       </div>
//       <div className="pagination">
//         <button onClick={handlePrev} disabled={urlOffset === 0}>
//           Prev
//         </button>
//         <button
//           onClick={handleNext}
//           disabled={urlOffset + urlLimit >= totalPhotos}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Encyclo_list;
import { useEffect, useState } from "react";
import axios from "axios";
import Encyclo_single from "../encylo_single/Encyclo_single";
import "./Encyclo_list.css";

function Encyclo_list() {
  const [EncycloList, setEncycloList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [urlOffset, setUrlOffset] = useState(0);
  const [urlLimit, setUrlLimit] = useState(20);
  const [totalPhotos, setTotalPhotos] = useState(0);
  const [headerImage, setHeaderImage] = useState("");

  const encycloUrl = `https://api.slingacademy.com/v1/sample-data/photos?offset=${urlOffset}&limit=${urlLimit}`;

  async function downloadEncyclo() {
    setIsLoading(true);
    const response = await axios.get(encycloUrl);

    const encycloPhotos = response.data.photos;
    setTotalPhotos(response.data.total_photos);

    const res = encycloPhotos.map((encyclo) => {
      return {
        url: encyclo.url,
        title: encyclo.title,
        id: encyclo.id,
        description: encyclo.description,
      };
    });

    setEncycloList(res);
    setHeaderImage(encycloPhotos[0].url); // Set the header image to the first image from the API
    console.log(encycloPhotos);
    console.log(res);
    setIsLoading(false);
  }

  useEffect(() => {
    downloadEncyclo();
  }, [urlOffset, urlLimit]);

  const handleNext = () => {
    if (urlOffset + urlLimit < totalPhotos) {
      setUrlOffset(urlOffset + urlLimit);
    }
  };

  const handlePrev = () => {
    if (urlOffset - urlLimit >= 0) {
      setUrlOffset(urlOffset - urlLimit);
    }
  };

  return (
    <div>
      <div id="heading" style={{ backgroundImage: `url(${headerImage})` }}>
        <h1>Encyclopedia</h1>
      </div>
      <div className="container">
        {isLoading
          ? "Loading..."
          : EncycloList.map((e) => (
              <Encyclo_single
                key={e.id}
                url={e.url}
                title={e.title}
                description={e.description}
              />
            ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrev} disabled={urlOffset === 0}>
          Prev
        </button>
        <button
          onClick={handleNext}
          disabled={urlOffset + urlLimit >= totalPhotos}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Encyclo_list;
