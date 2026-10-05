import type { ImageMetadata } from "astro";
import fetish from "../assets/images/covers/fetish.webp";
import jane from "../assets/images/covers/jane.webp";
import eradication from "../assets/images/covers/eradication-of-smallpox.webp";
import meat from "../assets/images/covers/meat-of-the-horse.webp";
import attila from "../assets/images/covers/attila.webp";

export const ATTILA_PRESS = "https://www.attilapress.com";

export interface Book {
  slug: string;
  title: string;
  shortTitle: string;
  genre: string;
  badge?: string;
  cover: ImageMetadata;
  coverAlt: string;
  lede: string;
  body: string[];
  /** Sample chapters live at /<slug>/<chapter>/ */
  hasExcerpt: boolean;
  buy: { label: string; href: string }[];
}

const stores = (amazon: string, thriftbooks: string) => [
  { label: "Buy from Amazon", href: amazon },
  { label: "Buy from Thriftbooks", href: thriftbooks },
];

/** Store search links for books without a known product page */
const search = (title: string) => {
  const q = encodeURIComponent(`${title} Jamey Gittings`);
  return stores(`https://www.amazon.com/s?k=${q}&i=stripbooks`, `https://www.thriftbooks.com/browse/?b.search=${q}`);
};

export const books: Book[] = [
  {
    slug: "fetish",
    title: "Fetish",
    shortTitle: "Fetish",
    genre: "Magical Realism",
    badge: "New",
    cover: fetish,
    coverAlt: "Cover of Fetish — a carved stone fetish above a desert landscape",
    lede: "With the delivery of a cigar box containing ancient Zuni fetishes and an exquisite obsidian knife, Tasha finds herself propelled, from her comfortable existence in the New York financial world into an odyssey of spirituality, self-discovery, and magic.",
    body: [
      "Forced to contend with her mixed Native American and Anglo heritage, the effects of her cerebral palsy, and a troubled past, she reluctantly assumes the mantle of shaman for her tribe, as she stumbles through the dangerous alchemy necessity to her survival in a struggle to transform imbalance into balance, as she creates a place for herself among her people and her ancestors.",
    ],
    hasExcerpt: true,
    buy: search("Fetish"),
  },
  {
    slug: "jane",
    title: "Jane",
    shortTitle: "Jane",
    genre: "Coming of Age",
    cover: jane,
    coverAlt: "Cover of Jane — a red devil surfing a mint-green wave",
    lede: "Her name was Jane Deriksson, and I was in love with her. She was my girlfriend’s mother, and I had just turned nineteen. That’s the end of my story.",
    body: [
      "It was summer 1967 in New Jersey, at a place called Long Beach Island. I had just graduated from high school and had accompanied my father back East on a trip to visit his two sisters, Clair and Isobel. That’s the beginning.",
      "But there’s a lot in the middle.",
    ],
    hasExcerpt: false,
    buy: [
      {
        label: "Buy from Amazon",
        href: "https://www.amazon.com/Jane-Jamey-Gittings/dp/B0F2ZNGJJQ",
      },
      {
        label: "Buy from Thriftbooks",
        href: "https://www.thriftbooks.com/w/jane_jamey-gittings/55230389/all-editions/",
      },
    ],
  },
  {
    slug: "eradication-of-smallpox",
    title: "On the Eradication of Smallpox and the Intractability of Raccoons",
    shortTitle: "Eradication of Smallpox",
    genre: "Mystery · Ironic Justice",
    cover: eradication,
    coverAlt:
      "Cover of On the Eradication of Smallpox and the Intractability of Raccoons — a raccoon and a syringe on red, white and blue",
    lede: "Ned Alexander is a freshly minted journalism school graduate, under-experienced and over-educated, and he just pulled down “the last job in town” in Tucson, Arizona. As Ned notes, “If people know you’re from Harvard, they’ll hire you so they can tell you what to do, and feel good when you screw up.”",
    body: [
      "When proponents of the death penalty begin showing up dead themselves, Ned has no time for screw-ups, and he has to draw on all of his background, connections, and problem-solving skills to get to the bottom of matters, all the while navigating the challenges posed by a new boss, an inscrutable co-worker, and a group that advances its aims by working in the shadows and in the sunlight. At every step—from Arizona to Texas to Tennessee to Virginia and D.C.—there are people to meet, mysteries to unravel, and local law enforcement that sees Ned not as a journalist at the nexus of a compelling story but perhaps as the answer to what’s going on and an easy scapegoat.",
      "Told in a smart, fast-paced way, On the Eradication of Smallpox and the Intractability of Raccoons is both a raucous ride and an illuminating, timeless examination of our politics, our progress and regress, and our recessions from reason.",
    ],
    hasExcerpt: true,
    buy: search("On the Eradication of Smallpox and the Intractability of Raccoons"),
  },
  {
    slug: "meat-of-the-horse",
    title: "Meat of the Horse",
    shortTitle: "Meat of the Horse",
    genre: "Mystery · Ironic Justice",
    cover: meat,
    coverAlt: "Cover of Meat of the Horse — a line drawing of a horse’s head on tan paper",
    lede: "Ned Alexander, a reporter at large for an American newspaper, has alighted in Paris after pursuing a long, dangerous, emotional story in India and Nepal. All he wants is some relaxation and recharging, but interesting—and often deadly—occurrences have a way of finding him.",
    body: [
      "Before he’s even had time to sleep, Ned is plunged into a unique drama of international intrigue. Human body parts have found their way into horsemeat entrees served by one of the city’s finest restaurants, a prominent American politician has gone missing, and Ned has found allies in his assistant back at his paper, a beautiful doctor and the most precocious nine-year-old girl anyone is likely to meet.",
      "In this story spanning newsrooms in Arizona and Montana, hotels and restaurants, and underground clubs in France, slaughterhouse backrooms in Canada and wild mustang ranges of the high plains, Ned tugs at loose ends, trying to discover where they lead. Amid the surprising turns, profound truths are revealed about where common good and craven self-interests converge and depart, the malignant forces that hide in plain sight, and the renewal of love.",
    ],
    hasExcerpt: true,
    buy: stores(
      "https://www.amazon.com/Meat-Horse-Jamey-Gittings/dp/1792357559",
      "https://www.thriftbooks.com/w/meat-of-the-horse/34566987/",
    ),
  },
  {
    slug: "attila",
    title: "Knock Three Times and Ask for Attila",
    shortTitle: "Knock Three Times",
    genre: "Science Fiction",
    cover: attila,
    coverAlt: "Cover of Knock Three Times and Ask for Attila — a line drawing of a face in a fur hat",
    lede: "This is a work of science and fantasy that chronicles the lives and trajectories of 15 young people with Down Syndrome who are subjects in a federal gene replacement therapy experiment that makes the subjects not only as smart as normal (typical) people, but far smarter— geniuses in fact.",
    body: [
      "The narrator, Mason Free, tells the story of his personal transformation from “retard to genius,” documenting the progress of the group as it becomes a shadow global intellectual force. Often irreverent and sometimes politically incorrect, Mason and his cohorts grapple with cultural and personal biases, the nature of intellect itself, and what it means to be vulnerable, while addressing the societal ills of climate change, environmental destruction, cultural and racial prejudice, wealth inequality, and religious intolerance.",
      "Along the way, Mason falls in love and reflects on the nature and power of that love, not only for his girlfriend, Holly, but for his divorced parents, and humanity in general. The story, informed by the author’s own experiences in the field and burnished by imagination, is by turns hopeful and cynical, a work of fiction and a stark warning.",
    ],
    hasExcerpt: true,
    buy: search("Knock Three Times and Ask for Attila"),
  },
];

export const getBook = (slug: string) => books.find(b => b.slug === slug);
