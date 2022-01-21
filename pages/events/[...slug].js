import { getFilteredEvents } from "../../dummy-data";
import { useRouter } from "next/router";
import { EventList } from "../../components/events/event-list";
import ResultTitle from "../../components/events/results-title";
import { Button } from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

const FilteredEvents = () => {
  const { query } = useRouter();

  const filterData = query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const year = +filterData[0];
  const month = +filterData[1];

  if (isNaN(year) || isNaN(month) || year > 2030 || month < 1 || month > 12) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid Filters. Please correct the values!</p>
        </ErrorAlert>
        <div className="center">
          <Button href="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({ year, month });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for selected filters.</p>
        </ErrorAlert>
        <div className="center">
          <Button href="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  return (
    <>
      <ResultTitle date={new Date(year, month - 1)} />
      <EventList events={filteredEvents} />
    </>
  );
};

export default FilteredEvents;
