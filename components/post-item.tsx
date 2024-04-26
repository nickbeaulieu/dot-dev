import Link from "next/link";

type Props = {
  title: string;
  link: string;
  date: string;
};

export const PostItem = ({ title, link, date }: Props) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <Link href={link}>{title}</Link>
      <span className="ml-4 w-20">{date}</span>
    </div>
  );
};
