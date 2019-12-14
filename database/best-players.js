// EPL Best Players
var bestPlayers = [
  {
    name: "Alisson",
    image:
      "https://tmssl.akamaized.net//images/foto/normal/alisson-fc-liverpool-1548766324-20182.jpg",
    position: "Goalkeeper",
    dateOfBirth: "1992-10-02",
    nationality: "Brazil"
  },
  {
    name: "Virgil van Dijk",
    image:
      "https://i.dailymail.co.uk/1s/2019/12/01/20/21681812-0-image-m-2_1575231018832.jpg",
    position: "Defender",
    dateOfBirth: "1991-07-08",
    nationality: "Netherlands"
  },
  {
    name: "Sadio Mané",
    image:
      "https://i1.wp.com/metro.co.uk/wp-content/uploads/2019/12/GettyImages-1188125774.jpg?quality=90&strip=all&zoom=1&resize=644%2C429&ssl=1",
    position: "Midfielder",
    dateOfBirth: "1992-04-10",
    nationality: "Senegal"
  },
  {
    name: "Mohamed Salah",
    image:
      "https://cdn.images.express.co.uk/img/dynamic/67/590x/Mohamed-Salah-wages-1089532.jpg?r=1550601658253",
    position: "Attacker",
    dateOfBirth: "1992-06-15",
    nationality: "Egypt"
  },
  {
    name: "Hugo Lloris",
    image:
      "https://www.telegraph.co.uk/content/dam/football/2018/08/27/TELEMMGLPICT000172641881_trans_NvBQzQNjv4Bq3a8w-8D5SFe_uuV3C9_4wJC92Hw8Jb-gx_RR66APqlU.jpeg?imwidth=450",
    position: "Goalkeeper",
    dateOfBirth: "1986-12-26",
    nationality: "France"
  },
  {
    name: "Toby Alderweireld",
    image:
      "https://cdn-01.independent.ie/sport/soccer/article37680380.ece/bbe96/AUTOCROP/w620/ipanews_5f784ada-4760-4343-8a78-e47f585571b2_1",
    position: "Defender",
    dateOfBirth: "1989-03-02",
    nationality: "Belgium"
  },
  {
    name: "Son Heungmin",
    image:
      "http://www.livenewsmalta.com/wp-content/uploads/2019/04/son-spurs.jpg",
    position: "Midfielder",
    dateOfBirth: "1992-07-08",
    nationality: "Korea Republic"
  },
  {
    name: "Christian Eriksen",
    image:
      "https://www.telegraph.co.uk/content/dam/football/2019/04/23/TELEMMGLPICT000195009181_trans_NvBQzQNjv4BqwD2sfO9joeQ6RY-qlTATNB2cSHopZMn-aCc647VHTAY.jpeg?imwidth=450",
    position: "Midfielder",
    dateOfBirth: "1992-02-14",
    nationality: "Denmark"
  },
  {
    name: "Harry Kane",
    image:
      "https://pbs.twimg.com/profile_images/1158789165665914880/Ws83En9p_400x400.jpg",
    position: "Attacker",
    dateOfBirth: "1993-07-28",
    nationality: "England"
  },
  {
    name: "David De Gea",
    image:
      "https://www.telegraph.co.uk/content/dam/football/2018/12/06/TELEMMGLPICT000180232818_trans_NvBQzQNjv4Bq1F9N6pUIu4QWFka9jlJHP85OzlKdUz0PC2MbmKNtvfE.jpeg?imwidth=450",
    position: "Goalkeeper",
    dateOfBirth: "1990-11-07",
    nationality: "Spain"
  },
  {
    name: "Marcus Rashford",
    image:
      "https://www.telegraph.co.uk/content/dam/football/2019/02/04/TELEMMGLPICT000187405021_trans_NvBQzQNjv4BqM1jqde5a-OJSmCYBLBIfDeQoIIKJKPmtQqA3pbT6ucE.jpeg?imwidth=450",
    position: "Attacker",
    dateOfBirth: "1997-10-31",
    nationality: "England"
  },
  {
    name: "Ederson",
    image: "https://s.hs-data.com/bilder/spieler/gross/218208.jpg",
    position: "Goalkeeper",
    dateOfBirth: "1993-08-17",
    nationality: "Brazil"
  },
  {
    name: "David Silva",
    image:
      "https://www.telegraph.co.uk/content/dam/football/2019/12/13/TELEMMGLPICT000218610158_trans_NvBQzQNjv4Bqqe94gVf5fwATDoCZ63F3bFnimEKN_wSPya1OD16I6gM.jpeg?imwidth=480",
    position: "Midfielder",
    dateOfBirth: "1986-01-08",
    nationality: "Spain"
  },
  {
    name: "Bernardo Silva",
    image:
      "https://i1.wp.com/metro.co.uk/wp-content/uploads/2018/10/gettyimages-1052598012.jpg?quality=90&strip=all&zoom=1&resize=644%2C484&ssl=1",
    position: "Midfielder",
    dateOfBirth: "1994-08-10",
    nationality: "Portugal"
  },
  {
    name: "Raheem Sterling",
    image:
      "https://cdn.images.express.co.uk/img/dynamic/67/590x/Raheem-Sterling-Barcelona-Liverpool-930357.jpg",
    position: "Attacker",
    dateOfBirth: "1994-12-08",
    nationality: "England"
  },
  {
    name: "Sergio Agüero",
    image:
      "https://ichef.bbci.co.uk/news/660/cpsprodpb/C4DB/production/_109259305_aguero_reuters.jpg",
    position: "Attacker",
    dateOfBirth: "1988-06-02",
    nationality: "Argentina"
  },
  {
    name: "Pierre-Emerick Aubameyang",
    image:
      "https://www.telegraph.co.uk/content/dam/football/2019/04/12/TELEMMGLPICT000194035316_trans_NvBQzQNjv4BqkzRVrpaG8pgYx8zuruU0oLxVMM-N2Dh3uu4C0ivbnMw.jpeg?imwidth=450",
    position: "Attacker",
    dateOfBirth: "1989-06-18",
    nationality: "Gabon"
  },
  {
    name: "Kasper Schmeichel",
    image:
      "https://i2-prod.leicestermercury.co.uk/sport/football/article3397172.ece/ALTERNATES/s615/0_Kasper-Schmeichel.jpg",
    position: "Goalkeeper",
    dateOfBirth: "1986-11-05",
    nationality: "Denmark"
  },
  {
    name: "Ricardo Pereira",
    image:
      "https://i2-prod.leicestermercury.co.uk/sport/football/article3348271.ece/ALTERNATES/s615/0_Ricardo-Pereira-50.jpg",
    position: "Defender",
    dateOfBirth: "1993-10-06",
    nationality: "Portugal"
  },
  {
    name: "Jamie Vardy",
    image: "https://s.hs-data.com/bilder/spieler/gross/201640.jpg",
    position: "Attacker",
    dateOfBirth: "1987-01-11",
    nationality: "England"
  },
  {
    name: "N'Golo Kanté",
    image:
      "https://specials-images.forbesimg.com/imageserve/5c5e21e14bbe6f4f84e48284/416x416.jpg?background=000000&cropX1=802&cropX2=3071&cropY1=91&cropY2=2363",
    position: "Midfielder",
    dateOfBirth: "1991-03-29",
    nationality: "France"
  }
];

// Export the array. This makes it accessible to other files using require.
module.exports = bestPlayers;
