function getImage () {
  const imageNum = (
    Math.floor(Math.random() * process.env.NUM_IMAGES) + 1
  ).toString()

  return new Array(4 - imageNum.length + 1).join('0') + imageNum
}

const handler = async event => {
  try {
    const image = getImage()

    return {
      statusCode: 200,
      body: JSON.stringify({
        id: image.split('.')[0],
        url: `https://minnie.dog/images/${image}`
      })
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
