function isNewEngland(stateCode) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(stateCode);
}

const newEnglanders = someCustomers.filter((c) => isNewEngland(c.address.state));
