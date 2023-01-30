export const query = `
query{
  jobCollection{
    items
    { 
      name
      department{title}
      type{title}
      employee{city}
      levelsCollection{items{title}}
    }
  }
  }
`;