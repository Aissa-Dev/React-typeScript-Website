//Import Images
import narcos1 from "./img/narcos1.jpg";
import narcos2 from "./img/narcos2.jpg";
import prisonbreak1 from "./img/prisonbreak1.jpg";
import prisonbreak2 from "./img/prisonbreak2.jpg";
import breakingbad1 from "./img/breakingbad1.jpg";
import breakingbad2 from "./img/breakingbad2.jpg";

export const MovieState = () => {
  return [
    {
      title: "Narcos",
      mainImg: narcos1,
      secondaryImg: narcos2,
      url: "/work/narcos",
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”"
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”"
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”"
        }
      ]
    },
    {
      title: "Breaking Bad",
      mainImg: breakingbad1,
      url: "/work/breaking-bad",
      secondaryImg: breakingbad2,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”"
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”"
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”"
        }
      ]
    },
    {
      title: "Prison Break",
      mainImg: prisonbreak1,
      url: "/work/prison-break",
      secondaryImg: prisonbreak2,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”"
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”"
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”"
        }
      ]
    }
  ];
};
