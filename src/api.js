function getOwnerDetails(data) {
  if (!data || !data.owner) {
    throw new Error('Owner data is missing');
  }
  return data.owner;
}

module.exports = { getOwnerDetails };