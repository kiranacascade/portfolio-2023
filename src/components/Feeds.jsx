import { PencilIcon, CommandLineIcon, CodeBracketIcon, AcademicCapIcon } from "@heroicons/react/20/solid";

const timeline = [
  {
    id: 1,
    content: "Graduated in",
    target: "Visual Communication Design",
    href: "#",
    date: "2019",
    datetime: "2019-09-05",
    icon: AcademicCapIcon,
    iconBackground: "bg-purple-400",
  },
  {
    id: 2,
    content: "Began crafting designs as a",
    target: "Graphic Designer",
    href: "#",
    date: "2019",
    datetime: "2019-09-22",
    icon: PencilIcon,
    iconBackground: "bg-pink-400",
  },
  {
    id: 3,
    content: "Embraced self-taught",
    target: "Web Development",
    href: "#",
    date: "2022",
    datetime: "2022-07-28",
    icon: CodeBracketIcon,
    iconBackground: "bg-orange-400",
  },
  {
    id: 4,
    content: "Mastery achieved:",
    target: "Full Stack Web Development at Purwadhika",
    href: "#",
    date: "2023",
    datetime: "2023-07-30",
    icon: CommandLineIcon,
    iconBackground: "bg-yellow-400",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Feeds() {
  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8 pt-1">
              {eventIdx !== timeline.length - 1 ? <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-white" aria-hidden="true" /> : null}
              <div className="relative flex space-x-3  bg-white py-1 pr-3 rounded-lg shadow-md">
                <div>
                  <span className={classNames(event.iconBackground, "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white")}>
                    <event.icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5  ">
                  <div>
                    <p className="text-sm text-gray-500">
                      {event.content} <span className="font-medium text-gray-900">{event.target}</span>
                    </p>
                  </div>
                  <div className="whitespace-nowrap text-right text-sm font-semibold text-slate-400">
                    <time dateTime={event.datetime}>{event.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
