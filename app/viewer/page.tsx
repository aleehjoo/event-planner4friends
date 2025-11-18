import {
  CalendarDays,
  CheckCircle2,
  Clock,
  HelpCircle,
  ListChecks,
  MapPin,
  MessageCircle,
  Share2,
  Sparkles,
  Users,
  XCircle,
} from "lucide-react";

const primaryEvent = {
  title: "Beach Bonanza!",
  host: "Taylor Morgan",
  coverImage: "https://via.placeholder.com/1200x700?text=Beach+Bonanza",
  date: "Saturday, Nov 16",
  time: "10:00 AM – 6:30 PM",
  location: "Sunset Cove, San Diego",
  meetingPoint: "Pier 3 boardwalk entrance",
  description:
    "Sunscreen, playlists, and everyone you miss hanging out with. We’ll claim a cabana, set up beach games, and end the night with a bonfire s'mores session.",
};

const schedule = [
  {
    time: "10:00 AM",
    title: "Meet at the boardwalk",
    detail: "Quick coffee + sunscreen while we wait for the crew.",
  },
  {
    time: "11:00 AM",
    title: "Water + sand games",
    detail: "Spikeball sets, paddle boards, and a just-for-fun relay.",
  },
  {
    time: "2:00 PM",
    title: "Lunch picnic",
    detail: "Build-your-own taco bar. Gluten-free + veggie options included.",
  },
  {
    time: "4:30 PM",
    title: "Golden hour photos",
    detail: "Group photos + candid film cam drop-off.",
  },
  {
    time: "5:30 PM",
    title: "Bonfire wind-down",
    detail: "S'mores, chill playlists, and last call for sunset swims.",
  },
];

const attendees = [
  { name: "Courtney", note: "Bringing cooler", status: "going" },
  { name: "Marcus", note: "In for volleyball", status: "going" },
  { name: "Anika", note: "Driving from LA", status: "maybe" },
  { name: "Leo", note: "Babysitter pending", status: "maybe" },
  { name: "Steph", note: "Has to leave early", status: "going" },
  { name: "George", note: "Out this time", status: "notGoing" },
];

const packingList = [
  "Towel or blanket",
  "Reusable water bottle",
  "Hat / sunscreen",
  "Something for the snack table",
];

const updates = [
  {
    author: "Taylor",
    content: "Parking fills up fast—aim for the north lot or rideshare.",
    timestamp: "Today • 8:12 AM",
  },
  {
    author: "Courtney",
    content: "Got extra ice packs + a speaker. Drop playlist recs?",
    timestamp: "Yesterday • 6:41 PM",
  },
];

const statusStyles = {
  going: "bg-emerald-50 text-emerald-700 border-emerald-100",
  maybe: "bg-amber-50 text-amber-700 border-amber-100",
  notGoing: "bg-rose-50 text-rose-700 border-rose-100",
};

const statusIcon = {
  going: CheckCircle2,
  maybe: HelpCircle,
  notGoing: XCircle,
};

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              Viewer Mode
            </p>
            <h1 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              {primaryEvent.title}
            </h1>
            <p className="text-sm text-gray-500">Hosted by {primaryEvent.host}</p>
          </div>
          <button className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50">
            <Share2 className="h-4 w-4" />
            Share plan
          </button>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-5 py-10">
        <section className="grid gap-6 lg:grid-cols-[2.1fr_1fr]">
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
              <img
                src={primaryEvent.coverImage}
                alt={primaryEvent.title}
                className="h-[320px] w-full object-cover sm:h-[360px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wide text-white/80">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 font-semibold">
                    <CalendarDays className="h-4 w-4" />
                    {primaryEvent.date}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 font-semibold">
                    <Clock className="h-4 w-4" />
                    {primaryEvent.time}
                  </span>
                </div>
                <h2 className="mt-4 text-3xl font-semibold">{primaryEvent.title}</h2>
                <p className="mt-2 text-sm text-white/80">
                  {primaryEvent.description}
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-400">
                      Where to meet
                    </p>
                    <p className="text-sm font-semibold text-gray-900">
                      {primaryEvent.location}
                    </p>
                    <p className="text-xs text-gray-500">
                      Meet at {primaryEvent.meetingPoint}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-400">
                      Vibes + notes
                    </p>
                    <p className="text-sm font-semibold text-gray-900">
                      Bring layers & curiosity
                    </p>
                    <p className="text-xs text-gray-500">
                      Playlist link drops day-of in the chat.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Itinerary
                </h3>
                <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600">
                  <ListChecks className="h-4 w-4" />
                  Subject to weather
                </span>
              </div>

              <ul className="mt-6 space-y-6 border-l-2 border-dashed border-gray-200 pl-6">
                {schedule.map((block, index) => (
                  <li key={block.time} className="relative">
                    <div className="absolute -left-[30px] top-1.5 h-3 w-3 rounded-full border-4 border-white bg-blue-600 shadow" />
                    <p className="text-xs uppercase tracking-wide text-gray-400">
                      {block.time}
                    </p>
                    <p className="text-base font-semibold text-gray-900">
                      {block.title}
                    </p>
                    <p className="text-sm text-gray-500">{block.detail}</p>
                    {index !== schedule.length - 1 && (
                      <div className="absolute -left-6 bottom-[-24px] h-6 border-l border-dashed border-gray-200 sm:bottom-[-20px]" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-400">
                    RSVP Summary
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-900">9 friends</h3>
                </div>
                <Users className="h-10 w-10 text-blue-600" />
              </div>
              <div className="mt-5 grid gap-3 text-sm">
                <div className="flex items-center justify-between rounded-2xl bg-emerald-50 px-4 py-2 text-emerald-700">
                  <span className="inline-flex items-center gap-2 font-medium">
                    <CheckCircle2 className="h-4 w-4" />
                    Going
                  </span>
                  <span className="font-semibold">5</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-amber-50 px-4 py-2 text-amber-700">
                  <span className="inline-flex items-center gap-2 font-medium">
                    <HelpCircle className="h-4 w-4" />
                    Maybe
                  </span>
                  <span className="font-semibold">3</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-rose-50 px-4 py-2 text-rose-700">
                  <span className="inline-flex items-center gap-2 font-medium">
                    <XCircle className="h-4 w-4" />
                    Out
                  </span>
                  <span className="font-semibold">1</span>
                </div>
              </div>
              <button className="mt-5 w-full rounded-2xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700">
                Send RSVP reminder
              </button>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">What to bring</h3>
              <p className="text-sm text-gray-500">
                Pack smart so we can stay outside longer.
              </p>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                {packingList.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-xs font-semibold text-gray-600">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-dashed border-gray-300 bg-white/80 p-6 text-center shadow-inner">
              <MessageCircle className="mx-auto h-8 w-8 text-gray-400" />
              <p className="mt-3 text-sm font-semibold text-gray-900">
                Join the event chat
              </p>
              <p className="text-xs text-gray-500">
                Updates and playlists drop there in real time.
              </p>
              <button className="mt-4 w-full rounded-2xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                Open group thread
              </button>
            </div>
          </aside>
        </section>

        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Attendees</h3>
            <span className="text-xs text-gray-500">
              Tap a friend to see what they&apos;re bringing
            </span>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {attendees.map((friend) => {
              const Icon = statusIcon[friend.status as keyof typeof statusIcon];
              return (
                <div
                  key={friend.name}
                  className={`flex items-center gap-4 rounded-2xl border p-4 shadow-sm transition hover:translate-y-[-2px] ${statusStyles[friend.status as keyof typeof statusStyles]}`}
                >
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-white/70 text-base font-semibold text-gray-900 shadow-inner">
                    {friend.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">
                      {friend.name}
                    </p>
                    <p className="text-xs text-gray-600">{friend.note}</p>
                  </div>
                  <Icon className="h-5 w-5 flex-none" />
                </div>
              );
            })}
          </div>
        </section>

        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2 text-gray-900">
            <MessageCircle className="h-5 w-5 text-blue-600" />
            <h3 className="text-lg font-semibold">Latest updates</h3>
          </div>
          <div className="mt-5 space-y-4">
            {updates.map((update) => (
              <article key={update.timestamp} className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-gray-900">
                    {update.author}
                  </p>
                  <span className="text-xs text-gray-500">{update.timestamp}</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">{update.content}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;
