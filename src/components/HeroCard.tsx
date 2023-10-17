import Link from "next/link";

interface ICards {
  title: string;
  description: string;
  href: string;
}

const cards: ICards[] = [
  {
    title: "Exercise",
    description: `Tone up with Shape me up for a better you. With our exercise program,
        you can achieve the body you've always wanted in no time!`,
    href: "exercises",
  },
  {
    title: "Coach",
    description: `Tone up, firm up, and sculpt your body into the shape you've always
        wanted with the help of a workout coach! These personal coaches will
        help motivate you to reach your fitness goals.`,
    href: "coaches",
  },
  {
    title: "Classes",
    description:
      "Searching for a way to work out? With us, you can get results faster than you ever thought possible.",
    href: "classes",
  },
];



interface HeroCardProps {
  hideLink?: boolean;
}

const HeroCard: React.FC<HeroCardProps> = ({ hideLink }: HeroCardProps) => {


  return (
    <div className="flex flex-col lg:flex-row flex-wrap items-start justify-evenly gap-5 lg:gap-10 px-8 pb-10 bg-gray-100 relative -top-10">
      {cards.map((card) => (
        <div
          className="flex-1 min-h-[250px] rounded-xl bg-gray-50 shadow-xl w-full sm:w-fit p-6 flex flex-col items-stretch justify-between h-full space-y-5 place-content-stretch relative -top-10"
          key={card.href}
        >
          <h3 className="text-xl font-bold">{card.title}</h3>
          <p className="font-medium text-lg">{card.description}</p>
          {!hideLink && <Link href={`/${card.href}`} className="text-[#f2994a] text-base">
            more
          </Link>}
        </div>
      ))}
    </div>
  );
};

export default HeroCard;
