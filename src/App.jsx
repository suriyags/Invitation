import React, { useEffect, useState } from "react";

function App() {
  const [page, setPage] = useState("cover");

  useEffect(() => {
    if (page !== "opening-invitation") return undefined;

    const timer = window.setTimeout(() => setPage("invitation"), 950);
    return () => window.clearTimeout(timer);
  }, [page]);

  return (
    <main className={`wedding-scene page-${page}`}>
      {page === "cover" && (
        <section className="plain-cover" aria-label="Wedding invitation cover">
          <div className="cover-art">
            <img
              className="cover-artwork"
              src={`${import.meta.env.BASE_URL}blue-floral-wedding-cover.png`}
              alt="Blue floral wedding invitation cover with a Ganesh medallion and gold nameplate"
            />
            <span className="cover-nameplate" aria-label="Suriya and Nisha">
              SURIYA &amp; NISHA
            </span>
            <button
              className="round-open"
              type="button"
              onClick={() => setPage("opening-invitation")}
              aria-label="Open Suriya and Nisha's wedding invitation"
            />
          </div>
        </section>
      )}

      {page !== "cover" && (
        <section
          className={`invitation-stage phase-${page}`}
          aria-label="Wedding invitation followed by the save-the-date page"
        >
          <div className="invitation-pages">
            <div className="invitation-art">
              <img
                className="invitation-page-image"
                src={`${import.meta.env.BASE_URL}blue-floral-wedding-invitation.png`}
                alt="Wedding invitation for Suriya and Nisha at SSR Palace, Red Hills, Chennai"
              />
            </div>
            <div className="save-date-art">
              <img
                className="invitation-page-image"
                src={`${import.meta.env.BASE_URL}blue-floral-save-the-date.png`}
                alt="Save the Date poster with the November 2026 calendar and November 24 and 25 highlighted"
                loading="lazy"
                decoding="async"
              />
              <div className="event-schedule" aria-label="Wedding events">
                <div className="event-row" aria-label="24th November: Reception, 6:00 PM onwards">
                  <span className="event-date" aria-hidden="true">
                    <span>24</span>
                    <sup>th</sup>
                  </span>
                  <span className="event-details">
                    <strong>Reception</strong>
                    <span>6:00 PM onwards</span>
                  </span>
                </div>
                <div className="event-row" aria-label="25th November: Muhurtham, 9:00 to 10:30 AM">
                  <span className="event-date" aria-hidden="true">
                    <span>25</span>
                    <sup>th</sup>
                  </span>
                  <span className="event-details">
                    <strong>Muhurtham</strong>
                    <span>9:00–10:30 AM</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="invitation-actions">
              <a
                className="text-button calendar-link"
                href="data:text/calendar;charset=utf-8,BEGIN%3AVCALENDAR%0AVERSION%3A2.0%0ABEGIN%3AVEVENT%0ADTSTART%3BVALUE%3DATE%3A20261124%0ADTEND%3BVALUE%3DATE%3A20261126%0ASUMMARY%3ASuriya%20weds%20Nisha%0ALOCATION%3ASSR%20Palace%2C%20Red%20Hills%2C%20Chennai%0ADESCRIPTION%3AWedding%20celebration%20of%20Suriya%20and%20Nisha.%0AEND%3AVEVENT%0AEND%3AVCALENDAR"
                download="suriya-weds-nisha.ics"
              >
                Add to calendar
              </a>
              <button
                className="restart-button"
                type="button"
                onClick={() => setPage("cover")}
              >
                Return to cover
              </button>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
