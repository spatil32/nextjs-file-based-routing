import { getAllEvents, getFilteredEvents } from "../../dummy-data";
import { useRouter } from "next/router";
import { EventList } from "../../components/events/event-list";
import { EventsSearch } from "../../components/events/events-search";

const AllEventsPage = () => {
  const { push } = useRouter();
  const events = getAllEvents();

  const searchEvent = (year, month) => {
    push(`/events/${year}/${month}`);
  };

  return (
    <div>
      <EventsSearch onSearch={searchEvent} />
      <EventList events={events} />
    </div>
  );
};

export default AllEventsPage;
