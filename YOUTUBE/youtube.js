const main = document.getElementById('main');

const showdata = (data) => {
  const { videos } = data;

  for (let i = 0; i < videos.length; i++) {
    const carddata = document.createElement('div');
    carddata.className = 'card';

    carddata.innerHTML = `
         <img
          src=${videos[i].thumbnails[0].url}
        />
        <div class="right">
          <h3 class="title">
           ${videos[i].title}
          </h3>
          <small>${Math.floor(
            videos[i].number_of_views / 1000000
          )}M views</small> . 
          <small>${videos[i].published_time}</small>

          <p class="channel">${videos[i].author}</p>
          <p class="description">
            ${videos[i].description}
          </p>
        </div>
    `;

    main.appendChild(carddata);
  }
};

const getdata = async (value) => {
  const options = {
    headers: {
      'x-rapidapi-host': 'youtube-v2.p.rapidapi.com',
      'x-rapidapi-key': '38b9c5a3demsh7bf64ca4503e28fp136ac2jsn36ff79ab3029',
    },
  };

  const response = await fetch(
    `https://youtube-v2.p.rapidapi.com/search/?query=${value}`,
    options
  );
  console.log(response);
  const data = await response.json();
  console.log(data);
  showdata(data);
};

const handleclick = () => {
  main.innerHTML = '';
  const datavalue = document.getElementById('box').value;
  getdata(datavalue);
};