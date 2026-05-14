const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const rosters = {
  "2025/2026": {
    Varsity: [
      { cap: "1", last: "Burke", first: "Peyton (G)" },
      { cap: "1a", last: "Gonzalez", first: "Brianna (G)" },
      { cap: "3", last: "Donlevy", first: "Erin" },
      { cap: "4", last: "Campion", first: "Riley" },
      { cap: "5", last: "Irvin", first: "Rebecca" },
      { cap: "6", last: "Marian", first: "Catalina" },
      { cap: "7", last: "Mullenhoff", first: "Sarabeth" },
      { cap: "8", last: "Le", first: "Caroline" },
      { cap: "10", last: "McCracken", first: "Emma" },
      { cap: "11", last: "Bullock", first: "Vivian" },
      { cap: "12", last: "Alexander", first: "Allison" },
      { cap: "14", last: "Ghilidiyal", first: "Jaanvi" },
      { cap: "15", last: "Wys", first: "Avah" },
      { cap: "16", last: "Morgan", first: "Ella" },
      { cap: "18", last: "Gentzschein", first: "Laura" },
    ],
    JV: [
      { cap: "1", last: "Fyfe", first: "Isabella (G)" },
      { cap: "1a", last: "Raker", first: "Darya (G)" },
      { cap: "2", last: "Collins", first: "Reagan" },
      { cap: "3", last: "Dionosio", first: "Giulia" },
      { cap: "4", last: "Gibson", first: "Tatum" },
      { cap: "5", last: "Goodwin", first: "Alexa" },
      { cap: "6", last: "Miller", first: "Brooke" },
      { cap: "7", last: "Sandblom", first: "Noa" },
      { cap: "8", last: "Snyder", first: "Reese" },
      { cap: "9", last: "Tate", first: "Hannah" },
      { cap: "10", last: "Buckley", first: "Madison" },
      { cap: "11", last: "Coyne", first: "Annie" },
      { cap: "12", last: "Jolls", first: "Riley" },
      { cap: "13", last: "Morgan", first: "Ella" },
      { cap: "14", last: "Paul", first: "Sky" },
    ],
    FS: [
      { cap: "1", last: "Schroder", first: "Rose (G)" },
      { cap: "2", last: "Anderson", first: "Emma" },
      { cap: "3", last: "Bayiz", first: "Defne" },
      { cap: "4", last: "Brogan", first: "Anabelle" },
      { cap: "5", last: "Guttig", first: "Emma" },
      { cap: "6", last: "McCarthy", first: "Maddy" },
      { cap: "7", last: "Odell", first: "Emma" },
      { cap: "8", last: "Roisman", first: "Natalie" },
      { cap: "9", last: "Smith", first: "Sophia" },
      { cap: "10", last: "Snyder", first: "Chloe" },
    ],
  },
};
const results = {
  "26/27 Game Schedule": [
    { day: "Tuesday", date: "12/1", opponent: "Santa Monica", location: "Santa Monica HS", time: "", level: "" },
    { day: "Fri-Sat", date: "12/3-12/4", opponent: "Mistletoe Tournament", location: "TBD", time: "", level: "V" },
    { day: "Thu-Sat", date: "12/10-12/12", opponent: "Villa Park Tournament", location: "TBD", time: "", level: "V" },
    { day: "Tuesday", date: "12/15/26", opponent: "El Segundo", location: "Mira Costa HS", time: "", level: "" },
    { day: "Tuesday", date: "1/5/27", opponent: "Palos Verdes", location: "Mira Costa HS", time: "", level: "" },
    { day: "Thursday", date: "1/7/27", opponent: "Redondo", location: "Redondo HS", time: "", level: "" },
    { day: "Thursday", date: "1/14/27", opponent: "El Segundo", location: "ESAC", time: "", level: "" },
    { day: "Fri-Sat", date: "1/15-1/16", opponent: "Oceanview Tournament", location: "TBD", time: "", level: "V" },
    { day: "Tuesday", date: "1/19/27", opponent: "Santa Monica", location: "Mira Costa HS", time: "", level: "" },
    { day: "Thursday", date: "1/21/27", opponent: "Palos Verdes", location: "Palos Verdes HS", time: "", level: "" },
    { day: "Tuesday", date: "1/26/27", opponent: "Redondo", location: "Mira Costa HS", time: "", level: "" },
  ],
  "25/26 Season": [
    { opponent: "LB Wilson", score: "6-21", result: "Loss", level: "TBD" },
    { opponent: "Harvard Westlake", score: "3-13", result: "Loss", level: "TBD" },
    { opponent: "LB Millikan", score: "9-15", result: "Loss", level: "TBD" },
    { opponent: "Carpinteria", score: "8-6", result: "Win", level: "TBD" },
    { opponent: "Westlake", score: "16-6", result: "Win", level: "TBD" },
    { opponent: "Santa Barbara", score: "10-12", result: "Loss", level: "TBD" },
    { opponent: "Rio Mesa", score: "23-4", result: "Win", level: "TBD" },
    { opponent: "Bishops", score: "3-22", result: "Loss", level: "TBD" },
    { opponent: "Capo Valley", score: "12-5", result: "Win", level: "TBD" },
    { opponent: "Mt Carmel", score: "11-6", result: "Win", level: "TBD" },
    { opponent: "Huntington Beach", score: "2-9", result: "Loss", level: "TBD" },
    { opponent: "Camarillo", score: "6-11", result: "Loss", level: "TBD" },
    { opponent: "Penninsula", score: "22-6", result: "Win", level: "TBD" },
    { opponent: "El Segundo", score: "13-7", result: "Win", level: "TBD" },
    { opponent: "Jserra", score: "2-22", result: "Loss", level: "TBD" },
    { opponent: "Agoura", score: "4-12", result: "Loss", level: "TBD" },
    { opponent: "Santa Barbara", score: "10-12", result: "Loss", level: "TBD" },
    { opponent: "Marlborough", score: "4-16", result: "Loss", level: "TBD" },
    { opponent: "Rancho Cucamonga", score: "9-16", result: "Loss", level: "TBD" },
    { opponent: "West", score: "20-7", result: "Win", level: "TBD" },
    { opponent: "PV", score: "2-9", result: "Loss", level: "TBD" },
    { opponent: "Bonita", score: "4-8", result: "Loss", level: "TBD" },
    { opponent: "El Dorado", score: "13-6", result: "Win", level: "TBD" },
    { opponent: "Northwood", score: "6-5", result: "Win", level: "TBD" },
    { opponent: "Westridge", score: "16-12", result: "Win", level: "TBD" },
    { opponent: "Redondo", score: "6-7", result: "Loss", level: "TBD" },
    { opponent: "Penninsula", score: "20-7", result: "Win", level: "TBD" },
    { opponent: "Redondo", score: "6-5", result: "Win", level: "TBD" },
    { opponent: "PV", score: "8-13", result: "Loss", level: "TBD" },
    { opponent: "Agoura", score: "6-20", result: "Loss", level: "TBD" },
    { opponent: "Calabasas", score: "12-6", result: "Win", level: "TBD" },
    { opponent: "La Serna", score: "8-10", result: "Loss", level: "TBD" },
  ],
};
const seasonSummaries = {
  "25/26 Season": { year: "25/26", record: "14-18", league: "Bay 2nd", cif: "Division 2 Round 2" },
  "24/25": { year: "24/25", record: "", league: "Bay 4th", cif: "" },
  "23/24": { year: "23/24", record: "", league: "Bay 2nd", cif: "Division 2 Round 1" },
  "22/23": { year: "22/23", record: "", league: "Bay 1st", cif: "Division 1 Round 1" },
  "21/22": { year: "21/22", record: "", league: "Bay 1st", cif: "Division 1 Round 1" },
  "20/21": { year: "20/21", record: "", league: "Bay 1st", cif: "Division 2 Semifinalist" },
  "19/20": { year: "19/20", record: "", league: "Bay 1st", cif: "Division 3 Finalist" },
  "18/19": { year: "18/19", record: "", league: "Bay 1st", cif: "Division 3 Semifinalist" },
  "17/18": { year: "17/18", record: "", league: "Bay 2nd", cif: "Division 2 Round 1" },
  "16/17": { year: "16/17", record: "", league: "Bay 1st", cif: "Division 3 Round 2" },
  "15/16": { year: "15/16", record: "", league: "Bay 2nd", cif: "Division 3 Semifinalist" },
  "14/15": { year: "14/15", record: "", league: "Bay 1st", cif: "Division 3 Finalist" },
  "13/14": { year: "13/14", record: "", league: "Bay 1st", cif: "Division 3 Round 2" },
  "12/13": { year: "12/13", record: "", league: "Bay 2nd", cif: "Division 1 Round 1" },
  "11/12": { year: "11/12", record: "", league: "Bay 1st", cif: "Division 1 Round 1" },
  "10/11": { year: "10/11", record: "", league: "Bay 2nd", cif: "Division 2 Round 1" },
  "09/10": { year: "09/10", record: "", league: "Bay 2nd", cif: "Division 2 Round 1" },
};
const calendarMonths = [
  { key: "2026-05", label: "May 2026" },
  { key: "2026-06", label: "June 2026" },
  { key: "2026-07", label: "July 2026" },
  { key: "2026-08", label: "August 2026" },
  { key: "2026-09", label: "September 2026" },
  { key: "2026-10", label: "October 2026" },
  { key: "2026-11", label: "November 2026" },
  { key: "2026-12", label: "December 2026" },
  { key: "2027-01", label: "January 2027" },
  { key: "2027-02", label: "February 2027 TBD" },
];
const calendarEvents = {
  "2026-05-12": ["Booster Meeting"],
  "2026-05-19": ["2:30-4pm Pool"],
  "2026-05-21": ["2:30-4pm Pool"],
  "2026-05-26": ["2:30-4pm Pool"],
  "2026-05-28": ["2:30-4pm Pool"],
  "2026-06-02": ["2:30-4pm Pool"],
  "2026-06-04": ["2:30-4pm Pool"],
  "2026-06-12": ["Last Day of School", "Meeting TBD"],
  "2026-06-15": ["Summer Training"],
  "2026-06-16": ["6-8am Pool"],
  "2026-06-18": ["6-8am Pool"],
  "2026-06-23": ["6-8am Pool"],
  "2026-06-25": ["6-8am Pool"],
  "2026-06-30": ["6-8am Pool"],
  "2026-07-03": ["6-8am Pool"],
  "2026-07-07": ["6-8am Pool"],
  "2026-07-09": ["6-8am Pool"],
  "2026-07-14": ["6-8am Pool"],
  "2026-07-17": ["Girls JOs", "Dead Period"],
  "2026-07-18": ["Dead Period"],
  "2026-07-19": ["Girls JOs", "Dead Period"],
  "2026-07-20": ["Girls JOs", "Dead Period"],
  "2026-07-21": ["Girls JOs", "Dead Period"],
  "2026-07-22": ["Dead Period"],
  "2026-07-23": ["Dead Period"],
  "2026-07-24": ["Dead Period"],
  "2026-07-25": ["Dead Period"],
  "2026-07-26": ["Dead Period"],
  "2026-07-27": ["Dead Period"],
  "2026-07-28": ["Dead Period"],
  "2026-07-29": ["Dead Period"],
  "2026-07-30": ["Dead Period"],
  "2026-08-09": ["Boys First Contest"],
  "2026-08-17": ["First Day of School"],
  "2026-08-20": ["VT Weights 6-7am"],
  "2026-08-23": ["VT Weights 6-7am"],
  "2026-08-27": ["VT Weights 6-7am"],
  "2026-08-30": ["VT Weights 6-7am"],
  "2026-09-03": ["VT Weights 6-7am"],
  "2026-09-07": ["Labor Day", "All Pool TBD"],
  "2026-09-08": ["VT Weights 6-7am"],
  "2026-09-10": ["VT Weights 6-7am"],
  "2026-09-14": ["VT Weights 6-7am"],
  "2026-09-17": ["VT Weights 6-7am"],
  "2026-09-21": ["No School", "VT Weights 6-7am"],
  "2026-09-23": ["VT Weights 6-7am"],
  "2026-09-24": ["VT Weights 6-7am"],
  "2026-09-28": ["VT Weights 6-7am"],
  "2026-10-01": ["VT Weights 6-7am"],
  "2026-10-06": ["VT Weights 6-7am"],
  "2026-10-08": ["VT Weights 6-7am"],
  "2026-10-15": ["VT Weights 6-7am"],
  "2026-10-16": ["No School"],
  "2026-10-19": ["VT Weights 6-7am"],
  "2026-10-21": ["Boys Last Contest"],
  "2026-10-22": ["Training", "VT Weights 6-7am"],
  "2026-10-23": ["Training"],
  "2026-10-24": ["Training"],
  "2026-10-26": ["Training", "VT Weights 6-7am", "Boys CIF"],
  "2026-10-27": ["Training", "Boys CIF"],
  "2026-10-28": ["Training", "Boys CIF"],
  "2026-10-29": ["Training", "VT Weights 6-7am", "Boys CIF"],
  "2026-10-30": ["Training", "Boys CIF"],
  "2026-10-31": ["TBD", "Boys CIF"],
  "2026-11-01": ["Training", "VT Weights 6-7am", "Boys CIF"],
  "2026-11-02": ["Training", "Boys CIF"],
  "2026-11-03": ["Training", "Boys CIF"],
  "2026-11-04": ["Training", "VT Weights 6-7am", "Boys CIF"],
  "2026-11-05": ["Training", "Boys CIF"],
  "2026-11-06": ["TBD", "Boys CIF"],
  "2026-11-07": ["Boys CIF"],
  "2026-11-08": ["Girls First Contest", "Training", "VT Weights 6-7am"],
  "2026-11-09": ["Training", "Boys CIF"],
  "2026-11-10": ["Training", "Veterans Day", "Boys CIF"],
  "2026-11-11": ["Training", "VT Weights 6-7am", "Boys CIF"],
  "2026-11-12": ["Training", "Boys CIF"],
  "2026-11-13": ["TBD", "Boys CIF"],
  "2026-11-15": ["Training"],
  "2026-11-16": ["VT Weights 6-7am"],
  "2026-11-17": ["Training"],
  "2026-11-18": ["Training"],
  "2026-11-19": ["VT Weights 6-7am"],
  "2026-11-20": ["TBD", "Break"],
  "2026-11-22": ["Break", "OFF"],
  "2026-11-23": ["Training", "Break"],
  "2026-11-24": ["Training", "Break"],
  "2026-11-25": ["Training", "Break", "Alumni Game?"],
  "2026-11-26": ["OFF", "Break"],
  "2026-11-27": ["Training", "Break", "Alumni Game?"],
  "2026-11-28": ["Training", "Break"],
  "2026-11-29": ["OFF"],
  "2026-11-30": ["Training"],
  "2026-12-01": ["SM @ SM", "VT Weights 6-7am"],
  "2026-12-02": ["Training"],
  "2026-12-03": ["Training"],
  "2026-12-04": ["Mistletoe V", "VT Weights 6-7am"],
  "2026-12-05": ["Mistletoe V"],
  "2026-12-06": ["Training", "Break"],
  "2026-12-07": ["VT Weights 6-7am", "Break"],
  "2026-12-08": ["Training", "Break"],
  "2026-12-09": ["Villa Park V", "Break"],
  "2026-12-10": ["Villa Park V", "VT Weights 6-7am", "Break"],
  "2026-12-11": ["Villa Park V", "Break"],
  "2026-12-12": ["Break"],
  "2026-12-13": ["Training", "Break"],
  "2026-12-14": ["ES @ MC", "VT Weights 6-7am", "Break"],
  "2026-12-15": ["Training", "Break"],
  "2026-12-16": ["Training", "Break"],
  "2026-12-17": ["Training", "VT Weights 6-7am", "Break"],
  "2026-12-18": ["TBD", "Break"],
  "2026-12-19": ["Break"],
  "2026-12-20": ["Break"],
  "2026-12-21": ["Training", "Break"],
  "2026-12-22": ["Training", "Break"],
  "2026-12-23": ["Training", "Break"],
  "2026-12-24": ["OFF", "Break"],
  "2026-12-25": ["OFF", "Break"],
  "2026-12-26": ["OFF", "Break"],
  "2026-12-27": ["OFF", "Break"],
  "2026-12-28": ["Training", "Break"],
  "2026-12-29": ["Training", "Break", "Alumni Game?"],
  "2026-12-30": ["Training", "Break", "Alumni Game?"],
  "2026-12-31": ["OFF", "Break"],
  "2027-01-01": ["OFF", "Break"],
  "2027-01-02": ["OFF", "Break"],
  "2027-01-03": ["OFF", "Break"],
  "2027-01-04": ["Training"],
  "2027-01-05": ["PV @ MC"],
  "2027-01-06": ["Training"],
  "2027-01-07": ["Red @ Red"],
  "2027-01-08": ["VT Weights 6-7am"],
  "2027-01-09": ["TBD"],
  "2027-01-10": ["Training"],
  "2027-01-11": ["VT Weights 6-7am"],
  "2027-01-12": ["Training"],
  "2027-01-13": ["ES @ ES"],
  "2027-01-14": ["Oceanview V"],
  "2027-01-15": ["Oceanview V", "VT Weights 6-7am"],
  "2027-01-16": ["TBD"],
  "2027-01-17": ["Training"],
  "2027-01-18": ["SM @ MC", "VT Weights 6-7am"],
  "2027-01-19": ["Training"],
  "2027-01-20": ["PV @ PV"],
  "2027-01-21": ["VT Weights 6-7am"],
  "2027-01-22": ["TBD"],
  "2027-01-24": ["Training"],
  "2027-01-25": ["Red @ MC", "VT Weights 6-7am"],
  "2027-01-26": ["Last Contest"],
  "2027-01-27": ["TBD"],
  "2027-01-28": ["TBD", "VT Weights 6-7am"],
  "2027-01-29": ["TBD"],
  "2027-02-02": ["CIF"],
  "2027-02-03": ["CIF"],
  "2027-02-04": ["CIF"],
  "2027-02-05": ["CIF"],
  "2027-02-06": ["CIF"],
  "2027-02-08": ["CIF"],
  "2027-02-09": ["CIF"],
  "2027-02-10": ["CIF"],
  "2027-02-11": ["CIF"],
  "2027-02-12": ["CIF"],
  "2027-02-13": ["CIF"],
  "2027-02-15": ["CIF"],
  "2027-02-16": ["CIF"],
  "2027-02-17": ["CIF"],
  "2027-02-18": ["CIF"],
  "2027-02-19": ["CIF"],
  "2027-02-20": ["CIF"],
};
const boysRosters = {
  "2026/2027": {
    Varsity: [
      { cap: "1", last: "Player", first: "Name (G)" },
      { cap: "2", last: "Player", first: "Name" },
      { cap: "3", last: "Player", first: "Name" },
      { cap: "4", last: "Player", first: "Name" },
    ],
    JV: [
      { cap: "1", last: "Player", first: "Name (G)" },
      { cap: "2", last: "Player", first: "Name" },
      { cap: "3", last: "Player", first: "Name" },
    ],
    FS: [
      { cap: "1", last: "Player", first: "Name (G)" },
      { cap: "2", last: "Player", first: "Name" },
      { cap: "3", last: "Player", first: "Name" },
    ],
  },
};
const boysResults = {
  "Boys 26/27": [],
  "Boys 25/26": [
    { opponent: "Opponent TBD", score: "TBD", result: "TBD", ranking: "TBD" },
    { opponent: "Opponent TBD", score: "TBD", result: "TBD", ranking: "TBD" },
  ],
};
const boysSeasonSummaries = {
  "Boys 26/27": { year: "26/27", record: "TBD", league: "Bay League TBD", cif: "CIF TBD" },
  "Boys 25/26": { year: "25/26", record: "TBD", league: "Bay League TBD", cif: "CIF TBD" },
  "Boys 24/25": { year: "24/25", record: "TBD", league: "Bay League TBD", cif: "CIF TBD" },
};
const boysCalendarMonths = [
  { key: "2026-08", label: "August 2026" },
  { key: "2026-09", label: "September 2026" },
  { key: "2026-10", label: "October 2026" },
  { key: "2026-11", label: "November 2026" },
];
const boysCalendarEvents = {
  "2026-08-09": ["Boys First Contest"],
  "2026-08-17": ["First Day of School"],
  "2026-09-07": ["Labor Day"],
  "2026-09-21": ["No School"],
  "2026-10-21": ["Boys Last Contest"],
  "2026-10-26": ["Boys CIF"],
  "2026-10-27": ["Boys CIF"],
  "2026-10-28": ["Boys CIF"],
  "2026-10-29": ["Boys CIF"],
  "2026-10-30": ["Boys CIF"],
  "2026-10-31": ["Boys CIF"],
  "2026-11-01": ["Boys CIF"],
  "2026-11-02": ["Boys CIF"],
  "2026-11-03": ["Boys CIF"],
  "2026-11-04": ["Boys CIF"],
  "2026-11-05": ["Boys CIF"],
  "2026-11-06": ["Boys CIF"],
  "2026-11-07": ["Boys CIF"],
};

const rosterYear = document.querySelector("[data-roster-year]");
const rosterTeam = document.querySelector("[data-roster-team]");
const rosterTitle = document.querySelector("[data-roster-title]");
const rosterCount = document.querySelector("[data-roster-count]");
const rosterBody = document.querySelector("[data-roster-body]");
const resultsSeason = document.querySelector("[data-results-season]");
const resultsControls = document.querySelector("[data-results-controls]");
const resultsTitle = document.querySelector("[data-results-title]");
const resultsRecord = document.querySelector("[data-results-record]");
const resultsHead = document.querySelector("[data-results-head]");
const resultsBody = document.querySelector("[data-results-body]");
const summaryCount = document.querySelector("[data-summary-count]");
const summaryBody = document.querySelector("[data-summary-body]");
const teamRecords = document.querySelector("[data-team-records]");
const calendarMonth = document.querySelector("[data-calendar-month]");
const calendarTitle = document.querySelector("[data-calendar-title]");
const calendarCount = document.querySelector("[data-calendar-count]");
const calendarGrid = document.querySelector("[data-calendar-grid]");
const calendarStatus = document.querySelector("[data-calendar-status]");
const overviewDocument = document.querySelector("[data-program-overview]");
const overviewStatus = document.querySelector("[data-overview-status]");
const isBoysProgram = document.body.dataset.program === "boys";
const activeRosters = isBoysProgram ? boysRosters : rosters;
const activeResults = isBoysProgram ? boysResults : results;
const activeSeasonSummaries = isBoysProgram ? boysSeasonSummaries : seasonSummaries;
let activeCalendarMonths = isBoysProgram ? boysCalendarMonths : calendarMonths;
let activeCalendarEvents = isBoysProgram ? boysCalendarEvents : calendarEvents;
const scheduleView = new URLSearchParams(window.location.search).get("view");
const calendarSheetId = "1AXZmXIozSVJkObtWB_sMik6NyBT1zwOUKtNnugsqcmc";
const calendarSheetGid = "0";
const calendarSheetUrl = `https://docs.google.com/spreadsheets/d/${calendarSheetId}/gviz/tq?tqx=out:json&gid=${calendarSheetGid}`;
const calendarRefreshMs = 30 * 1000;
const overviewDocId = "1IJuJ3QoeIu_iCaGTwRJNGEFbLCUfnppFPz3VVlwclbQ";
const overviewDocUrl = `https://docs.google.com/document/d/${overviewDocId}/export?format=txt`;
const overviewRefreshMs = 10 * 60 * 1000;

const syncHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  header.classList.toggle("is-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    nav.classList.remove("is-open");
    header.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation");
  }
});

const closeNavDropdowns = (activeDropdown = null) => {
  nav.querySelectorAll(".nav-dropdown").forEach((item) => {
    if (item === activeDropdown) return;
    item.classList.remove("is-open");
    item.querySelector(".nav-dropdown-toggle")?.setAttribute("aria-expanded", "false");
  });
};

nav.querySelectorAll(":scope > a, :scope > .nav-dropdown").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    if (!item.classList.contains("nav-dropdown")) {
      closeNavDropdowns();
      return;
    }

    closeNavDropdowns(item);
    item.classList.add("is-open");
    item.querySelector(".nav-dropdown-toggle")?.setAttribute("aria-expanded", "true");
  });

  if (item.classList.contains("nav-dropdown")) {
    item.addEventListener("mouseleave", () => {
      item.classList.remove("is-open");
      item.querySelector(".nav-dropdown-toggle")?.setAttribute("aria-expanded", "false");
    });
  }
});

nav.querySelectorAll(".nav-dropdown-toggle").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const dropdown = toggle.closest(".nav-dropdown");
    const shouldOpen = !dropdown.classList.contains("is-open");

    closeNavDropdowns();

    dropdown.classList.toggle("is-open", shouldOpen);
    const isOpen = dropdown.classList.contains("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
});

document.querySelectorAll(".program-switcher-toggle").forEach((toggle) => {
  const switcher = toggle.closest(".program-switcher");

  switcher.addEventListener("mouseenter", () => {
    switcher.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
  });

  switcher.addEventListener("mouseleave", () => {
    switcher.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  });

  toggle.addEventListener("click", () => {
    const isOpen = switcher.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
});

const fillSelect = (select, options) => {
  select.innerHTML = options.map((option) => `<option value="${option}">${option}</option>`).join("");
};

const escapeHtml = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const isGameSchedule = (games) => games.some((game) => game.day || game.date || game.location);

const renderRoster = () => {
  const season = rosterYear.value;
  const team = rosterTeam.value;
  const players = activeRosters[season][team];

  rosterTitle.textContent = `${season} ${team}`;
  rosterCount.textContent = `${players.length} players`;
  rosterBody.innerHTML = players
    .map(
      (player) => `
        <tr>
          <td>${player.cap}</td>
          <td>${player.last}</td>
          <td>${player.first}</td>
        </tr>
      `,
    )
    .join("");
};

const syncRosterTeams = () => {
  fillSelect(rosterTeam, Object.keys(activeRosters[rosterYear.value]));
  renderRoster();
};

if (rosterYear && rosterTeam) {
  fillSelect(rosterYear, Object.keys(activeRosters));
  syncRosterTeams();
  rosterYear.addEventListener("change", syncRosterTeams);
  rosterTeam.addEventListener("change", renderRoster);
}

const renderResults = () => {
  const season = resultsSeason.value;
  const games = activeResults[season];
  const isOfficialSchedule = isGameSchedule(games);
  const resultsTable = resultsBody.closest(".results-table");

  resultsTable?.classList.toggle("official-schedule", isOfficialSchedule);
  resultsTitle.textContent = season;
  resultsRecord.textContent = "";
  resultsHead.innerHTML = isOfficialSchedule
    ? `
        <th scope="col">Day</th>
        <th scope="col">Date</th>
        <th scope="col">Opponent</th>
        <th scope="col">Location</th>
        <th scope="col">Time</th>
        <th scope="col">Level</th>
      `
    : `
        <th scope="col">Opponent</th>
        <th scope="col">Score</th>
        <th scope="col">Result</th>
        <th scope="col">Level</th>
      `;
  resultsBody.innerHTML = isOfficialSchedule
    ? games
        .map(
          (game) => `
            <tr class="${game.location === "Mira Costa HS" ? "home-game" : ""}">
              <td>${game.day}</td>
              <td>${game.date}</td>
              <td>${game.opponent}</td>
              <td>${game.location}</td>
              <td>${game.time || "TBD"}</td>
              <td>${game.level || "TBD"}</td>
            </tr>
          `,
        )
        .join("")
    : games
        .map(
          (game) => `
            <tr>
              <td>${game.opponent}</td>
              <td>${game.score}</td>
              <td><span class="result-pill ${game.result.toLowerCase()}">${game.result}</span></td>
              <td>${game.level || "TBD"}</td>
            </tr>
          `,
        )
        .join("");
};

const renderTeamRecords = () => {
  const summaries = Object.values(activeSeasonSummaries);

  summaryCount.textContent = `${summaries.length} seasons`;
  summaryBody.innerHTML = summaries
    .map(
      (summary) => `
        <tr>
          <td>${summary.year}</td>
          <td>${summary.record}</td>
          <td>${summary.league}</td>
          <td>${summary.cif}</td>
        </tr>
      `,
    )
    .join("");
};

const renderCalendar = () => {
  if (!activeCalendarMonths.length) {
    calendarTitle.textContent = "Calendar";
    calendarCount.textContent = "No events loaded";
    calendarMonth.innerHTML = "";
    calendarGrid.innerHTML = '<div class="calendar-empty">No calendar events are available yet.</div>';
    return;
  }

  const monthKey = calendarMonth.value;
  const month = activeCalendarMonths.find((item) => item.key === monthKey);
  const [year, monthNumber] = monthKey.split("-").map(Number);
  const date = new Date(year, monthNumber - 1, 1);
  const firstDay = date.getDay();
  const daysInMonth = new Date(year, monthNumber, 0).getDate();
  const monthEvents = Object.entries(activeCalendarEvents).filter(([eventDate]) => eventDate.startsWith(monthKey));
  const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;

  calendarTitle.textContent = month.label;
  calendarCount.textContent = `${monthEvents.length} dates with events`;

  calendarGrid.innerHTML = Array.from({ length: totalCells }, (_, index) => {
    const day = index - firstDay + 1;

    if (day < 1 || day > daysInMonth) {
      return '<div class="calendar-day is-empty" aria-hidden="true"></div>';
    }

    const key = `${monthKey}-${String(day).padStart(2, "0")}`;
    const events = activeCalendarEvents[key] || [];

    return `
      <article class="calendar-day">
        <span class="calendar-date">${day}</span>
        <div class="calendar-events">
          ${events.map((event) => `<span class="calendar-event">${event}</span>`).join("")}
        </div>
      </article>
    `;
  }).join("");
};

const parseGoogleVisualizationRows = (text) => {
  const json = text
    .replace(/^\/\*O_o\*\/\s*google\.visualization\.Query\.setResponse\(/, "")
    .replace(/\);\s*$/, "");
  const table = JSON.parse(json).table;

  return table.rows.map((row) =>
    Array.from({ length: table.cols.length }, (_, index) => {
      const cell = row.c?.[index];
      if (!cell) return "";
      return String(cell.f ?? cell.v ?? "").trim();
    }),
  );
};

const overviewHeadings = new Set([
  "Mission Statement",
  "Program Overview",
  "Athlete Conduct",
  "Athlete Conduct with their Coach",
  "Athlete Priorities",
  "Parent Conduct",
  "Attendance and Absences",
  "Injuries",
  "Academic Standards",
  "Equipment and Uniform",
  "Social Media",
  "Bullying/Harassment",
  "Communication",
  "Team Selections",
  "Disciplinary Process",
]);

const cleanOverviewText = (text) => {
  if (text.includes("<!DOCTYPE html") || text.includes("Sign in to your Google Account")) {
    throw new Error("The Google Doc is not public-readable yet.");
  }

  let lines = text
    .replace(/^\uFEFF/, "")
    .split(/\r?\n/)
    .map((line) => line.trim());
  const signatureStart = lines.findIndex((line) =>
    /^I,\s*_+/.test(line) ||
    /^student signature:/i.test(line) ||
    /^parent\/guardian signature:/i.test(line) ||
    /^date:/i.test(line),
  );

  if (signatureStart >= 0) lines = lines.slice(0, signatureStart);
  return lines;
};

const renderOverviewFromText = (text) => {
  const lines = cleanOverviewText(text);
  const html = [];
  let listType = null;
  let hasTitle = false;

  const closeList = () => {
    if (!listType) return;
    html.push(`</${listType}>`);
    listType = null;
  };

  lines.forEach((line) => {
    if (!line) {
      closeList();
      return;
    }

    const bulletMatch = line.match(/^[*•-]\s+(.+)/);
    const numberMatch = line.match(/^\d+[.)]\s+(.+)/);

    if (bulletMatch || numberMatch) {
      const nextListType = bulletMatch ? "ul" : "ol";
      if (listType !== nextListType) {
        closeList();
        html.push(`<${nextListType}>`);
        listType = nextListType;
      }
      html.push(`<li>${escapeHtml(bulletMatch?.[1] || numberMatch[1])}</li>`);
      return;
    }

    closeList();

    if (!hasTitle) {
      html.push(`<h2>${escapeHtml(line)}</h2>`);
      hasTitle = true;
    } else if (overviewHeadings.has(line)) {
      html.push(line === "Mission Statement" || line === "Program Overview" ? `<h3>${line}</h3>` : `<h4>${line}</h4>`);
    } else {
      html.push(`<p>${escapeHtml(line)}</p>`);
    }
  });

  closeList();
  return html.join("");
};

const loadProgramOverviewFromDoc = async () => {
  if (!overviewDocument || !overviewStatus || isBoysProgram) return;

  try {
    overviewStatus.textContent = "Loading Program Overview from Google Docs...";
    const response = await fetch(`${overviewDocUrl}&cache=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error("Google Docs did not return the Program Overview.");

    overviewDocument.innerHTML = renderOverviewFromText(await response.text());
    overviewStatus.textContent = "Program Overview updates from Google Docs every 10 minutes.";
  } catch (error) {
    overviewStatus.textContent = `${error.message} Share the doc as anyone with the link can view, then refresh this page.`;
  }
};

const parseCsv = (text) => {
  const rows = [];
  let row = [];
  let cell = "";
  let inQuotes = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (char === '"' && inQuotes && next === '"') {
      cell += '"';
      index += 1;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      row.push(cell.trim());
      cell = "";
    } else if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(cell.trim());
      if (row.some(Boolean)) rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }

  row.push(cell.trim());
  if (row.some(Boolean)) rows.push(row);
  return rows;
};

const normalizeHeader = (value) => value.toLowerCase().replace(/[^a-z0-9]/g, "");

const parseCalendarDate = (value) => {
  const trimmed = value.trim();
  if (!trimmed) return null;

  const slashMatch = trimmed.match(/^(\d{1,2})\/(\d{1,2})(?:\/(\d{2,4}))?$/);
  if (slashMatch) {
    const month = Number(slashMatch[1]);
    const day = Number(slashMatch[2]);
    const rawYear = slashMatch[3] ? Number(slashMatch[3]) : new Date().getFullYear();
    const year = rawYear < 100 ? 2000 + rawYear : rawYear;
    return new Date(year, month - 1, day);
  }

  const parsed = new Date(trimmed);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};

const formatCalendarKey = (date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

const formatCalendarMonth = (date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;

const getCurrentCalendarMonthKey = (months) => {
  const now = new Date();
  const currentKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  return months.some((month) => month.key === currentKey) ? currentKey : months[0]?.key || "";
};

const buildCalendarFromCsv = (csvText) => {
  if (csvText.includes("<!DOCTYPE html") || csvText.includes("Sign in to your Google Account")) {
    throw new Error("The Google Sheet is not public-readable yet.");
  }

  const rows = csvText.includes("google.visualization.Query.setResponse")
    ? parseGoogleVisualizationRows(csvText)
    : parseCsv(csvText);
  if (rows.length < 2) throw new Error("The Google Sheet does not have calendar rows yet.");

  const headers = rows[0].map(normalizeHeader);
  const findColumn = (...names) => names.map(normalizeHeader).map((name) => headers.indexOf(name)).find((index) => index >= 0);
  const dateIndex = findColumn("date", "day", "eventdate");
  const titleIndex = findColumn("event", "title", "activity", "description", "what");
  const timeIndex = findColumn("time", "starttime");
  const locationIndex = findColumn("location", "place", "where");
  const notesIndex = findColumn("notes", "note", "details");

  if (dateIndex === undefined) return buildCalendarFromGrid(rows);

  const events = {};
  rows.slice(1).forEach((row) => {
    const date = parseCalendarDate(row[dateIndex] || "");
    if (!date) return;

    const title = titleIndex !== undefined ? row[titleIndex] : "";
    const time = timeIndex !== undefined ? row[timeIndex] : "";
    const location = locationIndex !== undefined ? row[locationIndex] : "";
    const notes = notesIndex !== undefined ? row[notesIndex] : "";
    const eventText = [time, title, location, notes].filter(Boolean).join(" | ");
    if (!eventText) return;

    const key = formatCalendarKey(date);
    events[key] ||= [];
    events[key].push(eventText);
  });

  const monthKeys = [...new Set(Object.keys(events).map((key) => key.slice(0, 7)))].sort();
  const months = monthKeys.map((key) => {
    const [year, month] = key.split("-").map(Number);
    return { key, label: new Date(year, month - 1, 1).toLocaleDateString("en-US", { month: "long", year: "numeric" }) };
  });

  return { events, months };
};

const buildCalendarFromGrid = (rows) => {
  const monthNames = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];
  const monthHeaders = [];
  const groupStarts = [0, 8, 16];
  const monthLabelPattern = new RegExp(`^(${monthNames.join("|")})\\b\\s*(\\d{2})?`, "i");
  const isDayCell = (value) => /^\d{1,2}$/.test(String(value || ""));

  rows.forEach((row, rowIndex) => {
    groupStarts.forEach((start) => {
      const match = String(row[start] || "").trim().match(monthLabelPattern);
      if (!match) return;

      const monthIndex = monthNames.indexOf(match[1].toLowerCase());
      const year = match[2] ? 2000 + Number(match[2]) : 2026;
      monthHeaders.push({ key: `${year}-${String(monthIndex + 1).padStart(2, "0")}`, label: `${match[1]} ${year}`, monthIndex, rowIndex, start, year });
    });
  });

  if (!monthHeaders.some((month) => month.key === "2027-02")) {
    const lastHeaderRow = Math.max(...monthHeaders.map((month) => month.rowIndex));
    const februaryWeekdayRow = rows.findIndex((row, rowIndex) => {
      if (rowIndex <= lastHeaderRow) return false;
      const weekdayLike = row.slice(0, 7).filter((cell) => /^[smtwf]$/i.test(cell || "")).length;
      return weekdayLike >= 3 && rows[rowIndex + 1]?.slice(0, 7).some(isDayCell);
    });

    if (februaryWeekdayRow > 0) {
      monthHeaders.push({
        key: "2027-02",
        label: "February 2027",
        monthIndex: 1,
        rowIndex: februaryWeekdayRow - 1,
        start: 0,
        year: 2027,
      });
    }
  }

  if (!monthHeaders.length) {
    throw new Error('The Google Sheet needs either a "Date" column or a calendar grid with month names.');
  }

  const events = {};

  monthHeaders.forEach((month) => {
    const nextHeaderRow = monthHeaders
      .filter((candidate) => candidate.start === month.start && candidate.rowIndex > month.rowIndex)
      .map((candidate) => candidate.rowIndex)
      .sort((a, b) => a - b)[0] ?? rows.length;

    for (let rowIndex = month.rowIndex + 1; rowIndex < nextHeaderRow; rowIndex += 1) {
      const row = rows[rowIndex];
      if (!row.slice(month.start, month.start + 7).some(isDayCell)) continue;

      const eventRows = [];
      for (let eventRowIndex = rowIndex + 1; eventRowIndex < nextHeaderRow; eventRowIndex += 1) {
        const possibleEventRow = rows[eventRowIndex];
        if (possibleEventRow.slice(month.start, month.start + 7).some(isDayCell)) break;
        if (groupStarts.some((start) => String(possibleEventRow[start] || "").trim().match(monthLabelPattern))) break;
        eventRows.push(possibleEventRow);
      }

      row.slice(month.start, month.start + 7).forEach((dayValue, dayOffset) => {
        if (!isDayCell(dayValue)) return;

        const dayEvents = eventRows.map((eventRow) => eventRow[month.start + dayOffset]).filter(Boolean);
        if (!dayEvents.length) return;

        const key = formatCalendarKey(new Date(month.year, month.monthIndex, Number(dayValue)));
        events[key] ||= [];
        events[key].push(...dayEvents);
      });
    }
  });

  const months = monthHeaders.map(({ key, label }) => ({ key, label }));

  return { events, months };
};

const loadCalendarFromSheet = async () => {
  if (!calendarMonth || !calendarGrid || isBoysProgram) return;

  try {
    calendarStatus.textContent = "Loading calendar from Google Sheets...";
    const selectedMonth = calendarMonth.value;
    const response = await fetch(`${calendarSheetUrl}&cache=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error("Google Sheets did not return calendar data.");

    const { events, months } = buildCalendarFromCsv(await response.text());
    activeCalendarEvents = events;
    activeCalendarMonths = months;
    calendarMonth.innerHTML = activeCalendarMonths
      .map((month) => `<option value="${month.key}">${month.label}</option>`)
      .join("");
    calendarMonth.value = activeCalendarMonths.some((month) => month.key === selectedMonth)
      ? selectedMonth
      : getCurrentCalendarMonthKey(activeCalendarMonths);
    calendarStatus.textContent = "Calendar updates from Google Sheets every 30 seconds.";
    renderCalendar();
  } catch (error) {
    activeCalendarEvents = calendarEvents;
    activeCalendarMonths = calendarMonths;
    calendarMonth.innerHTML = activeCalendarMonths
      .map((month) => `<option value="${month.key}">${month.label}</option>`)
      .join("");
    calendarMonth.value = getCurrentCalendarMonthKey(activeCalendarMonths);
    calendarStatus.textContent = `${error.message} Showing the saved calendar until Google Sheets is available.`;
    renderCalendar();
  }
};

if (calendarMonth && calendarGrid) {
  if (isBoysProgram) {
    calendarMonth.innerHTML = activeCalendarMonths
      .map((month) => `<option value="${month.key}">${month.label}</option>`)
      .join("");
    calendarMonth.value = getCurrentCalendarMonthKey(activeCalendarMonths);
    if (calendarStatus) calendarStatus.textContent = "Calendar displays one month at a time.";
    renderCalendar();
  } else {
    calendarMonth.innerHTML = activeCalendarMonths
      .map((month) => `<option value="${month.key}">${month.label}</option>`)
      .join("");
    calendarMonth.value = getCurrentCalendarMonthKey(activeCalendarMonths);
    renderCalendar();
    loadCalendarFromSheet();
    window.setInterval(loadCalendarFromSheet, calendarRefreshMs);
  }
  calendarMonth.addEventListener("change", renderCalendar);
}

const sheetCalendarMonth = document.querySelector("[data-sheet-calendar-month]");
const sheetCalendarFrame = document.querySelector("[data-sheet-calendar-frame]");
const sheetCalendarBaseUrl = `https://docs.google.com/spreadsheets/d/${calendarSheetId}/htmlview?gid=${calendarSheetGid}&chrome=false`;
const sheetCalendarMonths = [
  { key: "2026-05", label: "May 2026", range: "A1:G27" },
  { key: "2026-06", label: "June 2026", range: "I1:O27" },
  { key: "2026-07", label: "July 2026", range: "Q1:W27" },
  { key: "2026-08", label: "August 2026", range: "A28:G54" },
  { key: "2026-09", label: "September 2026", range: "I28:O54" },
  { key: "2026-10", label: "October 2026", range: "Q28:W54" },
  { key: "2026-11", label: "November 2026", range: "A55:G81" },
  { key: "2026-12", label: "December 2026", range: "I55:O81" },
  { key: "2027-01", label: "January 2027", range: "Q55:W81" },
  { key: "2027-02", label: "February 2027", range: "A78:G102" },
];

const getDefaultSheetCalendarMonth = () => {
  const now = new Date();
  const key = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  return sheetCalendarMonths.some((month) => month.key === key) ? key : sheetCalendarMonths[0].key;
};

const loadSheetCalendarMonth = () => {
  if (!sheetCalendarMonth || !sheetCalendarFrame) return;

  const month = sheetCalendarMonths.find((item) => item.key === sheetCalendarMonth.value) || sheetCalendarMonths[0];
  sheetCalendarFrame.setAttribute(
    "src",
    `${sheetCalendarBaseUrl}&range=${encodeURIComponent(month.range)}&refresh=${Date.now()}`
  );
};

if (sheetCalendarMonth && sheetCalendarFrame) {
  sheetCalendarMonth.innerHTML = sheetCalendarMonths
    .map((month) => `<option value="${month.key}">${month.label}</option>`)
    .join("");
  sheetCalendarMonth.value = getDefaultSheetCalendarMonth();
  loadSheetCalendarMonth();
  sheetCalendarMonth.addEventListener("change", loadSheetCalendarMonth);
  window.setInterval(loadSheetCalendarMonth, calendarRefreshMs);
}

const syncRecordView = () => {
  const showTeamRecords = scheduleView === "records";
  document.querySelector(".results-panel").hidden = showTeamRecords;
  teamRecords.hidden = !showTeamRecords;
};

if (resultsSeason) {
  const resultOptions = Object.keys(activeResults);
  const scheduleOptions = resultOptions.filter((season) => isGameSchedule(activeResults[season]));
  const pastOptions = resultOptions.filter((season) => !isGameSchedule(activeResults[season]));
  const visibleOptions =
    scheduleView === "past"
      ? pastOptions
      : scheduleView === "records"
        ? resultOptions
        : scheduleOptions.length
          ? scheduleOptions
          : resultOptions;

  if (scheduleView === "past" || scheduleView === "records") {
    nav.querySelectorAll(".nav-dropdown").forEach((dropdown) => {
      const label = dropdown.querySelector(".nav-dropdown-toggle")?.textContent?.trim();
      dropdown.classList.toggle("is-active", label === "History");
    });
  }

  fillSelect(resultsSeason, visibleOptions);
  if (resultsControls) {
    const showControls = scheduleView === "past";
    resultsControls.hidden = !showControls;
    resultsControls.style.display = showControls ? "" : "none";
    resultsControls.closest(".results-panel")?.classList.toggle("is-full-width", !showControls);
  }
  renderResults();
  renderTeamRecords();
  resultsSeason.addEventListener("change", renderResults);
  syncRecordView();
}

if (overviewDocument && overviewStatus && !isBoysProgram) {
  loadProgramOverviewFromDoc();
  window.setInterval(loadProgramOverviewFromDoc, overviewRefreshMs);
}

document.querySelector("form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector("button");
  const originalText = button.textContent;

  button.textContent = "Interest received";
  button.disabled = true;

  window.setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
    event.currentTarget.reset();
  }, 2200);
});
