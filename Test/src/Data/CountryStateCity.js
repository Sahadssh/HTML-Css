const countryStateCity = [
  {
    id: 1,
    name: "India",
    states: [
      {
        id: 1,
        countryId: 1,
        name: "Maharashtra",
        cities: [

          { id: 1, stateId: 1, name: "Mumbai" },
          { id: 2, stateId: 1, name: "Pune" },
        ],
      },
      {
        id: 2,
        countryId: 1,
        name: "Gujarat",
        cities: [
          { id: 1, stateId: 2, name: "Patan" },
          { id: 2, stateId: 2, name: "Mehsana" },
          { id: 3, stateId: 2, name: "Surat" },
        ],
      },
      {
        id: 3,
        countryId: 1,
        name: "Karnataka",
        cities: [
          { id: 1, stateId: 3, name: "Bangalore" },
          { id: 2, stateId: 3, name: "Mangalore" },
        ],
      },
      {
        id: 4,
        countryId: 1,
        name: "Punjab",
        cities: [
          { id: 1, stateId: 4, name: "Amritsar" },
          { id: 2, stateId: 4, name: "Ludhiana" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "USA",
    states: [
      {
        id: 5,
        countryId: 2,
        name: "California",
        cities: [
          { id: 1, stateId: 5, name: "Los Angeles" },
          { id: 2, stateId: 5, name: "San Francisco" },
        ],
      },
      {
        id: 6,
        countryId: 2,
        name: "Texas",
        cities: [
          { id: 1, stateId: 6, name: "Houston" },
          { id: 2, stateId: 6, name: "Dallas" },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Canada",
    states: [
      {
        id: 7,
        countryId: 3,
        name: "Ontario",
        cities: [
          { id: 1, stateId: 7, name: "Toronto" },
          { id: 2, stateId: 7, name: "Ottawa" },
        ],
      },
      {
        id: 8,
        countryId: 3,
        name: "British Columbia",
        cities: [
          { id: 1, stateId: 8, name: "Vancouver" },
          { id: 2, stateId: 8, name: "Victoria" },
        ],
      },
    ],
  },
];

export default countryStateCity;
