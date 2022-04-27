const data = {
  categories: [
    {
      name: "Home",
      description: "",
      location: "/",
    },
    {
      name: "Hip-Hop",
      description: "",
      location: "/hip-hop",
      slug: "hip-hop",
      sub_categories: [
        { name: "Hip-Hop Albums", description: "" },
        { name: "Hip-Hop Eps", description: "" },
        { name: "Hip-Hop Singles", description: "" },
      ],
    },
    {
      name: "Gospel",
      description: "",
      location: "/gospel",
      slug: "gospel",
      sub_categories: [
        { name: "Gospel Albums", description: "" },
        { name: "Gospel Eps", description: "" },
        { name: "Gospel Singles", description: "" },
      ],
    },
    {
      name: "Naija",
      description: "",
      location: "/naija",
      slug: "naija",
      sub_categories: [
        { name: "Naija Albums", description: "" },
        { name: "Naija Eps", description: "" },
        { name: "Naija Singles", description: "" },
      ],
    },
  ],
  posts: [
    {
      picture: "/cover.jpg",
      artist: "Winky D",
      category: "Dancehall",
      sub_category: "Dancehall Albums",
      item_name: "Gafa Life",
      description:
        "I ma a description of an album and othe stuff what ehatr ot a sigl faluhoad  aduyasdjhhlk",
      _id: "12jhjhuyu7",
    },
    {
      picture: "/cover.jpg",
      artist: "WizKid",
      category: "Hip-Hop",
      sub_category: "Hip-Hop Albums",
      item_name: "New album without name",
      description: "I ma a this is the second post .. chek if it is working ",
      _id: "1huy1287",
    },
  ],
};

export default data;
